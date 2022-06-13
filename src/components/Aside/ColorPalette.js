import { useState, useEffect } from 'react';
function ColorPalette() {
  const [color, setColor] = useState([
    '#643225',
    '#D30000',
    '#F4890A',
    '#F4C10A',
    '#80A23F',
    '#3FA29C',
    '#3F72A2',
    '#3F49A2',
    '#6628B6',
    '#3E3E3E',
    '#C4C4C4',
    '#F6F6F6',
  ]);

  const [background, setBackground] = useState('#071415');
  const [current, setCurrent] = useState(null);
  const [nowColor, setNowColor] = useState(null);

  return (
    <div className="App" style={{ background: background }}>
      {current !== null && <h1>Copied {current}</h1>}
      <div className="container row p-0 justify-content-center m-0">
        {color.map((color, index) => {
          console.log(color);
          return (
            <div key={index} className="col-2 p-0 d-flex justify-content-center">
              <div
                className="rounded-circle m-1"
                style={{
                  background: color,
                  width: 24,
                  height: 24,
                  filter: 'brightness(85%)',
                  boxShadow: color === background ? '0 0 5px #000' : '',
                }}
                onClick={() => setBackground(color)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ColorPalette;
