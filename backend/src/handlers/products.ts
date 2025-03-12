import { Router } from "express";
import multer from "multer";
import path from "path";
import { ObjectId } from "mongodb"; // ✅ Import ObjectId

const router = Router();
const upload = multer({ dest: "uploads/" });

export default function mountProductEndpoints(router: Router) {
  router.post("/add", upload.single("image"), async (req, res) => {
    const { name, description, category, price, availableStock } = req.body;
    const image = req.file;

    if (!name || !description || !category || !price || !availableStock || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const app = req.app;
    const productCollection = app.locals.productCollection;

    const newProduct = {
      name,
      description,
      category,
      price: parseFloat(price),
      availableStock: parseInt(availableStock),
      imageUrl: `/uploads/${image.filename}`, // ✅ Fixed template string syntax
      createdAt: new Date(),
    };

    await productCollection.insertOne(newProduct);
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  });

  router.get("/", async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const app = req.app;
    const productCollection = app.locals.productCollection;

    try {
      const products = await productCollection
        .find()
        .skip((Number(page) - 1) * Number(limit))
        .limit(Number(limit))
        .toArray();

      res.status(200).json({ products });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  router.post("/:id/like", async (req, res) => {
    const { id } = req.params;
    const app = req.app;
    const productCollection = app.locals.productCollection;

    try {
      const product = await productCollection.findOne({ _id: new ObjectId(id) });

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      const currentLikes = product.likes || 0; // Default to 0 if undefined
      const newLikes = currentLikes > 0 ? 0 : 1; // Toggle like/dislike

      await productCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { likes: newLikes } }
      );

      // Respond with updated like status
      res.status(200).json({ message: newLikes === 1 ? "Liked" : "Disliked", likes: newLikes });

    } catch (error) {
      console.error("Error toggling like:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const app = req.app;
    const productCollection = app.locals.productCollection;

    try {
      const product = await productCollection.findOne({ _id: new ObjectId(id) });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ product });
    } catch (error) {
      console.error("Error fetching product details:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
}
