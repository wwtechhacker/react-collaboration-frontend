import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Grid } from '@mui/material';

const CustomSpin = () => {
    return (
        <Grid container sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container>
                <DotLottieReact
                    src="https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie"
                    loop
                    autoplay
                />
            </Grid>
        </Grid>
    );
};

export default CustomSpin;