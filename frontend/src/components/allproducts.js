import React, { useState } from "react";
import "../style/allproducts.css";
import ProductsData from "../data/MOCK_DATA.json";
export function AllProducts() {
  // hàm tạo việc phân trang cho sản phẩm
  const products = ProductsData;
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // tạo hàm để kiểm tra  trạng thái hiển thị của sản phẩm là dạng grid hay list
  const [viewMode, setViewMode] = useState("grid");
  // hàm hiển thị sản phẩm theo giá
  const [sortOption, setSortOption] = useState("");
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  const sortedProducts = [...currentProducts];
  switch (sortOption) {
    case "price-asc":
      sortedProducts.sort(
        (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
      );
      break;
    case "price-desc":
      sortedProducts.sort(
        (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
      );
      break;
    case "rating":
      sortedProducts.sort((a, b) => b.rating.length - a.rating.length);
      break;
      default:
        console.warn("Invalid sort option:", sortOption);
        break;
  }

  return (
    <div className="container-all-products">
      <div className="sidebar">
        <div className="filter-by-price">
          <h3>Filter by Price</h3>
          <input type="range" id="price-range" min="0" max="1000" step="10" />
          <div className="price-inputs">
            <input type="number" id="min-price" placeholder="Min" />
            <input type="number" id="max-price" placeholder="Max" />
          </div>
        </div>
        <div className="view-by-price">
          <h3>View by Price</h3>
          <label>
            <input type="checkbox" />
            $0 - $100
          </label>
          <label>
            <input type="checkbox" />
            $100 - $200
          </label>
          <label>
            <input type="checkbox" />
            $200 - $300
          </label>
          <label>
            <input type="checkbox" />
            $300+
          </label>
        </div>
        <div className="categories">
          <h3>Categories(0)</h3>
          <input type="text" placeholder="search by category" />
          <label>Whey Protein</label>
          <label>BCAA,EAAs</label>
          <label>Pre-Workout,Creatine</label>
          <label>Vitamin</label>
          <label>Omega</label>
        </div>
        <div className="brand">
          <h3>brand</h3>
          <input type="text" placeholder="search by brand" />
          <label>Swanson</label>
          <label>NaturesPlus</label>
          <label>Now Foods</label>
          <label>Protocol</label>
        </div>
      </div>

      <div className="all-products">
        <div className="top-bar">
          <div className="product-search-bar">
            <input type="text" placeholder="Search for products" />
            <div className="hide-out-of-stock">
              <input type="checkbox" id="hide-out-of-stock-checkbox" />
              <label htmlFor="hide-out-of-stock-checkbox">
                Hide out of stock products
              </label>
            </div>
          </div>

          <div className="sort-view-section">
            <select onChange={handleSortChange}>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="newest">Newest</option>
            </select>
            <div className="view-options">
              <button className="list-view" onClick={() => setViewMode("list")}>
                List
              </button>
              <button className="grid-view" onClick={() => setViewMode("grid")}>
                Grid
              </button>
            </div>
          </div>
        </div>

        <div className={`product-container ${viewMode}`}>
          {currentProducts.map((product) =>
            viewMode === "grid" ? (
              <div key={product.id} className="product-grid">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <span className="product-price">{product.price}</span>
                <div className="product-rating">{product.rating}</div>
                <button>Add to Cart</button>
              </div>
            ) : (
              <div key={product.id} className="product-list">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <span className="product-price">{product.price}</span>
                  <div className="product-rating">{product.rating}</div>
                </div>
                <button>Add to Cart</button>
              </div>
            )
          )}
        </div>

        <div className="pagination">
          <button onClick={prevPage}>&lt;</button>
          {pageNumbers.map((number) => (
            <button key={number} onClick={() => setCurrentPage(number)}>
              {number}
            </button>
          ))}
          <button onClick={nextPage}>&gt;</button>
        </div>
      </div>
    </div>
  );
}
