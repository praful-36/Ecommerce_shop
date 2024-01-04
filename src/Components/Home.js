import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { useAuth } from '../Context/AuthContext';
import Cart from './Cart';


function Home() {
  const { token } = useAuth();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Extract the 'products' array from the response
        const { products } = response.data || [];

        setProducts(products || []);  // Ensure 'products' is an array or initialize as an empty array
        setFilteredProducts(products || []); // Initialize filteredProducts with 'products'
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
    fetchProducts();
    // eslint-disable-next-line
  }, [token]);

  const handleSearch = () => {
    const lowercaseSearchTerm = (searchTerm || '').toLowerCase().trim();

    const searchTermsArray = lowercaseSearchTerm.split(/\s+/);

    const filteredProducts = products.filter((product) => {
      const lowercaseProductTitle = (product.title || '').toLowerCase().trim();

      // Check if all search terms are included in the product title
      const allTermsMatch = searchTermsArray.every((term) =>
        lowercaseProductTitle.includes(term)
      );

      const priceMatches =
        (!minPrice || product.price >= parseFloat(minPrice)) &&
        (!maxPrice || product.price <= parseFloat(maxPrice));

      return allTermsMatch && priceMatches;
    });
    setFilteredProducts(filteredProducts);
  };

  const addToCart = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);

    if (selectedProduct) {
      console.log("Adding to cart:", selectedProduct);
      setCart((prevCart) => [...prevCart, selectedProduct]);

      // Show styled alert message
      const alertContainer = document.createElement("div");
      alertContainer.className = "alert-container";
      alertContainer.innerText = `${selectedProduct.title} added to cart!`;
      document.body.appendChild(alertContainer);

      setTimeout(() => {
        alertContainer.classList.add('hide');
        setTimeout(() => {
          document.body.removeChild(alertContainer);
        }, 300);
      }, 1500);
    } else {
      console.warn(`Product with ID ${productId} not found`);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  return (
    <div className="container mt-3">
      <div className="row">
      </div>
      <div className="d-flex mt-3 flex-lg-row flex-column">

        <div className="col mx-2">
          <input type="text" className="form-control" placeholder="Search products" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        <div className="col mx-2">
          <input type="number" className="form-control" placeholder="Min Price" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        </div>

        <div className="col mx-2">
          <input type="number" className="form-control" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        </div>

        <div className="col mx-2">
          <button className="btn btn-success" onClick={handleSearch}>
            Search
          </button>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>

      </div>

      <div className="row mt-3">
  {[...Array(4)].map((_, colIndex) => (
    <div key={colIndex} className="col-11 col-md-6 col-lg-3 my-2">
      {Array.isArray(filteredProducts) ? (
        filteredProducts
          .filter((_, index) => index % 4 === colIndex)
          .map((product) => (
            <div key={product.id} className="card mb-3" style={{ "height": "13%" }}>
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text" style={{ "height": "130px" }}> ${product.description ? product.description : "No Description"}</p>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-success" onClick={() => addToCart(product.id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
      ) : (
        <p>No products to display</p>
      )}
    </div>
  ))}
</div>


    </div>
  );
}

export default Home;

