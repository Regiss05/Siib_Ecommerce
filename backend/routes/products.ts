import express, { Request, Response } from 'express';
import { Product } from '../models/Product'; // Adjust the import based on your project structure

const router = express.Router();

// Define the type for the request body
interface ProductRequestBody {
  name: string;
  description: string;
  picture: string;
}

router.post('/add', async (req: Request<{}, {}, ProductRequestBody>, res: Response) => {
  const { name, description, picture } = req.body;

  try {
    const newProduct = new Product({
      name,
      description,
      picture,
    });

    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    // Check if err is an instance of Error
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).send('Server error');
    } else {
      // Handle cases where err is not an Error object
      console.error('An unknown error occurred:', err);
      res.status(500).send('An unknown error occurred');
    }
  }
});

export default router;