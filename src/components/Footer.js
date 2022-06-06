function Footer() {
  const item = [
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
  return (
    <div className="container-fluid p-0">
      <div className="bg-dark row">
        <section className="col-2"></section>
        <section className="col-8 mx-auto row justify-content-center fs-6 lh-sm text-center font-monospace">
          {item.map((value, index) => {
            return (
              <ul key={index} className="col-6 col-md-3 ">
                {item[index].map((value, index) => {
                  return (
                    <li key={index}>
                      <a className="nav-link text-muted" href="#/">
                        {value}
                      </a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </section>
        <section className="col-2"></section>
      </div>
      <div className="footer-footer"></div>
    </div>
  );
}

export default Footer;
