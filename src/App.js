import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import { AuthProvider,useAuth } from './Context/AuthContext';
import About from './Components/About';
import Navbar from './Components/Navbar';

function App() {

  const ProtectedRoute = ({ element }) => {
    const auth = useAuth();
    return auth.token ? element : <Navigate to="/login" />;
  };

  return (
    <AuthProvider>
      <BrowserRouter basename="/Ecommerce_shop">
      <Navbar/>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
          <Route index element={<Navigate to="/login" />} />
        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
