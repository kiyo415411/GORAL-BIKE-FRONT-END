import { useState } from 'react';
function ColorPalette(props) {
  const [background, setBackground] = useState(props.currentColor);
  // const [current, setCurrent] = useState(null);props.currentColor
  return (
    <div>
      <div className="App p-1" style={{ background: background }}>
        <div className="container row p-0 justify-content-center m-0">
          {props.color.map((v, index) => {
            const color = v;

            return (
              <div
                key={index}
                className="col-2 p-0 d-flex justify-content-center align-items-center"
              >
                <div
                  className="rounded-circle"
                  style={{
                    background: color,
                    width: 24,
                    height: 24,
                    filter: 'brightness(85%)',
                    boxShadow: color === background ? '0 0 5px #000' : '',
                    cursor: 'pointer',
                    margin: 4,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.width = '28px';
                    e.target.style.height = '28px';
                    e.target.style.margin = '0px';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.width = '24px';
                    e.target.style.height = '24px';
                    e.target.style.margin = '4px';
                  }}
                  onClick={() => {
                    props.setCurrentColor(props.colorName[index]);
                    console.log(props.colorName[index]);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ColorPalette;
