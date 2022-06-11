import React from 'react';
import { BsHeart } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

const products = [
  {
    img: '../images/products/BIG_NINE_15.jpg',
    name: 'BIG_NINE_15',
    price: '$22,000',
    totalPrice: '$44,000',
  },
];

function ShoppingCart() {
  return (
    <>
      <div className="container">
        {/* 商品購物車 */}
        <section className="shopping-cart">
          <table className="table ">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>圖片</th>
                <th>名稱</th>
                <th>數量</th>
                <th>單價</th>
                <th>總價</th>
                <th>收藏</th>
                <th>移除</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <figure class="figure">
                    <img
                      src={require('../images/products/BIG_NINE_15.jpg')}
                      class="figure-img img-fluid rounded"
                      alt="..."
                    />
                  </figure>
                </td>
                <td>BIG.NINE 200</td>
                <td>
                  <input type="number" />
                </td>
                <td>$22,000</td>
                <td>$44,000</td>
                <td>
                  <button className="shopping-cart__btn">
                    <BsHeart />
                  </button>
                </td>
                <td>
                  <button className="shopping-cart__btn">
                    <MdDelete />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td></td>
                <td>BIG.NINE 200</td>
                <td>
                  <input type="number" />
                </td>
                <td>$22,000</td>
                <td>$44,000</td>
                <td>
                  <button className="shopping-cart__btn">
                    <BsHeart />
                  </button>
                </td>
                <td>
                  <button className="shopping-cart__btn">
                    <MdDelete />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td></td>
                <td>BIG.NINE 200</td>
                <td>
                  <input type="number" />
                </td>
                <td>$22,000</td>
                <td>$44,000</td>
                <td>
                  <button className="shopping-cart__btn">
                    <BsHeart />
                  </button>
                </td>
                <td>
                  <button className="shopping-cart__btn">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        {/* 課程購物車 */}
        <section></section>
        {/* 活動購物車 */}
        <section></section>
      </div>
    </>
  );
}

export default ShoppingCart;
