import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const AddAuthor = () => {
  const [author, setAuthor] = useState({ name: "", bio: "" });

  const handleChange = (e) => {
    setAuthor({ ...author, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://localhost:7002/api/New/addauthor", author) // Replace with your API endpoint
      .then(response => alert("Author added successfully!"))
      .catch(error => console.error("Error adding author:", error));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Add a New Author</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Author Name" name="name" value={author.name} onChange={handleChange} fullWidth required />
        <TextField label="Bio" name="bio" value={author.bio} onChange={handleChange} fullWidth required multiline rows={4} />
        <Button type="submit" variant="contained" color="primary">Add Author</Button>
      </Box>
    </Container>
  );
};

export default AddAuthor;
