import React, { useState } from "react";
import "../style/allproducts.css";
import ProductsData from "../data/MOCK_DATA.json";

export function AllProducts({cart,setCart}) {
  // Khởi tạo dữ liệu sản phẩm từ file MOCK_DATA.json
  const products = ProductsData;

  // State cho phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // State cho việc hiển thị sản phẩm dưới dạng grid hay list
  const [viewMode, setViewMode] = useState("grid");

  //  State cho việc sắp xếp sản phẩm
  const [sortOption, setSortOption] = useState("price-asc");

  // State cho việc lọc sản phẩm theo giá
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);

  // State cho việc lọc sản phẩm theo danh mục
  const [selectedCategories, setSelectedCategories] = useState([]);

  // state cho việc tìm kiếm sản phẩm
  const [searchTerm, setSearchTerm] = useState("");

  // state cho trạng thái lưu giữ giá tối thiểu và tối đa
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");



  // Hàm chuyển đổi giá từ chuỗi sang số
  const parsePrice = (price) => parseFloat(price.replace(/[^0-9.]/g, ""));

  // Hàm sắp xếp sản phẩm
  const getSortedProducts = () => {
    let sorted = [...products];
    switch (sortOption) {
      case "price-asc":
        sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case "price-desc":
        sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case "rating":
        sorted.sort((a, b) => b.rating.length - a.rating.length);
        break;
      default:
        console.warn(`Tùy chọn sắp xếp không hợp lệ: ${sortOption}`);
    }
    return sorted;
  };

  // Hàm lọc sản phẩm dựa trên các tiêu chí đã chọn
  const getFilteredProducts = () => {
    let filtered = getSortedProducts();

    // Lọc sản phẩm dựa trên tên
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Lọc sản phẩm dựa trên khoảng giá đã chọn
    if (selectedPriceRange.length > 0) {
      filtered = filtered.filter((product) => {
        const productPrice = parsePrice(product.price);
        return selectedPriceRange.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return productPrice >= min && productPrice <= max;
        });
      });
    }

    // Lọc sản phẩm dựa trên danh mục đã chọn
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    return filtered;
  };
  // Hàm lấy sản phẩm cho trang hiện tại
  const getCurrentProducts = () => {
    const filteredProducts = getFilteredProducts();
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  };
  // Các hàm xử lý sự kiện
  const handleMinPriceChange = (e) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);
  const applyPriceChange = () =>
    setSelectedPriceRange([`${minPrice}-${maxPrice}`]);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleSortChange = (e) => setSortOption(e.target.value);

  const handlePriceChange = (e) => {
    const { value, checked } = e.target;
    setSelectedPriceRange((prevRanges) =>
      checked
        ? [...prevRanges, value]
        : prevRanges.filter((range) => range !== value)
    );
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prevCategories) =>
      checked
        ? [...prevCategories, value]
        : prevCategories.filter((category) => category !== value)
    );
  };

  const displayedProducts = getCurrentProducts();
  // Tính toán số trang

  const pageNumbers = Array.from(
    { length: Math.ceil(getFilteredProducts().length / productsPerPage) },
    (_, i) => i + 1
  );

  const nextPage = () => {
    if (currentPage < pageNumbers.length) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };



// hàm  thêm sản phẩm vào giỏ hàng

const addToCart=(product)=>{
  setCart((prevCart)=>{
    // kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingProduct=prevCart.find((item)=>item.id===product.id)
    if (existingProduct){
      // nếu có, tăng số lượng sản phẩm đó lên 1
      return prevCart.map((item)=>
      item.id===product.id
      ? {...item,quantity:item.quantity+1}
      :item
      )
    }else{
      return [...prevCart,{...product,quantity:1}]
    }
  })
}




  return (
    <div className="container-all-products">
      <div className="sidebar">
        <div className="view-by-price">
          <h3>View by Price</h3>
          <div className="price-inputs">
            <input
              type="number"
              id="min-price"
              placeholder="Min"
              value={minPrice}
              onChange={handleMinPriceChange}
            />

            <input
              type="number"
              id="max-price"
              placeholder="Max"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
            <button onClick={applyPriceChange}>Apply</button>
          </div>
          <label>
            <input type="checkbox" value="0-100" onChange={handlePriceChange} />
            $0 - $100
          </label>
          <label>
            <input
              type="checkbox"
              value="100-200"
              onChange={handlePriceChange}
            />
            $100 - $200
          </label>
          <label>
            <input
              type="checkbox"
              value="200-300"
              onChange={handlePriceChange}
            />
            $200 - $300
          </label>
          <label>
            <input
              type="checkbox"
              value="300-1000"
              onChange={handlePriceChange}
            />
            $300+
          </label>
        </div>
        <div className="categories">
          <h3>Categories(0)</h3>
          <input type="text" placeholder="search by category" />
          <label>
            <input
              type="checkbox"
              value="Whey Protein"
              onChange={handleCategoryChange}
            />
            Whey Protein
          </label>
          <label>
            <input
              type="checkbox"
              value="BCAA&EAAs"
              onChange={handleCategoryChange}
            />
            BCAA&EAAs
          </label>
          <label>
            <input
              type="checkbox"
              value="Pre-Workout&Creatine"
              onChange={handleCategoryChange}
            />
            Pre-Workout&Creatine
          </label>
          <label>
            <input
              type="checkbox"
              value="Vitamin"
              onChange={handleCategoryChange}
            />
            Vitamin
          </label>
          <label>
            <input
              type="checkbox"
              value="Omega"
              onChange={handleCategoryChange}
            />
            Omega
          </label>
        </div>
        <div className="brand">
          <h3>brand</h3>
          <input type="text" placeholder="search by brand" />
          <label>
            <input type="checkbox" value="Swanson" />
            Swanson
          </label>
          <label>
            <input type="checkbox" value="NaturesPlus" />
            NaturesPlus
          </label>
          <label>
            <input type="checkbox" value="NowFoods" />
            Now Foods
          </label>
          <label>
            <input type="checkbox" value="Protocol" />
            Protocol
          </label>
        </div>
      </div>

      <div className="all-products">
        <div className="top-bar">
          <div className="product-search-bar">
            <input
              type="text"
              placeholder="Search for products"
              value={searchTerm}
              onChange={handleSearchChange}
            />

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
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => {
              // Kiểm tra xem sản phẩm có nằm trong danh sách sau khi đã lọc hay không
              if (!getFilteredProducts().includes(product)) return null;

              // Render sản phẩm dưới dạng grid
              if (viewMode === "grid") {
                return (
                  <div key={product.id} className="product-grid">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <span className="product-price">{product.price}</span>
                    <div className="product-rating">{product.rating}</div>
                    <button onClick={()=>addToCart(product)}>Add to Cart</button>
                  </div>
                );
              }

              // Render sản phẩm dưới dạng list
              return (
                <div key={product.id} className="product-list">
                  <img src={product.image} alt={product.name} />
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <span className="product-price">{product.price}</span>
                    <div className="product-rating">{product.rating}</div>
                  </div>
                  <button onClick={()=>addToCart(product)}>Add to Cart</button>
                </div>
              );
            })
          ) : (
            <p>No products found based on the selected criteria.</p>
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
