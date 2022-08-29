/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
import { React, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FiltersMenu from '../FiltersMenu/FiltersMenu';
import ProductsContainerMenu from '../ProductsContainerMenu/ProductsContainerMenu';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import ErrorNoResults from '../ErrorNoResults/ErrorNoResults';

import { getProduct } from '../../Redux/actions/actions';
import './Menu.css';

function Menu() {
  const dispatch = useDispatch();
  /* paginas */
  const [currentPage, setCurrentPage] = useState(1);
  const [burgersPerPage, setBurgersPerPage] = useState(9);
  const lastBurgerIndex = currentPage * burgersPerPage;
  const firstBurgerIndex = lastBurgerIndex - burgersPerPage;
  const allProducts = useSelector((state) => state.products);
  const category = useSelector((state) => state.category);
  const currentProduct = allProducts.slice(firstBurgerIndex, lastBurgerIndex);

  const mount = useRef(false);

  const [filters, setFilters] = useState({
    search: '', // algun string
  });

  function setFilter(name, value) {
    if (filters[name] === 'true' && value === 'true') {
      setFilters({ ...filters, [name]: '' });
    }

    if (filters[name] === value) return;

    setFilters({ ...filters, [name]: value });
  }

  const setPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (!mount.current) {
      dispatch(getProduct(filters.search));
      mount.current = true;
    } else if (filters) {
      setPage(1);
      dispatch(getProduct(filters.search));
    }
  }, [dispatch, filters]);

  return (
    <div className="menu__container">
      <SearchBar setFilter={setFilter} />
      <div className="block-filters-products">
        {/* <FiltersMenu setFilter={setFilter} filters={filters} /> */}
        <div className="filter-container">
          <FiltersMenu />
        </div>

        {/* {!currentProduct.length && <ErrorNoResults />} */}
        {currentProduct.length > 0 && (
          <div className="products-container-menu">
            <ProductsContainerMenu currentProduct={currentProduct} />
          </div>
        )}
      </div>

      <div className="menu__pagination__container mb-3 mt-3">
        <Pagination
          burgersPerPage={burgersPerPage}
          allProducts={allProducts.length}
          currentPage={currentPage}
          setCurrentPage={setPage}
        />
      </div>
    </div>
  );
}

export default Menu;
