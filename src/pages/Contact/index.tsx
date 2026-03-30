import React from 'react'
import { Grid, Box, Typography, Stack, Button, IconButton } from '@mui/material'
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SickIcon from '@mui/icons-material/Sick';

type Props = {
    ContactRef: any;
}

const Contact: React.FC<Props> = ({ ContactRef }) => {
    return (
        <Box
            ref={ContactRef}
            sx={{
                margin: '0 auto',
                padding: '40px 0',
                background: 'rgb(246,247,251)',
                
            }}
        >
            <Grid
                container
                sx={{
                    px: { xs: 2, sm: 4, md: 8 },
                    width: '80%',
                    margin: 'auto',
                }}
                alignItems="center"
                justifyContent="center"
                spacing={4}
            >
                {/* LEFT CONTENT */}
                <Grid size={{ xs: 12, md: 6 }} sx={{ maxWidth: '80%' }}>
                    <Typography variant="h5" mb={3} fontWeight={600}>
                        Let's Build Something Great Together
                    </Typography>
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
                        I handle the development. You handle the clients.
                        Together, we can deliver outstanding results.
                    </Typography>
                </Grid>

                {/* RIGHT IMAGE */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Stack spacing={3}>
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
                                startIcon={<ContactMailOutlinedIcon />}
                                fullWidth
                                sx={{ maxWidth: { sm: 200 } }}
                            >
                                <Typography>Get In Touch</Typography>
                            </Button>

                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{ maxWidth: { sm: 200 } }}
                            >
                                <Typography>View Projects</Typography>
                            </Button>
                        </Box>

                        {/* FEATURES */}
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr 1fr',
                                    sm: '1fr 1fr 1fr 1fr',
                                    md: '1fr 1fr 1fr 1fr 1fr 1fr',
                                },
                                gap: 2,
                            }}
                        >
                            {[
                                {
                                    icon: <EmailIcon />,
                                    url: `mailto:contact@topdevs.tech`
                                },
                                {
                                    icon: <LinkedInIcon />,
                                    url: `https://linkedin.com`
                                },
                                {
                                    icon: <GitHubIcon />,
                                    url: `https://github.com/wwtechhacker`
                                },
                                {
                                    icon: <SickIcon />,
                                    url: `https://codepen.io`
                                },
                                {
                                    icon: <XIcon />,
                                    url: `https://x.com`
                                },
                            ].map((item, i) => (
                                <Button
                                    color="inherit"
                                    size="small"
                                    href={item.url}
                                    sx={{ alignSelf: 'center' }}
                                >
                                    {item.icon}
                                </Button>
                            ))}
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Contact;