import { useState, useEffect } from 'react';
import { BsListUl } from 'react-icons/bs';
import { BiGridSmall } from 'react-icons/bi';
import { AiFillCaretDown } from 'react-icons/ai'
import BikeList from './BikeList.js';
import ProductAside from './ProductAside.js';

function ProductPage() {
  return (
    <>
      <div className="d-flex justify-content-around me-5 pe-5 mt-4">
        <div className="w-25">
          <ProductAside />
        </div>
        <div className="me-5">
          <div className="d-flex justify-content-between">
            <div>
              <BsListUl size={30} color="FF7E55" />
              <BiGridSmall size={50} />
            </div>
            <h4 className='text-hightlight'>商品排序 <AiFillCaretDown size={30}/></h4>
          </div>
          {/* list of bikes */}
          <BikeList />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
