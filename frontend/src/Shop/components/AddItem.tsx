import React, { useState, useEffect } from "react";
import axios from "axios";

const AddItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [availableStock, setAvailableStock] = useState("");
  const [shopId, setShopId] = useState(""); // ✅ New state for shop selection
  const [shops, setShops] = useState([]); // ✅ Stores available shops
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    axios.get("http://localhost:8000/shops")
      .then((res) => setShops(res.data.shops))
      .catch((error) => console.error("Error fetching shops:", error));
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImageFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!imageFile) return alert("Please select an image.");
    if (!shopId) return alert("Please select a shop.");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("availableStock", availableStock);
    formData.append("shopId", shopId);
    formData.append("image", imageFile);

    try {
      const response = await fetch("http://localhost:8000/products/add", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Product added successfully!");
        setName("");
        setDescription("");
        setCategory("");
        setPrice("");
        setAvailableStock("");
        setShopId("");
        setImageFile(null);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <input type="number" placeholder="Available Stock" value={availableStock} onChange={(e) => setAvailableStock(e.target.value)} required />

      <select value={shopId} onChange={(e) => setShopId(e.target.value)} required>
        <option value="">Select a Shop</option>
        {shops.map((shop) => (
          // @ts-ignore
          <option key={shop._id} value={shop._id}>{shop.shopName}</option>
        ))}
      </select>

      <input type="file" accept="image/*" onChange={handleFileChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddItem;
