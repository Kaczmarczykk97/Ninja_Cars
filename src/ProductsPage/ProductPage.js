import ProductPageContent from "./ProductPageContent";

function ProductPage({ products, dispatch, dispatchCart }) {
  return (
    <>
      <ProductPageContent
        products={products}
        dispatch={dispatch}
        dispatchCart={dispatchCart}
      />
    </>
  );
}

export default ProductPage;
