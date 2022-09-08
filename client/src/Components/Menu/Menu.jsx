/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
// import { React, useState, useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import FiltersMenu from '../FiltersMenu/FiltersMenu';
// import ProductsContainerMenu from '../ProductsContainerMenu/ProductsContainerMenu';
// import SearchBar from '../SearchBar/SearchBar';
// import Pagination from '../Pagination/Pagination';
// import ErrorNoResults from '../ErrorNoResults/ErrorNoResults';

// import { getProduct } from '../../Redux/actions/actions';
// import './Menu.css';

// function Menu() {
//   const dispatch = useDispatch();
//   /* paginas */
//   const [currentPage, setCurrentPage] = useState(1);
//   const [phonesPerPage, setPhonesPerPage] = useState(8);
//   const lastPhoneIndex = currentPage * phonesPerPage;
//   const firstPhoneIndex = lastPhoneIndex - phonesPerPage;
//   const allProducts = useSelector((state) => state.products);
//   const category = useSelector((state) => state.category);

//   const currentProduct = allProducts?.slice(firstPhoneIndex, lastPhoneIndex);

//   const user = useSelector((state) => state.loginState);
//   const carrito = useSelector((state) => state.cart);

//   const mount = useRef(false);

//   const [filters, setFilters] = useState({
//     search: '', // algun string
//   });

//   function setFilter(name, value) {
//     if (filters[name] === 'true' && value === 'true') {
//       setFilters({ ...filters, [name]: '' });
//     }

//     if (filters[name] === value) return;

//     setFilters({ ...filters, [name]: value });
//   }

//   const setPage = (page) => {
//     setCurrentPage(page);
//   };

//   // useEffect(() => {
//   //   console.log(user);
//   // }, [user]);

//   useEffect(() => {
//     if (!mount.current) {
//       dispatch(getProduct(filters.search));
//       mount.current = true;
//     } else if (filters) {
//       setPage(1);
//       dispatch(getProduct(filters.search));
//     }
//   }, [dispatch, filters]);

//   return (
//     <div className="menu__container">
//       <SearchBar setFilter={setFilter} setCurrentPage={setCurrentPage} />
//       <div className="menu_filter_container">
//         <div className="block-filters-products">
//           <div className="filter-container col-2">
//             <FiltersMenu />
//           </div>

//           {/* {!currentProduct.length && <ErrorNoResults />} */}
//           {currentProduct?.length > 0 && (
//             <div className="products-container-menu col-xl-10 col-12">
//               <ProductsContainerMenu
//                 currentProduct={currentProduct}
//                 user={user}
//               />
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="menu__pagination__container mb-3 mt-3">
//         <Pagination
//           phonesPerPage={phonesPerPage}
//           allProducts={allProducts?.length}
//           currentPage={currentPage}
//           setCurrentPage={setPage}
//         />
//       </div>
//     </div>
//   );
// }

// export default Menu;

import { React, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FiltersMenu from '../FiltersMenu/FiltersMenu';
import ProductsContainerMenu from '../ProductsContainerMenu/ProductsContainerMenu';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import ErrorNoResults from '../ErrorNoResults/ErrorNoResults';

import { changePagina, getProduct } from '../../Redux/actions/actions';
import './Menu.css';

function Menu() {
  const dispatch = useDispatch();
  /* paginas */
  const pag = useSelector((state) => state.pagina);
  // const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage, setPhonesPerPage] = useState(8);
  const lastPhoneIndex = pag * phonesPerPage;
  const firstPhoneIndex = lastPhoneIndex - phonesPerPage;
  const allProducts = useSelector((state) => state.products);
  const category = useSelector((state) => state.category);
  const currentProduct = allProducts?.slice(firstPhoneIndex, lastPhoneIndex);
  const user = useSelector((state) => state.loginState);
  const carrito = useSelector((state) => state.cart);

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

  // const setPage = (page) => {
  //   setCurrentPage(page);
  // };

  function paginate(e, num) {
    e.preventDefault();
    // console.log(num);
    //console.log(num);
    dispatch(changePagina(num));
    // setPage(pag);
  }

  useEffect(() => {
    if (!mount.current) {
      dispatch(getProduct(filters.search));
      mount.current = true;
    } else if (filters) {
      //setPage(1);
      //va tirar error cuando se vuelva al menu dsp de borrar carrito
      //dispatch(changePagina(1));
      dispatch(getProduct(filters.search));
    }
  }, [dispatch, filters]);

  return (
    <div className="menu__container">
      {/* <SearchBar setFilter={page} setCurrentPage={setCurrentPage} /> */}
      <div className="menu_filter_container">
        <div className="block-filters-products">
          <div className="filter-container col-2">
            <FiltersMenu />
          </div>

          {/* {!currentProduct.length && <ErrorNoResults />} */}
          {currentProduct?.length > 0 && (
            <div className="products-container-menu col-xl-10 col-12">
              <ProductsContainerMenu
                currentProduct={currentProduct}
                user={user}
              />
            </div>
          )}
        </div>
      </div>

      <div className="menu__pagination__container mb-3 mt-3">
        <Pagination
          phonesPerPage={phonesPerPage}
          allProducts={allProducts?.length}
          currentPage={pag}
          paginate={paginate}
          //  setCurrentPage={setPage}
        />
      </div>
    </div>
  );
}

export default Menu;
