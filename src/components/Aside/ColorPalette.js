import { useState } from 'react';
function ColorPalette(props) {
  const [background, setBackground] = useState('#071415');
  // const [current, setCurrent] = useState(null);props.currentColor
  return (
    <div>
      <div className="App" style={{ background: background }}>
        <div className="container row p-0 justify-content-center m-0">
          {props.color.map((v, index) => {
            const color = v.color_value;

            return (
              <div
                key={index}
                className="col-2 p-0 d-flex justify-content-center"
              >
                <div
                  className="rounded-circle m-1"
                  style={{
                    background: color,
                    width: 24,
                    height: 24,
                    filter: 'brightness(85%)',
                    boxShadow: color === background ? '0 0 5px #000' : '',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => {
                    setBackground(color);
                    props.setCurrentColor(v.color_name);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* A BUTTON FOR SENDING THE DATA TO THE BACKEND INCASE I NEED IT */}
      {/* <div className="d-flex justify-content-between">
        <div></div>
        <button className="btn fs-6 border-2 px-4 py-1 rounded-0 btn-primary rounded-pill">
          篩選
        </button>
      </div> */}
    </div>
  );
}

export default ColorPalette;
