import React, { useContext } from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import Fab from '@mui/material/Fab';
import { IMAGE_URL } from '../../utils/config';
import { AiOutlineMinus } from 'react-icons/ai';

import Draggable from 'react-draggable';
import { useState } from 'react';

export default function ChatBotButton({
  eventKey,
  callback,
  // connectWebSocket,
  setChatClose,
  chatClose,
  width,
  chatIn,
  method,
  useTheme,
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

  const [state, setState] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
  });

  const onStart = () => {
    setState({ activeDrags: ++state.activeDrags });
  };

  const onStop = () => {
    setState({ activeDrags: --state.activeDrags });
  };

  const dragHandlers = { onStart: onStart, onStop: onStop };
  // const { deltaPosition, controlledPosition } = useState(state);

  return (
    <>
      {method === 'button' ? (
        <Draggable bounds="body" {...dragHandlers}>
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
                className="rounded-circle overflow-hidden border"
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
        </Draggable>
      ) : (
        <div
          className={`${useTheme.subText}  text-end me-3 pt-1`}
          onClick={decoreatedAndConnect}
          style={{ cursor: 'pointer' }}
        >
          <AiOutlineMinus size={26} />
        </div>
      )}
    </>
  );
}
