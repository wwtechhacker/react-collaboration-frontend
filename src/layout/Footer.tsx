import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';

function Copyright() {
    return (
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {'© '}
            2026&nbsp;
            <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
                James Farnsworth
            </a>
            • Full Stack Developer looking for a Client Communication Partner.
        </Typography>
    );
}

export default function Footer() {
    return (
        <React.Fragment>
            <Divider />
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    py: { xs: 2, sm: 2 },
                    textAlign: { sm: 'center', md: 'left' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <Copyright />
                    <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        sx={{ justifyContent: 'left', color: 'text.secondary' }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                mt: 1,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.5
                            }}
                        >
                            <FmdGoodOutlinedIcon /> Available for Remote • Worldwide
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                mt: 1,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <BoltOutlinedIcon /> Fast Response
                        </Typography>
                    </Stack>
                </Box>
            </Container>
        </React.Fragment>
    );
}
