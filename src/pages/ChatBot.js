// import webSocket from 'socket.io-client';
import { IMAGE_URL } from '../utils/config';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiSendPlaneFill } from 'react-icons/ri';
import Accordion from 'react-bootstrap/Accordion';
import ChatBotButton from '../components/ChatBot/ChatBotButton';
import Tooltip from '@mui/material/Tooltip';

export default function ChatBot() {
  // const [ws, setWs] = useState(null); // socket.io
  const [msg, setMsg] = useState(''); // user's message
  const [msgPop, setMsgPop] = useState([]); // user's MessageDivStyle
  const [sendBack, setSendBack] = useState(true); // 送出請求
  const [bot, setBot] = useState('請問有什麼需求？'); // bot's message
  const [chatClose, setChatClose] = useState(false); // 關閉請求
  const [width, setWidth] = useState(window.innerWidth); // 視窗寬度
  const [chatIn, setChatIn] = useState(false); // 是否在視窗內

  const themes = {
    light: {
      background: 'bg-white',
      subText: 'link-content',
      subBorder: 'border-content',
      btn: 'btn-outline-content',
      border: 'border-subcontent',
      userTextColor: 'text-content',
      userTextBackground: 'bg-subcontent',
      goralTextColor: 'text-line',
      goralTextBackground: 'bg-content',
    },
    secondary: {
      background: 'bg-secondary',
      subText: 'link-content',
      subBorder: 'border-content',
      btn: 'btn-outline-content',
      border: 'border-subcontent',
      userTextColor: 'text-content',
      userTextBackground: 'bg-subcontent',
      goralTextColor: 'text-line',
      goralTextBackground: 'bg-content',
    },
    dark: {
      background: 'bg-dark',
      subText: 'link-line',
      subBorder: 'border-line',
      btn: 'btn-outline-line',
      border: 'border-line',
      userTextColor: 'text-content',
      userTextBackground: 'bg-graybg',
      goralTextColor: 'text-content',
      goralTextBackground: 'bg-line',
    },
    primary: {
      background: 'bg-primary',
      subText: 'link-line',
      subBorder: 'border-line',
      btn: 'btn-outline-line',
      border: 'border-line',
      userTextColor: 'text-content',
      userTextBackground: 'bg-graybg',
      goralTextColor: 'text-content',
      goralTextBackground: 'bg-line',
    },
  };
  const [opacity, setOpacity] = useState(true);
  const [useTheme, setUseCurrentTheme] = useState(themes.light);
  const chatSelect = document.getElementById('chat-select'); // 抓選單的範圍
  const sendInput = document.getElementById('sendInput'); // 抓input

  const chatSelectGroup = [
    '想選購登山車',
    '想學習登山車',
    '想參加約騎活動',
    '想查詢林道資訊',
    '想看登山車近期消息',
    '想製作一台屬於我的登山車',
  ]; // 選單內的項目

  // -------------------------------------------- socket
  // const connectWebSocket = () => {
  //   //開啟
  //   setWs(webSocket('http://localhost:3001'));
  // };

  // useEffect(() => {
  //   if (ws) {
  //     //連線成功在 console 中打印訊息
  //     // console.log('success connect!');
  //     //設定監聽
  //     initWebSocket();
  //   }
  // }, [ws]);

  // const initWebSocket = () => {
  //   //對 getMessage 設定監聽，如果 server 有透過 getMessage 傳送訊息，將會在此被捕捉
  //   ws.on('getMessage', (message) => {
  //     // console.log(message);
  //   });
  // };

  // -------------------------- user send message
  function sendMessage(e) {
    // --------------- 如果 user 有輸入訊息 > 送訊息 | 沒有 > 不送
    if (msg !== '') {
      // -----------往訊息列表中加入新的訊息(含樣式)
      // 英文字母換行問題用 css 的 wordBreak:'break-all' 解決
      // msg 為 user 輸入並送出的訊息
      setMsgPop([
        ...msgPop,
        <div className="d-flex gap-3 justify-content-end">
          <div
            className={`chat-text ${useTheme.userTextBackground} ${useTheme.userTextColor} w-auto h-auto rounded px-3 mb-4 my-2`}
          >
            <p className="m-0 py-2" style={{ wordBreak: 'break-all' }}>
              {msg}
            </p>
          </div>
          <div
            className="rounded-circle overflow-hidden border flex-shrink-0"
            style={{ width: '3.2rem', height: '3.2rem' }}
          >
            <img
              className="cover"
              src={`${IMAGE_URL}/avatar/User_Avatar.png`}
              alt=""
            />
          </div>
        </div>,
      ]);

      // ---------------------- 使用者有送出訊息，就做回應
      setSendBack(!sendBack);

      // --------------------------------- 判斷回應文本
      if (msg.includes('想選購登山車')) {
        setBot(
          <>
            可以到
            <Link to="/product" className="link-highlight mx-1">
              商品頁
            </Link>
            逛逛哦
          </>
        );
      } else if (msg.includes('想學習登山車')) {
        setBot(
          <>
            可以到
            <Link to="/course" className="link-highlight mx-1">
              課程頁
            </Link>
            逛逛哦
          </>
        );
      } else if (msg.includes('想參加約騎活動')) {
        setBot(
          <>
            可以到
            <Link to="/activity" className="link-highlight mx-1">
              活動頁
            </Link>
            逛逛哦
          </>
        );
      } else if (msg.includes('想查詢林道資訊')) {
        setBot(
          <>
            可以到
            <Link to="/map" className="link-highlight mx-1">
              場地資訊
            </Link>
            看看哦
          </>
        );
      } else if (msg.includes('想看登山車近期消息')) {
        setBot(
          <>
            可以到
            <Link to="/news" className="link-highlight mx-1">
              消息頁
            </Link>
            看看哦
          </>
        );
      } else if (msg.includes('想製作一台屬於我的登山車')) {
        setBot(
          <>
            可以到
            <Link to="/CustomePages/customize" className="link-highlight mx-1">
              客製化區域
            </Link>
            試試哦
          </>
        );
      } else if (msg.includes('hi')) {
        setBot('你好，我是一隻羊');
      } else if (msg.includes('聊天')) {
        setBot('只要你願意，隨時都可以找小羊聊天');
      } else if (msg.includes('bye')) {
        setBot('再見，希望你有開心的一天');
        setChatClose(true);
      } else {
        setBot('對不起，小羊不太懂');
      }
    }
    setMsg(''); // 送完訊息把 input 清空
    // ----------------------------------------------------- socket
    //以 emit 送訊息，並以 getMessage 為名稱送給 server 捕捉
    // ws.emit('getMessage', '你好');
  }

  // ------------------------- 訊息輸入 > 即時改變 input 的 value
  function handleChange(e) {
    setMsg(e.target.value);
  }

  // --------------------- 是否有訊息需要回應
  useEffect(() => {
    // 因為某些狀態下 bot 的值會變空字串，所以要判斷有值才送出
    if (bot !== '') {
      // 等 user 訊息出現 1 秒後再出現 bot 回應訊息
      setTimeout(() => {
        setMsgPop([
          ...msgPop,
          <div className="d-flex gap-3 mt-2">
            <div
              className="rounded-circle overflow-hidden border flex-shrink-0"
              style={{ width: '3.2rem', height: '3.2rem' }}
            >
              <img
                className="cover"
                src={`${IMAGE_URL}/avatar/Goral_Avatar.png`}
                alt=""
              />
            </div>
            <div
              className={`chat-text ${useTheme.goralTextBackground} ${useTheme.goralTextColor} w-auto h-auto rounded px-3 mb-4 mt-2`}
            >
              <p className="m-0 py-2" style={{ wordBreak: 'break-all' }}>
                {bot}
              </p>
            </div>
          </div>,
        ]);
      }, 1000);
      setBot('');
    }
  }, [sendBack]);

  // ------------------------- 如果新訊息顯示，卷軸置底
  useEffect(() => {
    let div = document.getElementById('chatbody');
    div.scrollTop = div.scrollHeight;
  }, [msgPop]);

  // -------------------------- 滑鼠進入選單
  function handleMouseOver() {
    // 加入滾輪事件
    chatSelect.addEventListener('mousewheel', (e) => {
      // 左右卷軸滾動
      chatSelect.scrollLeft += e.deltaY;
    });
    // 防止全頁卷軸跟著滾動
    document.body.style.overflow = 'hidden';
    // 按 enter 發送
    sendInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('sendBtn').click();
      }
    });
    // RWD | 導覽開啟的時候，隱藏 button
    setChatIn(true);
  }

  // -------------------------- 滑鼠離開選單
  function handleMouseOut() {
    // 移除滾輪事件
    chatSelect.removeEventListener('mousewheel', chatSelect, false);
    // 恢復全頁卷軸滾動
    document.body.style.overflow = '';
    // RWD | 導覽關閉的時候，顯示 button
    setChatIn(false);
  }

  // --------------------- 選單項目被選擇 > 導入到 user 的 input
  function botSelect(e) {
    setMsg(e.target.innerText);
  }

  // ----------------- 偵測視窗寬度
  useEffect(() => {
    const updateWindowsWidth = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener('resize', updateWindowsWidth);

    return () => window.removeEventListener('resize', updateWindowsWidth);
  }, []);

  return (
    <Accordion>
      {/* ---------------------------- 導覽開關 */}
      <ChatBotButton
        eventKey="0"
        // connectWebSocket={connectWebSocket}
        setChatClose={setChatClose}
        chatClose={chatClose}
        width={width}
        chatIn={chatIn}
        method="button"
      />
      {/* ---------------------------- 導覽本體 */}
      <Accordion.Collapse eventKey="0" className="chatbox">
        <div className="position-relative pb-3">
          {/* ---------------------------- 透明背景 */}
          <div
            className={`chat-background w-100 h-100 position-absolute ${
              opacity ? 'opacity-75' : ''
            } ${useTheme.background} rounded`}
            style={{ zIndex: '-1' }}
          />
          {/* ---------------------------- 關閉鈕 */}
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2 ms-3 mt-3">
              <div
                className="color-button rounded-circle shadow bg-dark"
                onClick={() => {
                  setUseCurrentTheme(themes.dark);
                }}
              ></div>
              <div
                className="color-button rounded-circle shadow bg-primary "
                onClick={() => {
                  setUseCurrentTheme(themes.primary);
                }}
              ></div>
              <div
                className="color-button rounded-circle shadow bg-secondary "
                onClick={() => {
                  setUseCurrentTheme(themes.secondary);
                }}
              ></div>
              <div
                className="color-button rounded-circle shadow bg-white"
                onClick={() => {
                  setUseCurrentTheme(themes.light);
                }}
              ></div>
              <div
                className="color-button rounded-circle shadow overflow-hidden d-flex align-content-center justify-content-center"
                onClick={() => {
                  setOpacity(!opacity);
                }}
              >
                <img
                  className="cover"
                  src={`${IMAGE_URL}/no-data/opacity.png`}
                  alt=""
                />
              </div>
            </div>

            <ChatBotButton
              eventKey="0"
              setChatClose={setChatClose}
              chatClose={chatClose}
              width={width}
              chatIn={chatIn}
              method="close"
              useTheme={useTheme}
            />
          </div>

          {/* ---------------------------- 全頁滾動停止區域 */}
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {/* ---------------------------- 標題 */}
            <div
              className={`title text-nowrap ${useTheme.subText} text-center px-5 pb-1 rounded-top`}
            >
              <p className="m-0" style={{ cursor: 'default' }}>
                小羊導覽系統
              </p>
              <div className={`border-bottom ${useTheme.subBorder}`} />
              <p style={{ cursor: 'default' }}>Goral Guider System</p>
            </div>
            {/* ---------------------------- 訊息區 */}
            <div
              id="chatbody"
              className="chatbody d-grid gap-2 px-3 bg-transparent border-0"
            >
              {/* ---------------------------- 訊息 */}
              {msgPop.map((v, i) => {
                return <div key={i}>{v}</div>;
              })}
            </div>
            {/* ---------------------------- 訊息選單 */}
            <div className="select-box">
              <p
                className={`fs-7 ${useTheme.subText} m-0 ms-3 mb-1`}
                style={{ cursor: 'default' }}
              >
                可透過下方選擇問題或是輸入關鍵字詢問
              </p>
              <div
                id="chat-select"
                className="chat-select d-flex flex-nowrap text-nowrap h-auto pb-2"
              >
                <div className="chat-select-px mx-2">
                  {/* ---------------------------- 訊息選單項目 */}
                  {chatSelectGroup.map((v, i) => {
                    return (
                      <button
                        key={i}
                        className={`btn ${useTheme.btn} rounded-pill py-0 mx-1`}
                        onClick={botSelect}
                      >
                        {v}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* ---------------------------- 訊息輸入欄位 */}
            <div className="text-input-box d-flex flex-nowrap">
              <input
                id="sendInput"
                className={`w-80 bg-transparent py-0 ps-3 rounded-pill ms-3 mt-2 ${useTheme.subText} ${useTheme.border}`}
                type="text"
                placeholder="請輸入關鍵字"
                value={msg}
                onChange={handleChange}
              />
              {/* ---------------------------- 送出 */}
              <Tooltip title={msg === '' ? '請輸入訊息' : ''}>
                <div
                  id="sendBtn"
                  className={`${useTheme.subText} m-2`}
                  onClick={sendMessage}
                  style={{ cursor: 'pointer' }}
                >
                  <RiSendPlaneFill size={26} />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </Accordion.Collapse>
    </Accordion>
  );
}
