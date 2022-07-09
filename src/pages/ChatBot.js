import React, { useState, useEffect } from 'react';
import webSocket from 'socket.io-client';
import { IMAGE_URL } from '../utils/config';
import { RiSendPlaneFill } from 'react-icons/ri';
import Fab from '@mui/material/Fab';
export default function ChatBot() {
  const [ws, setWs] = useState(null);
  const [msg, setMsg] = useState('');
  const [msgPop, setMsgPop] = useState([]);
  const [sendBack, setSendBack] = useState(true);
  const [bot, setBot] = useState('請問有什麼需求？');
  const chatSelect = document.getElementById('chat-select');
  const chatSelectGroup = [
    '想選購登山車',
    '想學習登山車',
    '想參加約騎活動',
    '想查詢林道資訊',
    '想看登山車近期消息',
  ];
  const connectWebSocket = () => {
    //開啟
    setWs(webSocket('http://localhost:3001'));
  };

  useEffect(() => {
    if (ws) {
      //連線成功在 console 中打印訊息
      console.log('success connect!');
      //設定監聽
      initWebSocket();
    }
  }, [ws]);

  const initWebSocket = () => {
    //對 getMessage 設定監聽，如果 server 有透過 getMessage 傳送訊息，將會在此被捕捉
    ws.on('getMessage', (message) => {
      console.log(message);
    });
  };

  function sendMessage(e) {
    setMsg(''); // 把input清空
    if (msg !== '') {
      setMsgPop([
        ...msgPop,
        <div className="d-flex gap-2 justify-content-end">
          <div className="chat-text bg-light text-content w-auto h-auto rounded py-2 px-3 my-3">
            <p className="m-0 ">{msg}</p>
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
      //以 emit 送訊息，並以 getMessage 為名稱送給 server 捕捉
      ws.emit('getMessage', '你好');
      setSendBack(!sendBack);
      if (msg.includes('車')) {
        setBot(
          '請問要什麼樣的車呢請問要什麼樣的車呢請問要什麼樣的車呢請問要什麼樣的車呢請問要什麼樣的車呢請問要什麼樣的車呢請問要什麼樣的車呢'
        );
      } else {
        setBot('也許您需要以下這些服務');
      }
    } else {
      setMsgPop([
        ...msgPop,
        <div
          className="chat-text bg-secondary text-content rounded"
          style={{ width: '1rem', height: '1rem' }}
        ></div>,
      ]);
      ws.emit('getMessage', '你好');
      setBot('也許您需要以下這些服務');
      setSendBack(!sendBack);
    }
  }

  function handleChange(e) {
    setMsg(e.target.value);
  }

  useEffect(() => {
    setTimeout(() => {
      setMsgPop([
        ...msgPop,
        <div className="d-flex gap-2">
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
          <div className="chat-text bg-light text-content w-auto h-auto rounded py-2 px-3 my-3">
            <p className="m-0 p-0">{bot}</p>
          </div>
        </div>,
      ]);
    }, 1000);
    setBot('');
  }, [sendBack]);

  useEffect(() => {
    let div = document.getElementById('chatbody');
    div.scrollTop = div.scrollHeight;
  }, [msgPop]);

  function handleMouseOver() {
    chatSelect.addEventListener('mousewheel', (e) => {
      chatSelect.scrollLeft += e.deltaY;
    });
    document.body.style.overflow = 'hidden';
  }
  function handleMouseOut() {
    chatSelect.removeEventListener('mousewheel', chatSelect, false);
    document.body.style.overflow = '';
  }

  function botSelect(e) {
    setMsg(e.target.innerText);
  }

  return (
    <>
      <div
        className="position-fixed link-subcontent"
        style={{ zIndex: '99', bottom: '3rem', right: '3rem' }}
      >
        <Fab>
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
        </Fab>
        <p className="mt-1 text-center" style={{ cursor: 'pointer' }}>
          導覽羊
        </p>
      </div>
      <div
        className="chatbox m-5 h-auto position-relative shadow pb-3"
        style={{ width: '24rem' }}
      >
        <div className="title text-nowrap text-white text-center py-2 bg-primary">
          小羊導覽系統
        </div>
        <div
          id="chatbody"
          className="chatbody d-grid gap-2 px-3 bg-transparent border-0"
          style={{ height: '15rem' }}
        >
          {msgPop.map((v, i) => {
            return <div key={i}>{v}</div>;
          })}
        </div>
        <div className="select-box">
          <p
            className="fs-7 link-subcontent m-0 ms-3 mb-1"
            style={{ cursor: 'default' }}
          >
            可透過下方選擇問題或是輸入關鍵字詢問
          </p>
          <div
            id="chat-select"
            className="chat-select d-flex flex-nowrap text-nowrap h-auto pb-2"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {chatSelectGroup.map((v, i) => {
              return (
                <button
                  key={i}
                  className="btn btn-outline-primary rounded-pill py-0 mx-1"
                  onClick={botSelect}
                >
                  {v}
                </button>
              );
            })}
          </div>
        </div>
        <div className="text-input-box d-flex flex-nowrap">
          <input
            className="w-100 bg-transparent py-0 ps-3 rounded-pill ms-3 mt-2"
            type="text"
            placeholder="請輸入關鍵字"
            value={msg}
            onChange={handleChange}
          />
          <div className="link-primary m-2" onClick={sendMessage}>
            <RiSendPlaneFill size={26} />
          </div>
        </div>
      </div>

      <input type="button" value="連線" onClick={connectWebSocket} />
    </>
  );
}
