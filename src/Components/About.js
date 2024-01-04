import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-white">About This Application</h1>

      {/* Point 1 */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">1. Implement Login Process</h5>
          <p className="card-text">
            Create a form using the authentication endpoint provided by{' '}
            <a href="https://dummyjson.com/docs/auth" target="_blank" rel="noopener noreferrer">
              dummyjson.com
            </a>{' '}
            to handle user authentication. Upon successful login, the server responds with an authentication token.
            Save this token securely, usually in a client-side storage mechanism like cookies or local storage.
          </p>
         
        </div>
      </div>

      {/* Point 2 */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">2. Save Login Token</h5>
          <p className="card-text">
            Once the user successfully logs in, the server provides an authentication token. Save this token securely
            for authorization purposes, typically in a client-side storage mechanism like cookies or local storage. This
            token will be sent in the headers of subsequent requests to authenticate the user.
          </p>
        </div>
      </div>

      {/* Point 3 */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">3. Make Home Page a Protected Route</h5>
          <p className="card-text">
            Set up a mechanism to check whether a user is logged in before allowing access to the Home page. If the user
            is not logged in, redirect them to the login page.
          </p>
        </div>
      </div>
      
      {/* Point 4 */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">4. Fetch Products on the Home Page</h5>
          <p className="card-text">
            Use the provided products endpoint from{' '}
            <a href="https://dummyjson.com/docs/products" target="_blank" rel="noopener noreferrer">
              dummyjson.com
            </a>{' '}
            to fetch a list of products. Display these products on the Home page.
          </p>
        </div>
      </div>

      {/* Point 5 */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">5. Add a Search on the Page</h5>
          <p className="card-text">
            Implement a search bar on the Home page that allows users to input keywords. Use these keywords to filter
            and display only the products whose names match the search criteria.
          </p>
        </div>
      </div>

      {/* Point 6 */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">6. Add a Filter Option Based on Price</h5>
          <p className="card-text">
            Implement a filter mechanism on the Home page that allows users to set a price range. Display only the
            products that fall within the specified price range.
          </p>
        </div>
      </div>

      {/* Point 7 */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">7. Implement a Cart and Show Cart Count</h5>
          <p className="card-text">
            Create a shopping cart mechanism to store selected products. Display the number of items in the cart and
            the total amount at the top of the page. Update the cart count and total amount dynamically as users add or
            remove items.
          </p>
        </div>
      </div>

      {/* Point 8 */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">8. Create an Add to Cart Button on Product Cards</h5>
          <p className="card-text">
            Add a button on each product card that allows users to add the product to their shopping cart. When the
            button is clicked, update the cart with the selected product.
          </p>
        </div>
      </div>
      
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-text">
          I followed the provided instructions to develop this website. Given additional time, I can enhance it further by incorporating advanced functions and refining the styling. Bootstrap was utilized for styling purposes. 
           <br /> In addition to this project, I have also created the Inotebook React app, which showcases a more secure and stylish website. Furthermore, I have developed 4-5 other websites using React
          </h5>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
