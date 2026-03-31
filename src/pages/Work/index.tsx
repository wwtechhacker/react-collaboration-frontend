import React from 'react'
import { Grid, Box, Typography, Stack } from '@mui/material'
import {
    CheckCircleIcon,
    Code2Icon,
    HandshakeIcon,
    LayoutPanelTopIcon,
    MessageCircleMoreIcon,
    RocketIcon
} from 'lucide-react';

type Props = {
    WorkRef: any;
}

const Work: React.FC<Props> = ({ WorkRef }) => {
    return (
        <>
            <Box
                ref={WorkRef}
                sx={{
                    padding: '40px 0',
                    backgroundColor: 'rgb(248,248,248)',
                }}
            >
                <Box
                    component={'img'}
                    src={`/src/assets/how-we-work.png`}
                    draggable={false}
                    onClick={(e) => e.preventDefault()}
                    sx={{
                        display: 'grid',
                        width: '100%',
                        justifySelf: 'center',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(30%, 1fr))',
                        gap: 3,
                    }}
                />

                <Box p={4}>
                    <Typography
                        textAlign="center"
                        fontWeight={700}
                        sx={{
                            fontSize: { xs: 28, md: 36 },
                            mb: 2,
                        }}
                    >
                        How We Work Together
                    </Typography>


                    <Grid container spacing={3}>
                        {[
                            {
                                icon: <MessageCircleMoreIcon />,
                                title: 'You Talk to Your Client',
                                desc: 'You handle the client relationship and requirements.',
                            },
                            {
                                icon: <Code2Icon />,
                                title: 'We Handle the Technical Work',
                                desc: 'We build, develop, and solve the technical side.',
                            },
                            {
                                icon: <CheckCircleIcon />,
                                title: 'Smooth Handoff & Delivery',
                                desc: 'We stay in sync until the project is complete.',
                            },
                            {
                                icon: <HandshakeIcon />,
                                title: 'No confusion',
                                desc: 'One clear point of contact for the client.',
                            },
                            {
                                icon: <LayoutPanelTopIcon />,
                                title: 'Always in the loop',
                                desc: 'We keep you updated at every step.',
                            },
                            {
                                icon: <RocketIcon />,
                                title: 'You get the credit',
                                desc: 'We work behind the scenes to make you look great.',
                            },
                        ].map((item, i) => (
                            <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }} key={i}>
                                <Box
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        border: i < 3 ? '1px solid lightgrey' : 'none',
                                        backdropFilter: 'blur(10px)',
                                        backgroundColor: i < 3 ? 'rgb(255,255,255,0.5)' : 'rgb(0,0,0,0.03)',
                                        height: '100%',
                                        transition: '0.3s',
                                        display: 'flex',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            color: 'rgb(95,62,229)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Stack spacing={2} style={{ textAlign: 'center', alignItems: 'center' }}>
                                        <Typography fontWeight={'bold'} fontSize={18}>
                                            {item.title}
                                        </Typography>
                                        <Typography sx={{ color: 'black', fontSize: 15 }}>
                                            {item.desc}
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Work;