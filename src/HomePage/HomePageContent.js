import HomePageHeader from "./HomePageHeader";
import HomePageItems from "./HomePageItems";
import HomePageTopProducts from "./HomePageTopProducts";
import HomePageNewProduct from "./HomePageNewProduct";

function HomePageContent({ products, dispatch, dispatchCart}) {

  return (
    <>
      <HomePageHeader />
      <HomePageItems />
      <HomePageTopProducts
        topProducts={products}
        dispatch={dispatch}
        dispatchCart={dispatchCart}
      />
      <HomePageNewProduct />
    </>
  );
}

export default HomePageContent;
