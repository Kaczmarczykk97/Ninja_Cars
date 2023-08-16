import HomePageTopProduct from "./HomePageTopProduct";

import classes from "./HomePageTopProducts.module.css";

function HomePageTopProducts({ topProducts, dispatch, dispatchCart }) {
  return (
    <>
      <section className={classes.sectionTopProducts}>
        <h2>Top Products</h2>
        <div
          className={classes.productsWrapper}
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-once="false"
        >
          {topProducts.map((product) => {
            return (
              <HomePageTopProduct
                content={product}
                key={product.key}
                dispatch={dispatch}
                dispatchCart={dispatchCart}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default HomePageTopProducts;
