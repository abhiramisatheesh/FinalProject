// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const BookTable = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     axios.get("https://localhost:7002/api/New/viewbooks") // Replace with your API endpoint
//       .then(response => setBooks(response.data))
//       .catch(error => console.error("Error fetching books:", error));
//   }, []);

//   return (
//     <div>
//       <h2>Library Books</h2>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Publication Year</th>
//             <th>Author ID</th>
//             <th>Category ID</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map(book => (
//             <tr key={book.id}>
//               <td>{book.id}</td>
//               <td>{book.title}</td>
//               <td>{book.description}</td>
//               <td>{book.publicationYear}</td>
//               <td>{book.authorId}</td>
//               <td>{book.categoryId}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookTable;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, TableHead, TableBody, TableRow, TableCell, Typography, Paper } from "@mui/material";

const BookTable = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7002/api/New/viewbooks") // Replace with your API endpoint
      .then(response => setBooks(response.data))
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>Library Books</Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Title</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Publication Year</strong></TableCell>
              <TableCell><strong>Author ID</strong></TableCell>
              <TableCell><strong>Category ID</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map(book => (
              <TableRow key={book.id}>
                <TableCell>{book.id}</TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.description}</TableCell>
                <TableCell>{book.publicationYear}</TableCell>
                <TableCell>{book.authorId}</TableCell>
                <TableCell>{book.categoryId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default BookTable;
