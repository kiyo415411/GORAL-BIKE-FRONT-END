import React, { useContext } from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Fab from '@mui/material/Fab';
import { IMAGE_URL } from '../../utils/config';
import { AiOutlineMinus } from 'react-icons/ai';

export default function ChatBotButton({
  eventKey,
  callback,
  // connectWebSocket,
  setChatClose,
  chatClose,
  width,
  chatIn,
  method,
}) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  function decoreatedAndConnect() {
    decoratedOnClick();
    // connectWebSocket();
  }

  if (chatClose === true) {
    setTimeout(decoratedOnClick, 3000);
    setTimeout(changeClose);
  }

  function changeClose() {
    setChatClose(false);
  }
  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <>
      {method === 'button' ? (
        <div
          className={
            width < 768 && chatIn
              ? 'd-none'
              : 'position-fixed link-subcontent chat-bot-button'
          }
          style={{ zIndex: '98', bottom: '3rem', right: '3rem' }}
          onClick={decoreatedAndConnect}
        >
          <Fab className="">
            <div
              className="rounded-circle overflow-hidden border "
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
      ) : (
        <div
          className="link-content text-end me-3 pt-1"
          onClick={decoreatedAndConnect}
          style={{ cursor: 'pointer' }}
        >
          <AiOutlineMinus size={26} />
        </div>
      )}
    </>
  );
}
