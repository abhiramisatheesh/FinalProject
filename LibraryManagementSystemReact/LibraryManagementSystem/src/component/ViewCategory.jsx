import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, TableHead, TableBody, TableRow, TableCell, Typography, Paper } from "@mui/material";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7002/api/New/viewcategory") // Replace with your API endpoint
      .then(response => setCategories(response.data))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Categories</Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map(category => (
              <TableRow key={category.id}>
                <TableCell>{category.id}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default CategoryList;
