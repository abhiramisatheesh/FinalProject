// import React, { useState } from "react";
// import axios from "axios";

// const AddCategory = () => {
//   const [category, setCategory] = useState({ name: "", description: "" });

//   const handleChange = (e) => {
//     setCategory({ ...category, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post("https://localhost:7002/api/New/addcategory", category) // Replace with your API endpoint
//       .then(response => alert("Category added successfully!"))
//       .catch(error => console.error("Error adding category:", error));
//   };

//   return (
//     <div>
//       <h2>Add a New Category</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Category Name" value={category.name} onChange={handleChange} required />
//         <input type="text" name="description" placeholder="Description" value={category.description} onChange={handleChange} required />
//         <button type="submit">Add Category</button>
//       </form>
//     </div>
//   );
// };

// export default AddCategory;

import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const AddCategory = () => {
  const [category, setCategory] = useState({ name: "", description: "" });

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://localhost:7002/api/New/addcategory", category) // Replace with your API endpoint
      .then(response => alert("Category added successfully!"))
      .catch(error => console.error("Error adding category:", error));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Add a New Category</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Category Name" name="name" value={category.name} onChange={handleChange} fullWidth required />
        <TextField label="Description" name="description" value={category.description} onChange={handleChange} fullWidth required />
        <Button type="submit" variant="contained" color="primary">Add Category</Button>
      </Box>
    </Container>
  );
};

export default AddCategory;
