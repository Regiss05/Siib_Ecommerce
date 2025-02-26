import { Schema, model, Document } from 'mongoose';

interface IProduct extends Document {
  name: string;
  description: string;
  picture: string;
  addedToCard: boolean;
}

const ProductSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  addedToCard: {
    type: Boolean,
    default: false,
  },
});

export const Product = model<IProduct>('Product', ProductSchema);