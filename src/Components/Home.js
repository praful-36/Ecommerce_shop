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
  const [searchMade, setSearchMade] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { products } = response.data || [];
        setProducts(products || []);
        setFilteredProducts(products || []);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
    fetchProducts();
  }, [token]);

  const handleSearch = () => {
    const lowercaseSearchTerm = (searchTerm || '').toLowerCase().trim();
    const searchTermsArray = lowercaseSearchTerm.split(/\s+/);

    const filteredProducts = products.filter((product) => {
      const lowercaseProductTitle = (product.title || '').toLowerCase().trim();
      const allTermsMatch = searchTermsArray.every((term) =>
        lowercaseProductTitle.includes(term)
      );

      const priceMatches =
        (!minPrice || product.price >= parseFloat(minPrice)) &&
        (!maxPrice || product.price <= parseFloat(maxPrice));

      return allTermsMatch && priceMatches;
    });

    setFilteredProducts(filteredProducts);
    setSearchMade(true);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setMinPrice('');
    setMaxPrice('');
    setFilteredProducts(products);
    setSearchMade(false);
  };

  const addToCart = (productId) => {
    const selectedProduct = products.find((product) => product.id === productId);

    if (selectedProduct) {
      console.log("Adding to cart:", selectedProduct);
      setCart((prevCart) => [...prevCart, selectedProduct]);

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
    <div className="container" >
      <div className="d-flex mt-3 flex-lg-row flex-column">
        <div className="col mx-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col mx-2">
          <input
            type="number"
            className="form-control"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="col mx-2">
          <input
            type="number"
            className="form-control"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <div className="col mx-2 search-buttons">
          <button className="btn btn-success" style={{ textWrap: "nowrap" }} onClick={handleSearch}>
            Search
          </button>
          {searchMade && (
            <button className="btn btn-secondary ml-2" style={{ textWrap: "nowrap" }} onClick={handleClearSearch}>
              Remove Search
            </button>
          )}
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>

      <div className="row mt-3" style={{ gap: "8rem" }}>
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="card col-11 col-md-6 col-lg-3 my-2">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text" style={{ height: '150px' }}>
                  {product.description ? product.description : 'No Description'}
                </p>
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
    </div>
  );
}

export default Home;
