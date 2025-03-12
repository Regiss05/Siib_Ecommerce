import { Router } from "express";
import { ObjectId } from "mongodb";
// import Cart from "../types/cart";

const router = Router();

export default function mountCartEndpoints(router: Router) {
  // Add item to cart
  router.post("/add", async (req, res) => {
    const { userId, productId, quantity } = req.body;
    const app = req.app;
    const cartCollection = app.locals.cartCollection;
  
    if (!userId || !productId || !quantity) {
      return res.status(400).json({ message: "Missing required fields" });
    }
  
    try {
      // Ensure product exists before adding to cart
      const product = await app.locals.productCollection.findOne({ _id: new ObjectId(productId) });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      const existingCartItem = await cartCollection.findOne({ userId, productId });
  
      if (existingCartItem) {
        await cartCollection.updateOne(
          { userId, productId },
          { $inc: { quantity } }
        );
      } else {
        await cartCollection.insertOne({
          userId,
          productId,
          quantity,
          createdAt: new Date(),
        });
      }
  
      res.status(200).json({ message: "Item added to cart" });
    } catch (error) {
      console.error("Error adding to cart:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Remove item from cart
  router.delete("/remove/:id", async (req, res) => {
    const { id } = req.params;
    const app = req.app;
    const cartCollection = app.locals.cartCollection;

    try {
      await cartCollection.deleteOne({ _id: new ObjectId(id) });
      res.status(200).json({ message: "Item removed from cart" });
    } catch (error) {
      console.error("Error removing item:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Clear cart for a user
  router.delete("/clear/:userId", async (req, res) => {
    const { userId } = req.params;
    const app = req.app;
    const cartCollection = app.locals.cartCollection;

    try {
      await cartCollection.deleteMany({ userId });
      res.status(200).json({ message: "Cart cleared" });
    } catch (error) {
      console.error("Error clearing cart:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
}
