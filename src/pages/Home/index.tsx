import React from 'react'
import { Grid, Box, Typography, Stack, Avatar } from '@mui/material'
import { motion } from 'framer-motion'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

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
                px: { xs: 1, sm: 2, md: 4 },
                background: 'linear-gradient(to right, #ffffff, 20%, rgb(250,259,254))',
                // background: 'rgb(250,259,254)',
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
                                color: 'var(--light-theme-purple)',
                            }}
                        >
                            <img src={'/src/assets/bluecheck.png'} />
                            <Typography fontSize={{ xs: 12, sm: 14 }} fontWeight={'bold'}>
                                LOOKING FOR A COMMUNICATION PARTNER
                            </Typography>
                        </Box>

                        {/* TITLE */}
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: '28px',
                                        sm: '32px',
                                        md: '38px',
                                        lg: '42px',
                                    },
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                }}
                            >
                                We Build Scalable Systems.
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: '28px',
                                        sm: '32px',
                                        md: '38px',
                                        lg: '42px',
                                    },
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                    color: 'var(--light-theme-purple)'
                                }}
                            >
                                You Handle Client Communication.
                            </Typography>
                        </Box>

                        {/* DESCRIPTION */}
                        <Typography
                            sx={{
                                color: 'black',
                                fontSize: {
                                    xs: '14px',
                                    md: '16px',
                                },
                                maxWidth: 500,
                            }}
                        >
                            We work behind the scenes to bring your ideas to lifeー<br />
                            so you can focus on building relationships and growing your business.
                        </Typography>

                        {/* BUTTONS */}
                        <Grid
                            container
                            sx={{
                                p: '15px 20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 2,
                                backgroundColor: 'rgb(245,248,245)',
                                borderRadius: '10px',
                                backdropFilter: 'blur(8px)',
                                boxShadow: '0 0 10px rgba(50,100,50,0.2)',
                            }}
                        >
                            <Grid size={2}>
                                <Box component={'img'} src={'/src/assets/handshake.png'} />
                            </Grid>
                            <Grid size={9} sx={{ textAlign: 'center' }}>
                                <Stack spacing={1}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography>Your Focus: Client & Growth</Typography>
                                        <Typography>Our Focus: Code & Execution</Typography>
                                    </Box>
                                    <Typography variant='h6' color='success'>Together: Successful Projects</Typography>
                                </Stack>
                            </Grid>
                        </Grid>

                        {/* FEATURES */}
                        <Grid container>
                            {[
                                {
                                    icon: <CheckCircleOutlinedIcon />,
                                    title: '20+',
                                    desc: 'Projects Delivered',
                                },
                                {
                                    icon: <SentimentSatisfiedAltOutlinedIcon />,
                                    title: 'Happy',
                                    desc: 'Clients',
                                },
                                {
                                    icon: <AccessTimeOutlinedIcon />,
                                    title: 'Reliable',
                                    desc: '& On-Time',
                                }
                            ].map((item, i) => (
                                <Grid
                                    size={4}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        padding: '3px',
                                        borderRadius: '5px',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            color: 'green',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Stack>
                                        <Typography fontSize="1.2rem" fontWeight={'bold'}>{item.title}</Typography>
                                        <Typography fontSize="1rem">{item.desc}</Typography>
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
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
                            src="/src/assets/hero-right.png"
                            draggable={false}
                            alt="hero"
                            sx={{
                                width: '100%',
                                // maxWidth: { xs: 480, sm: 480, md: 600, lg: 900 },
                                borderRadius: 10,
                            }}
                        />
                    </Box>
                </MotionBox>
            </Grid>
        </Grid>


        // <Box
        //     ref={HomeRef}
        //     component={'img'}
        //     src={'/src/assets/home.png'}
        //     draggable={false}
        //     onClick={(e) => e.preventDefault()}
        //     sx={{
        //         display: 'grid',
        //         width: '100%',
        //         justifySelf: 'center',
        //         gridTemplateColumns: 'repeat(auto-fit, minmax(30%, 1fr))',
        //         gap: 3,
        //     }}
        // />
    )
}

export default Home