import React, { useState } from 'react';
import axios from 'axios';
import TextAnimation from './TextAnimation';

const AddItem: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    picture: '',
  });

  const { name, description, picture } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify({ name, description, picture });

      const res = await axios.post('http://localhost:8000/api/products/add', body, config);
      console.log('Product added successfully:', res.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Axios error:', err.response?.data);
      } else if (err instanceof Error) {
        console.error('Error:', err.message);
      } else {
        console.error('An unknown error occurred:', err);
      }
    }
  };

  return (
    <TextAnimation />
    // <div>
    //   <h1>Add Item Page</h1>
    //   <form onSubmit={onSubmit}>
    //     <div>
    //       <input
    //         type="text"
    //         placeholder="Name"
    //         name="name"
    //         value={name}
    //         onChange={onChange}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <input
    //         type="text"
    //         placeholder="Description"
    //         name="description"
    //         value={description}
    //         onChange={onChange}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <input
    //         type="text"
    //         placeholder="Picture URL"
    //         name="picture"
    //         value={picture}
    //         onChange={onChange}
    //         required
    //       />
    //     </div>
    //     <button type="submit">Add to Card</button>
    //   </form>
    // </div>
  );
};

export default AddItem;