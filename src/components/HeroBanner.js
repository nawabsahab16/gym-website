import React from 'react'
import {Box, Stack, Typography , Button} from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png'; 


const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px' , xs: '70px'},
        ml: {sm: '50px'}
    }}
    position="relative" p="20px">
     <Typography color="#FF2625"
      fontWeight="600" fontSize="26px">
      Fitness Club 
     </Typography>
     <Typography fontWeight={700}
     sx={{ fontSize : {lg : '44px', xs: '40px'}
    }}>
        Sweat, Smile <br/> and Repeat
     </Typography>
     <Typography fontSize="22px"
     lineHeight="35px">
        Check out the most effective exercises 
     </Typography>
     <Button variant="contained"
     color="error" href="#exercises"> 
        Explore Exercises
     </Button>
     <img src={HeroBannerImage} alt="banner"
     className="hero-banner-img"/>

    </Box>
  )
}

export default HeroBanner