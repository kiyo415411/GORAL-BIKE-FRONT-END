import Logo_m from '../../images/Logo-m.png';
import {
  BsFacebook,
  BsGoogle,
  BsYoutube,
  BsTwitter,
  BsInstagram,
  BsGithub,
} from 'react-icons/bs';
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Footer() {
  const item_main = [
    [
      '登山車',
      '登山車基礎車款',
      '全避震登山車',
      '單避震登山車',
      'XC/MARATHON',
      'MARATHON/TRAIL',
      'TRAIL',
      'ALL MOUNTAIN',
      'ENDURO',
    ],
    ['商品', '精品配件', '自行車全車系', '單避震登山車', '自行車課程'],
    ['消息', '最新消息', '最新活動', '最新課程'],
    ['關於我們', '團隊介紹', '隱私權條例', '客服中心', '常見問題Q&A'],
  ];
  const item_footer = [
    '聯絡我們',
    '免責聲明',
    '版權所有',
    '隱私權政策及使用條款',
    '網路商店條約及合約',
    '網路購物須知',
  ];
  return (
    <footer className="container-fluid p-0">
      <section className="bg-dark pt-5">
        <main className="w-100 row p-0 m-0 mx-md-auto mt-md-3 mb-md-5">
          <section className="d-none d-lg-block col-1 text-end">
            <img id="Logo-m" src={Logo_m} className=" rounded-top" alt="" />
          </section>
          <section className="col-12 col-md-6 mx-md-auto row justify-content-md-center fs-6 lh-sm text-center font-monospace m-0 p-0">
            {item_main.map((value, index) => {
              return (
                <React.Fragment key={index}>
                  <ul
                    key={'ul' + index}
                    className="d-none d-md-block col-12 col-md-6 col-lg-3"
                  >
                    {item_main[index].map((value, index) => {
                      return (
                        <li key={'li' + index}>
                          <NavLink to="#/" className={'nav-link text-muted'}>
                            {value}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                  <Accordion
                    alwaysOpen={false}
                    flush={false}
                    className="p-0 m-0 d-md-none"
                  >
                    <Accordion.Item eventKey={index} className="bg-dark w-100 ">
                      <Accordion.Header className="bg-dark">
                        {item_main[index][0]}
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul key={index} className="col-12 col-md-6 col-lg-3">
                          {item_main[index].map((value, index) => {
                            return (
                              <li key={'Accordion li' + index}>
                                <NavLink
                                  to="#/"
                                  className={'nav-link text-muted'}
                                >
                                  {value}
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </React.Fragment>
              );
            })}
          </section>
          <section className="col-12 text-center text-md-start col-md-2 text-muted fs-6">
            <nav>
              <ul className="list-unstyled row justify-content-center justify-content-md-start">
                <li className="col-1">
                  <a className="text-muted" href="#/">
                    <BsFacebook />
                  </a>
                </li>
                <li className="col-1">
                  <a className="text-muted" href="#/">
                    <BsGoogle />
                  </a>
                </li>
                <li className="col-1">
                  <a className="text-muted" href="#/">
                    <BsYoutube />
                  </a>
                </li>
                <li className="col-1">
                  <a className="text-muted" href="#/">
                    <BsTwitter />
                  </a>
                </li>
                <li className="col-1">
                  <a className="text-muted" href="#/">
                    <BsInstagram />
                  </a>
                </li>
                <li className="col-1">
                  <a className="text-muted" href="#/">
                    <BsGithub />
                  </a>
                </li>
              </ul>
            </nav>
            <article className="">
              <p className="text-justify">GORAL BIKER. MORE BIKE.</p>
              <p className="text-justify">©2022GORALBIKE登山車版權所有</p>
              <p className="text-justify">
                由於產品的持續開發和設計， GORAL
                BIKER公司保留更改產品規格的權利，恕不另行通知。
              </p>
            </article>
          </section>
        </main>
        <footer className="d-none d-md-block footer-footer bg-primary fs-6 lh-sm">
          <ul className="list-unstyled d-flex mx-auto mb-0 w-50 justify-content-center p-3">
            {item_footer.map((value, index) => {
              return (
                <li key={index}>
                  <a className="nav-link text-white" href="#/">
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </footer>
      </section>
    </footer>
  );
}

export default Footer;
