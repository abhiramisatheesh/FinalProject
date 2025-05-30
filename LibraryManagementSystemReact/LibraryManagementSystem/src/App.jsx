import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import AddBook from './component/AddBook.jsx';
import Home from './component/Home.jsx';
import ViewBooks from './component/ViewBook.jsx';
import AddCategory from './component/AddCategory.jsx';
import AddAuthor  from './component/AddAuthor.jsx';
import ViewCategory from './component/ViewCategory.jsx'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/books" element={<ViewBooks />} />
        <Route path="/category" element={<AddCategory />} />
        <Route path="/author" element={<AddAuthor />} />
         <Route path="/catview" element={<ViewCategory />} />
      </Routes>
    </Router>
  );
};

export default App;
