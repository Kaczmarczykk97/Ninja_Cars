import HomePageContent from "./HomePageContent";

function HomePage({ products, dispatch, dispatchCart }) {
  return (
    <>
      <HomePageContent
        products={products}
        dispatch={dispatch}
        dispatchCart={dispatchCart}
      />
    </>
  );
}

export default HomePage;
