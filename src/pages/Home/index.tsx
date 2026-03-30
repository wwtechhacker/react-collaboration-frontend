import React from 'react'
import { Grid, Box, Typography, Stack, Button } from '@mui/material'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import { motion } from 'framer-motion'

const MotionBox = motion(Box);

type Props = {
    HomeRef: any
}

const Home: React.FC<Props> = ({ HomeRef }) => {
    return (
        <Grid
            ref={HomeRef}
            container
            sx={{
                py: { xs: 6, md: 10 },
                px: { xs: 2, sm: 4, md: 8 },
                background: 'linear-gradient(to right, #ffffff, 50%, rgb(224,233,248))',
            }}
            alignItems="center"
            justifyContent="center"
            spacing={4}
        >
            {/* LEFT CONTENT */}
            <Grid size={{ xs: 12, md: 6 }} sx={{ maxWidth: '80%' }}>
                <MotionBox
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0, duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Stack spacing={3}>
                        <Box
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1,
                                px: 2,
                                py: 1,
                                borderRadius: '50px',
                                background: 'rgb(225,235,255)',
                                width: 'fit-content',
                                color: 'var(--light-theme)',
                            }}
                        >
                            <img src={`https://cdn-icons-png.flaticon.com/24/8358/8358886.png`} />
                            <Typography fontSize={{ xs: 12, sm: 14 }} fontWeight={'bold'}>
                                LOOKING FOR A COMMUNICATION PARTNER
                            </Typography>
                        </Box>

                        {/* TITLE */}
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: '26px',
                                        sm: '32px',
                                        md: '42px',
                                        lg: '46px',
                                    },
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                }}
                            >
                                I Build Scalable Systems.
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: '26px',
                                        sm: '32px',
                                        md: '42px',
                                        lg: '46px',
                                    },
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                    color: 'var(--light-theme)'
                                }}
                            >
                                You Handle Client Communication.
                            </Typography>
                        </Box>

                        {/* DESCRIPTION */}
                        <Typography
                            sx={{
                                color: 'text.secondary',
                                fontSize: {
                                    xs: '14px',
                                    md: '16px',
                                },
                                maxWidth: 500,
                            }}
                        >
                            I'm a developer looking to partner with someone who can manage client
                            communication while I focus on building robust, high-quality systems.
                        </Typography>

                        {/* BUTTONS */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                flexDirection: {
                                    xs: 'column',
                                    sm: 'row',
                                },
                            }}
                        >
                            <Button
                                variant="contained"
                                startIcon={<HandshakeOutlinedIcon />}
                                fullWidth
                                sx={{ maxWidth: { sm: 220 } }}
                            >
                                <Typography>Let's Collaborate</Typography>
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={<ReceiptLongOutlinedIcon />}
                                fullWidth
                                sx={{ maxWidth: { sm: 220 } }}
                            >
                                <Typography>View My Work</Typography>
                            </Button>
                        </Box>

                        {/* FEATURES */}
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: '1fr 1fr',
                                    md: '1fr 1fr 1fr',
                                },
                                gap: 2,
                            }}
                        >
                            {[
                                'Production-Ready Code',
                                'Clear Progress Updates',
                                'Reliable Delivery',
                            ].map((text, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.03)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        padding: '3px',
                                        borderRadius: '5px',
                                    }}
                                >
                                    <CheckCircleOutlinedIcon color="success" />
                                    <Typography fontSize="0.8rem">{text}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Stack>
                </MotionBox>
            </Grid>

            {/* RIGHT IMAGE */}
            <Grid size={{ xs: 12, md: 6 }}>
                <MotionBox
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0, duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            // src="/src/assets/hero-right.png"
                            src={`https://img.freepik.com/free-photo/happy-young-colleagues-sitting-office-coworking-using-laptop_171337-17689.jpg`}
                            draggable={false}
                            alt="hero"
                            sx={{
                                width: '100%',
                                maxWidth: { xs: 480, sm: 480, md: 360, lg: 560 },
                                borderRadius: 10,
                            }}
                        />
                    </Box>
                </MotionBox>
            </Grid>
        </Grid>
    )
}

export default Home