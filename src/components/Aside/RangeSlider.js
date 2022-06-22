import { Box } from '@mui/material';
import Slider from '@mui/material/Slider';

export default function RangeSlider(setPriceSubmit) {
  const step = 1000;

  return (
    <>
      <Box sx={{ width: 250 }} className="mx-auto">
        <Slider
          sx={{
            color: 'var(--bs-content)',
            '& .MuiSlider-thumb': {
              width: '0.8rem',
              height: '0.8rem',
            },
            '& .css-1gv0vcd-MuiSlider-track': {
              color: 'var(--bs-subcontent)',
            },
            '& .css-14pt78w-MuiSlider-rail': {
              color: 'var(--bs-line)',
            },
          }}
          value={setPriceSubmit.price}
          step={step}
          onChange={(e) => {
            setPriceSubmit.setPrice(e.target.value);
          }}
          min={0}
          max={200000}
        />
      </Box>
      <div className="d-flex align-items-center justify-content-between px-2 mb-2">
        <p className="m-0 fs-6">
          $ {setPriceSubmit.price[0].toLocaleString()} - ${' '}
          {setPriceSubmit.price[1].toLocaleString()}
        </p>
      </div>
    </>
  );
}
