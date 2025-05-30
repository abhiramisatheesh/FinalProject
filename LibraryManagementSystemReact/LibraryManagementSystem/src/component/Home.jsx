// //import React from 'react'
// import { AppBar, Box,IconButton, Toolbar, Typography,Button,   } from "@mui/material";
// import { Link } from "react-router-dom";

// function home() {
//   return (
//     <nav className="navbar">

   
//     <div>

// <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{ backgroundColor: 'black' }}>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
           
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Welcome to Library Management System
//           </Typography>
           
//          <Link to={'/login'} ><Button style={{ color: "white" }} color="inherit">Login</Button></Link>
//           <Link to={'/adminlogin'} ><Button style={{ color: "white" }} color="inherit">Admin Login</Button></Link>
//         {/*<Link to={'/addmovie'} ><Button style={{ color: "white" }} color="inherit">Add Movie</Button></Link> */}
//           {/* <Button color="inherit">SignUp</Button> */}
//         </Toolbar>
//       </AppBar>
//     </Box>
        
//     </div>
//     </nav>




  
//   )
// }

// export default home

import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <Container maxWidth="md" style={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h3" gutterBottom>Welcome to Library Management System</Typography>
      <Typography variant="h6" color="textSecondary">
        Manage books, users, and borrowing records efficiently.
      </Typography>
      <div style={{ marginTop: "20px" }}>
        <Button variant="contained" color="primary" component={Link} to="/books">
          View Books
        </Button>
        <Button variant="contained" color="secondary" component={Link} to="/add-book" style={{ marginLeft: "10px" }}>
          Add New Book
        </Button>
         <Button variant="contained" color="secondary" component={Link} to="/category" style={{ marginLeft: "10px" }}>
          Add Category
        </Button>
         <Button variant="contained" color="secondary" component={Link} to="/author" style={{ marginLeft: "10px" }}>
          Add Author
        </Button>
         <Button variant="contained" color="secondary" component={Link} to="/catview" style={{ marginLeft: "10px" }}>
          View Category
        </Button>
       
        
      </div>
    </Container>
  );
};

export default Home;
