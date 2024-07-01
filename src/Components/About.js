import React from 'react';

const AboutPage = () => {
  return (
    <div className="container my-5 about-container">
      <h1 className="mb-4 text-white">About This Application</h1>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">1. Login Process</h5>
          <p className="card-text">
            To start using the application, you need to log in. Please use the login form provided on the login page. We use{' '}
            <a href="https://dummyjson.com/docs/auth" target="_blank" rel="noopener noreferrer">
              dummyjson.com
            </a>{' '}
            for authentication. Upon successful login, you will receive an authentication token that will be stored securely on your device.
            <br /><br />
            If you cannot access the authentication endpoint, you can use the following credentials to log in:
            <ul>
              <li>Username: <code>emilys</code></li>
              <li>Password: <code>emilyspass</code></li>
              <li>Session Expiry: 30 minutes</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">2. Storing Login Token</h5>
          <p className="card-text">
            After logging in, your authentication token will be saved securely in your browser's local storage. This token is used to verify your identity in subsequent requests.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">3. Protected Home Page</h5>
          <p className="card-text">
            Our Home page is protected and only accessible to logged-in users. If you are not logged in, you will be redirected to the login page. This ensures that only authorized users can view the products and use the website's features.
          </p>
        </div>
      </div>     

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">4. Viewing Products</h5>
          <p className="card-text">
            Once logged in, you can view a wide range of products available on our platform. The product data is fetched from{' '}
            <a href="https://dummyjson.com/docs/products" target="_blank" rel="noopener noreferrer">
              dummyjson.com
            </a>. Browse through the list to find products that interest you.
          </p>
        </div>
      </div>
     
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">5. Searching for Products</h5>
          <p className="card-text">
            Use the search bar at the top of the Home page to find products by name. Simply type in keywords related to the product you are looking for, and the list will automatically filter to show matching items.
          </p>
        </div>
      </div>
  
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">6. Filtering Products by Price</h5>
          <p className="card-text">
            You can filter products based on price using the filter option on the Home page. Set your desired price range, and the displayed products will adjust to show only those that fall within the specified range.
          </p>
        </div>
      </div>
      
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">7. Using the Shopping Cart</h5>
          <p className="card-text">
            Our application includes a shopping cart feature. You can add products to your cart and view the total number of items and the total amount at the top of the page. The cart updates dynamically as you add or remove items.
          </p>
        </div>
      </div>
     
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">8. Adding Products to Cart</h5>
          <p className="card-text">
            Each product card has an "Add to Cart" button. Click this button to add the product to your shopping cart. The cart will be updated with the selected product, and you can view the added items in the cart summary.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default AboutPage;
