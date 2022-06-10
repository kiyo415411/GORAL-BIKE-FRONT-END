import { useState, useEffect } from 'react';
import { BsListUl } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import BikeList from './BikeList.js';
import ProductAside from './ProductAside.js';

function ProductPage() {
  return (
    <>
      <div className="d-flex justify-content-around me-5 pe-5">
        <div className="w-25">
          <ProductAside />
        </div>
        <div className="me-5">
          <BikeList />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
