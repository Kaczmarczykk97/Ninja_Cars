import { Outlet } from "react-router-dom";

import Navigation from "./Navaigation";
import Footer from "./Footer";
import BtnArrUp from "./BtnArrUp";

function RootLayout({ products, dispatch, cartProducts }) {
  return (
    <>
      <Navigation
        products={products}
        dispatch={dispatch}
        cartProducts={cartProducts}
      />

      <Outlet />
      <BtnArrUp />
      <Footer />
    </>
  );
}

export default RootLayout;
