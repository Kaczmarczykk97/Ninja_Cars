import { useState } from "react";

import ProductPageProduct from "./ProductPageProduct";

import classes from "./ProductPageContent.module.css";

import { BsSearch } from "react-icons/bs";

const categories = ["Sedan", "Suv", "Hatchback", "Motorbike"];

function ProductPageContent({ products, dispatch, dispatchCart }) {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [all, setAll] = useState(true);

  const filteredProducts = products.filter((product) => {
    return product.text.toLowerCase().includes(search.toLowerCase());
  });

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

          <div className={classes.searchBarContainer}>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={classes.searchBar}
            />
            <BsSearch className={classes.searchIcon} />
          </div>
        </div>
        <div className={classes.productsWrapper}>
          {all &&
            filteredProducts.map((product) => {
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
            filteredProducts
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
