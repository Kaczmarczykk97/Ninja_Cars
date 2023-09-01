import { Outlet } from "react-router-dom";

import Navigation from "./Root/navigation/Navaigation";
import Footer from "./Root/footer/Footer";
import BtnArrUp from "./Root/button-up/BtnArrUp";

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
