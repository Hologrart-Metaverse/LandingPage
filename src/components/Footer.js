import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import useStyles from '../styles/styles';
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedln from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitt from "@iconscout/react-unicons/icons/uil-twitter";


const Footer = () => {
  // const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
      <Typography className={classes.footerText}>
        {/* Provided by{' '}
        <Link href="https://appseed.us" target="_blank" underline="none">
          AppSeed
        </Link> */}
        <Link href="#!" className="text-reset">
          <Twitt color="white" size={"3rem"} />
        </Link>
        <Link href="linkedin.com/in/seydayoncaci" className="text-reset">
          <Linkedln color="white" size={"3rem"} />
        </Link>
        <Link href="https://github.com/ynccsyd" className="text-reset">
          <Github color="white" size={"3rem"} />
        </Link>
        <Link href="#!" className="text-reset">
          <Insta color="white" size={"3rem"} />
        </Link>
      </Typography>
      <Typography className={classes.footerDate}>Open-Source Sample - Buit with MUI</Typography>
    </Box>
  );
};

export default Footer;