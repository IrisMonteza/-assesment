/* eslint-disable react/prop-types */
import { React, useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Timer = ({ id }) => {
  const [time, setTime] = useState(Math.trunc(Math.random() * (250 - 60) + 60));

  useEffect(() => {
    if (time === 0) {
      return;
    } else {
      const intervalTime = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(intervalTime);
    }
  }, [time]);

  const minutes = Math.floor(time / 60);
  const timeMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timeSeconds = time % 60 < 10 ? `0${time % 60}` : time % 60;
  const timer = `${timeMinutes}:${timeSeconds}`;

  return (
    <Box
      sx={{
        maxwidth: '100px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
      }}
    >
      <Button sx={{ color: 'black' }}>{timer}</Button>
      <Button variant="contained" disabled={timer === '00:00'}>
        <Link
          to={id}
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          GO TO DETAILS
        </Link>
      </Button>
    </Box>
  );
};

export default Timer;
