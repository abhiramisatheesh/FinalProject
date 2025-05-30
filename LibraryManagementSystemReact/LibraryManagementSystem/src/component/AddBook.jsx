// import React, { useState } from "react";
// import axios from "axios";

// const AddBook = () => {
//   const [book, setBook] = useState({
    
//     title: "",
//     description: "",
//     publicationYear: "",
//     authorId: "",
//     categoryId: ""
//   });

//   const handleChange = (e) => {
//     setBook({ ...book, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post("https://localhost:7002/api/New/addbooks", book) // Replace with your API endpoint
//       .then(response => alert("Book added successfully!"))
//       .catch(error => console.error("Error adding book:", error));
//   };

//   return (
//     <div>
//       <h2>Add a New Book</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="title" placeholder="Title" value={book.title} onChange={handleChange} required />
//         <input type="text" name="description" placeholder="Description" value={book.description} onChange={handleChange} required />
//         <input type="text" name="publicationYear" placeholder="Publication Year" value={book.publicationYear} onChange={handleChange} required />
//         <input type="number" name="authorId" placeholder="Author ID" value={book.authorId} onChange={handleChange} required />
//         <input type="number" name="categoryId" placeholder="Category ID" value={book.categoryId} onChange={handleChange} required />
//         <button type="submit">Add Book</button>
//       </form>
//     </div>
//   );
// };

// export default AddBook;
//****************
//  */

import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    publicationYear: "",
    authorId: "",
    categoryId: ""
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://localhost:7002/api/New/addbooks", book) // Replace with your API endpoint
      .then(response => alert("Book added successfully!"))
      .catch(error => console.error("Error adding book:", error));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Add a New Book</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Title" name="title" value={book.title} onChange={handleChange} fullWidth required />
        <TextField label="Description" name="description" value={book.description} onChange={handleChange} fullWidth required />
        <TextField label="Publication Year" name="publicationYear" value={book.publicationYear} onChange={handleChange} fullWidth required />
        <TextField label="Author ID" name="authorId" value={book.authorId} onChange={handleChange} type="number" fullWidth required />
        <TextField label="Category ID" name="categoryId" value={book.categoryId} onChange={handleChange} type="number" fullWidth required />
        <Button type="submit" variant="contained" color="primary">Add Book</Button>
      </Box>
    </Container>
  );
};

export default AddBook;
