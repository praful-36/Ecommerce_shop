
I followed the provided instructions to develop this website. Given additional time, I can enhance it further by incorporating advanced functions and refining the styling. Bootstrap was utilized for styling purposes.
In addition to this project, I have also created the Inotebook React app, which showcases a more secure and stylish website. Furthermore, I have developed 4-5 other websites using React

About This Application
1. Implement Login Process
Create a form using the authentication endpoint provided by dummyjson.com to handle user authentication. Upon successful login, the server responds with an authentication token. Save this token securely, usually in a client-side storage mechanism like cookies or local storage.

2. Save Login Token
Once the user successfully logs in, the server provides an authentication token. Save this token securely for authorization purposes, typically in a client-side storage mechanism like cookies or local storage. This token will be sent in the headers of subsequent requests to authenticate the user.

3. Make Home Page a Protected Route
Set up a mechanism to check whether a user is logged in before allowing access to the Home page. If the user is not logged in, redirect them to the login page.

4. Fetch Products on the Home Page
Use the provided products endpoint from dummyjson.com to fetch a list of products. Display these products on the Home page.

5. Add a Search on the Page
Implement a search bar on the Home page that allows users to input keywords. Use these keywords to filter and display only the products whose names match the search criteria.

6. Add a Filter Option Based on Price
Implement a filter mechanism on the Home page that allows users to set a price range. Display only the products that fall within the specified price range.

7. Implement a Cart and Show Cart Count
Create a shopping cart mechanism to store selected products. Display the number of items in the cart and the total amount at the top of the page. Update the cart count and total amount dynamically as users add or remove items.

8. Create an Add to Cart Button on Product Cards
Add a button on each product card that allows users to add the product to their shopping cart. When the button is clicked, update the cart with the selected product.

