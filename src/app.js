import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';


import './App.css';

const App = () => {
  return (
    <Box width="400px">
        Navbar 
         <Route>
            <Route path="/" element={<h1> Home</h1>} />
         </Route>
    </Box>
  )
}

export default App