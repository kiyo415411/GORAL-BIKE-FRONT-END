import { useState, useEffect } from 'react';
function ColorPalette(props) {
  const [color, setColor] = useState(props.color);

  const [background, setBackground] = useState('#071415');
  const [current, setCurrent] = useState(null);
  const [nowColor, setNowColor] = useState(null);

  return (
    <div className="App" style={{ background: background }}>
      {current !== null && <h1>Copied {current}</h1>}
      <div className="container row p-0 justify-content-start m-0">
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
