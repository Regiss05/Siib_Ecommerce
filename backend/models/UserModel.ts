import { Schema, model, Document } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

interface IUser extends Document {
  username: string;
  email: string;
  role: "user" | "admin" | "guest";
  password: string;
  passwordConfirm?: string;
  passwordChangedAt?: Date;
  active: boolean;
  photo: string;
  photoId?: string;
  slug?: string;
  isOnline: boolean;
  currentChatroom?: Schema.Types.ObjectId;
  activeSocketId?: string;
  createdChatrooms?: Schema.Types.ObjectId;
  correctPassword(candidatePassword: string, userPassword: string): Promise<boolean>;
  changedPasswordAfter(JWTTimestamp: number): boolean;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: [true, "Please tell us your username!"] },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  role: {
    type: String,
    enum: ["user", "admin", "guest"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    validate: {
      validator: function (this: IUser, el: string): boolean {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  passwordChangedAt: Date,
  active: { type: Boolean, default: true, select: false },
  photo: { type: String, default: "default.jpg" },
  photoId: String,
  slug: String,
  isOnline: { type: Boolean, default: false },
  currentChatroom: { type: Schema.Types.ObjectId, ref: "Chatroom" },
  activeSocketId: String,
  createdChatrooms: { type: Schema.Types.ObjectId, ref: "Chatroom" },
});

userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  this: IUser,
  candidatePassword: string,
  userPassword: string
): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (
  this: IUser,
  JWTTimestamp: number
): boolean {
  if (this.passwordChangedAt) {
    const changedTimestamp = Math.floor(this.passwordChangedAt.getTime() / 1000);
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

const User = model<IUser>("User", userSchema);
export default User;
