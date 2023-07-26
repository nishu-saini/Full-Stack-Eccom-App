# Bwarmart Ecomm Website

This is a full-stack Ecommerce website that encompasses all the functionalities of a standard Ecommerce platform. The website is built using the `MERN Stack`.

The backend APIs are developed using `Node` and `Express`, and utilize `MongoDB` database to store data.

For the frontend, `React` is employed along with its complementary tools and accessories.

### Website URL: [https://bwarmart-ecomm-app.onrender.com/](https://bwarmart-ecomm-app.onrender.com/)

## Backend APIs

Following APIs have been created to handle various frontend requests:

- **User API**: This API handles user authentication.

- **Product API**: It is responsible for creating new products and managing customer orders (requires admin privileges).

- **Order API**: This API deals with order details.

- **Payment API**: It facilitates making payments using `Stripe`.

## API Endpoints

### GET Method

- `/api/v1/me` : Get user details (requires log in).

- `/api/v1/logout` : Logout user.

- `/api/v1/admin/user/:id` : Get an user details (requires admin privileges).

- `/api/v1/products` : Get All products.

- `/api/v1/admin/products` : Get Admin Panel for products (admin).

- `/api/v1/product/:id` : Get a product details.

- `/api/v1/reviews` : Get product reviews.

- `/api/v1/order/:id` : Get order details of a product (requires log in).

- `/api/v1/orders/me` : Get All orders (logged in).

- `/api/v1/admin/orders` : Get orders details for all users (admin).

- `/api/v1/stripeapikey`: Get `stripekey` for payment (logged in)

### POST Method

- `/api/v1/register` : Create new account

- `/api/v1/login` : Login to an existing account

- `/api/v1/password/forgot` : For handling forgot password request.

- `/api/v1/admin/product/new`: Create new product (admin).

- `/api/v1/order/new` : Place new order (logged in).

- `/api/v1/payment/process` : Handle payment request (logged in).

### PUT Method

- `/api/v1/password/reset/:token` : Reset password.

- `/api/v1/password/update` : Update password (logged in).

- `/api/v1/me/update` : Modify user details (logged in).

- `/api/v1/admin/user/:id` : Update user details (admin)

- `/api/v1/admin/product/:id` : Modify product information (admin).

- `/api/v1/review` : Create a review (logged in).

- `/api/v1/admin/order/:id` : Update order details (admin)

### DELETE Method

- `/api/v1/admin/user/:id` : Delete an existing user (admin)

- `/api/v1/admin/product/:id` : Delete an product (admin)

- `/api/v1/reviews` : Delete review/reviews (logged in)

- `/api/v1/admin/order/:id` : Delete order (admin)

### Essential Variables

Created an `config.env` file at path: `/backend/config/config.env`.

Provided essential `variable` details given below.

```
PORT=
DB_URI =
STRIPE_API_KEY=
STRIPE_SECRET_KEY=
JWT_SECRET=
JWT_EXPIRE=
COOKIE_EXPIRE=
SMPT_SERVICE =
SMPT_MAIL=
SMPT_PASSWORD=
SMPT_HOST=
SMPT_PORT=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

```

### Card Details

When testing interactively, use a card number, such as `4242 4242 4242 4242`. Enter the card number in the Dashboard or in any payment form.

- Use a valid future date, such as `12/24`.
- Use any three-digit CVC.

# Frontend

- The website includes a **Home** page that displays various products.

- A simple and interactive frontend has been developed to cater to both `user` and `admin` functionalities.

- Users can easily `login/register` on the website. After logging in, users are able to **place orders**, **make payments**, and provide product **reviews**.

- Admin user have additional privileges, such as **creating**, **updating**, and **deleting** products, as well as **managing** orders.

- Multiple pages have been created, including **Sign up**, **Add to cart**, **Payment gateway**, **Add products**, **Admin**, and **User**, etc.
