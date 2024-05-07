import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="shop-category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};
export default Category;
