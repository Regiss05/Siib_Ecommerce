import { Router } from "express";
import multer from "multer";
import path from "path";

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
      imageUrl: `/uploads/${image.filename}`,
      createdAt: new Date(),
    };

    await productCollection.insertOne(newProduct);
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  });

  router.get("/", async (req, res) => {
    const app = req.app;
    const productCollection = app.locals.productCollection;
  
    try {
      const products = await productCollection.find().toArray();
      res.status(200).json({ products });
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
}
