import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import style from '../../styles/utils/Spinner.module.scss';

export default function Spinner() {
  return (
    <Box className={style.spinnerContainer}>
      <h1>Загрузка Страницы</h1>
      <CircularProgress size={'250px'} color={'error'} thickness={6} />
    </Box>
  );
}
