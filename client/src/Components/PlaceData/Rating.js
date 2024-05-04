// import * as React from 'react';
// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';
// import './Placedata.css'; // Import the CSS file

// const labels = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };

// function getLabelText(value) {
//   return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
// }

// export default function MyRating() {
//   const [value, setValue] = React.useState(2);
//   const [hover, setHover] = React.useState(-1);

//   return (
//     <Box className="rating-container" sx={{border: "1px solid white",width: "30rem"}}>
//       <Rating
//         name="hover-feedback"
//         value={value}
//         sx={{width: "30rem"}}
//         precision={15.5}
//         getLabelText={getLabelText}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         onChangeActive={(event, newHover) => {
//           setHover(newHover);
//         }}
//         emptyIcon={<StarIcon style={{ opacity: 2.55 }} />}
//       />
//       {value !== null && (
//         <Box className="rating-label">{labels[hover !== -1 ? hover : value]}</Box>
//       )}
//     </Box>
//   );
// }


import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function MyRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    // <Box
    //   sx={{
    //     width: "100vw",
    //     display: 'flex',
    //     alignItems: 'center',
    //   }}
    // >
      <Rating
        name="hover-feedback"
        value={value}
        size='large'
        sx={{
          fontSize: "2rem"
        }}
        // precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      // {value !== null && (
      //   <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      // )}
    // </Box>
  );
}
