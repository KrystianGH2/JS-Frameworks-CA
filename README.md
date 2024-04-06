# JS Frameworks CA 
[Deployment Site](https://js-frameworks-ca-sigma.vercel.app/)

## Introduction
This report documents the development process and features of an ecommerce store utilizing the Noroff API v2. The project aims to showcase various functionalities and components implemented using JavaScript frameworks.


## Project Features
### Home Page
- The home page features a hero section along with sections displaying new arrivals, top sellers, and a newsletter subscription form.
- New arrival and top seller sections display product listings fetched from the Noroff API, limited to 4 items for optimal styling.
- Review cards are included for aesthetic purposes.

### Layout
- The layout includes a navigation bar facilitating seamless navigation across the website.
- A header with a navigation bar and search bar, enabling site-wide search functionality.
- A footer is present across all pages, alongside the header and navigation bar.
- A cart icon allows users to view and manage items added to their cart.

### Product Page
- Displays all products fetched from the Noroff API.
- Provides sorting functionality to arrange products by price, from lowest to highest.
- Implements pagination to navigate through product listings, limited to 4 pages due to a total of 25 items.

### Details Page (Individual Products)
- Shows detailed information for each product, including title, rating, description, price, and discounted price.
- Displays the discount percentage applied to each product.
- Includes an "Add to Cart" button for easy product addition.
- Features product reviews when available.

### Cart Icon
- Displays a list of products added to the cart, showing details such as title, discounted price, actual price, and quantity.
- Users can adjust product quantities or remove items entirely using +/- buttons or a remove-all function.
- Includes a checkout button redirecting users to the checkout details page.

### Checkout
- Presents a summary of listed products from the cart, including subtotal, discounts, delivery fees, and total amount.
- Provides a button to proceed to the shipping and payment page.

### Shipping and Payment
- Features a form with validation for shipping and payment information input.
- Collects details such as name, email, address, city, zip code, card number, expiration date, and CVV.
- Upon successful submission, displays a success message and redirects users to the home page.

### About Page
- Contains information about the ecommerce store and an embedded contact form.
- Implements form validation and displays a success toast upon successful form submission.


## Project Stack
- Next JS
- TailwindCSS
- DasiyUI
- React Stars - React Ions
- Yup Validation
- Zustand
- Cypress e2e Testing
- eslint
- prettier



# Clone this repo?
First, clone the repository:

```bash
https://github.com/KrystianGH2/JS-Frameworks-CA.git
```
npm install:

```bash
npm install
```

run development:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
