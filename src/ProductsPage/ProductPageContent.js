import { useState } from "react";

import ProductPageProduct from "./ProductPageProduct";

import classes from "./ProductPageContent.module.css";

const categories = ["Sedan", "Suv", "Hatchback", "Motorbike"];

function ProductPageContent({ products, dispatch, dispatchCart }) {
  const [filter, setFilter] = useState("");
  const [all, setAll] = useState(true);

  const filterHandler = (category) => {
    setFilter(category);
    setAll(false);
  };

  const showAllProductsHandler = () => {
    setFilter("");
    setAll(true);
  };

  return (
    <section className={classes.sectionProducts}>
      <h2 className={classes.productsH2}>#PRODUCTS</h2>
      <div className={classes.productsContainer}>
        <div
          className={classes.filterContainer}
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-once="false"
        >
          <h3 className={classes.productsH3}>Categories:</h3>
          {categories.map((category, index) => {
            return (
              <button
                className={`${classes.filterBtn} ${
                  filter === category ? classes.active : ""
                }`}
                key={index}
                onClick={() => filterHandler(category)}
              >
                {category}
              </button>
            );
          })}

          <button
            className={`${classes.filterBtn} ${
              filter === "" ? classes.active : ""
            }`}
            onClick={() => showAllProductsHandler()}
          >
            All Products
          </button>
        </div>
        <div className={classes.productsWrapper}>
          {all &&
            products.map((product) => {
              return (
                <ProductPageProduct
                  content={product}
                  key={product.key}
                  dispatch={dispatch}
                  dispatchCart={dispatchCart}
                />
              );
            })}
          {!all &&
            products
              .filter((product) => product.title === filter)
              .map((product) => {
                return (
                  <ProductPageProduct
                    content={product}
                    key={product.key}
                    dispatch={dispatch}
                    dispatchCart={dispatchCart}
                  />
                );
              })}
        </div>
      </div>
    </section>
  );
}

export default ProductPageContent;
