import { useState } from 'react';
function ColorPalette(props) {
  const [background, setBackground] = useState('#071415');
  // const [current, setCurrent] = useState(null);props.currentColor
  return (
    <div>
      <div className="App p-1" style={{ background: background }}>
        <div className="container row p-0 justify-content-center m-0">
          {props.color.map((v, index) => {
            const color = v.color_value;

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
                    console.log(e.target.style.width);
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.width = '24px';
                    e.target.style.height = '24px';
                    e.target.style.margin = '4px';
                    console.log(e.target.style.width);
                  }}
                  onClick={() => {
                    setBackground(color);
                    props.setCurrentColor(v.color_name);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <div></div>
        <button
          className="btn btn-warning"
          onClick={() => {
            props.setCurrentColor();
            setBackground('#071415');
          }}
        >
          Reset Colour
        </button>
      </div>
    </div>
  );
}

export default ColorPalette;
