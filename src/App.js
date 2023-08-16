// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { useReducer } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Zmieniono importy
import AOS from "aos";
import "aos/dist/aos.css";

import RootLayout from "./Root";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import ProductPage from "./ProductsPage/ProductPage";
import ContactPage from "./ContactPage/ContactPage";
import CartPage from "./CartPage/CartPage";

import Products from "./products";
import allProducts from "./allProducts";

import ScrollToTop from "./ScrollTop";

AOS.init();

const reducer = (products, action) => {
  if (action.type === "ADD") {
    if (products.every((prod) => prod.key !== action.payload.content.key)) {
      return [...products, action.payload.content];
    }
    return products;
  }

  if (action.type === "DELETE") {
    return products.filter((product) => {
      return product.key !== action.payload.product.key;
    });
  }
};

const reducerCart = (cartProducts, action) => {
  if (action.type === "ADD_TO_CART") {
    if (cartProducts.every((prod) => prod.key !== action.payload.content.key)) {
      return [...cartProducts, action.payload.content];
    }
    return cartProducts;
  }

  if (action.type === "DELETE") {
    return cartProducts.filter((product) => {
      return product.key !== action.payload.content.key;
    });
  }
};

// function App() {
//   const [products, dispatch] = useReducer(reducer, []);
//   const [cartProducts, dispatchCart] = useReducer(reducerCart, []);

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <RootLayout
//           products={products}
//           dispatch={dispatch}
//           cartProducts={cartProducts}
//         />
//       ),
//       children: [
//         {
//           index: true,
//           element: (
//             <HomePage
//               products={Products}
//               dispatch={dispatch}
//               dispatchCart={dispatchCart}
//             />
//           ),
//         },
//         { path: "/about", element: <AboutPage /> },
//         {
//           path: "/cart",
//           element: (
//             <CartPage cartProducts={cartProducts} dispatchCart={dispatchCart} />
//           ),
//         },
//         {
//           path: "/products",
//           element: (
//             <ProductPage
//               products={allProducts}
//               dispatch={dispatch}
//               dispatchCart={dispatchCart}
//             />
//           ),
//         },
//         { path: "/contact", element: <ContactPage /> },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// }
function App() {
  const [products, dispatch] = useReducer(reducer, []);
  const [cartProducts, dispatchCart] = useReducer(reducerCart, []);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={
              <RootLayout
                products={products}
                dispatch={dispatch}
                cartProducts={cartProducts}
              />
            }
          >
            <Route
              index
              element={
                <HomePage
                  products={Products}
                  dispatch={dispatch}
                  dispatchCart={dispatchCart}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartProducts={cartProducts}
                  dispatchCart={dispatchCart}
                />
              }
            />
            <Route
              path="/products"
              element={
                <ProductPage
                  products={allProducts}
                  dispatch={dispatch}
                  dispatchCart={dispatchCart}
                />
              }
            />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
