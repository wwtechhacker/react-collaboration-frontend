import React from 'react'
import { Grid, Box, Typography, Stack, Button, TextField } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SickIcon from '@mui/icons-material/Sick'
import MagneticButton from '../../components/MagneticButton'

type Props = {
    ContactRef: any;
}

const Contact: React.FC<Props> = ({ ContactRef }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        const email = formJson.email;
        console.log(email);
    };


    return (
        <Box
            ref={ContactRef}
            sx={{
                margin: '0 auto',
                padding: '40px 0',
            }}
        >
            <Typography
                textAlign="center"
                fontWeight={700}
                sx={{
                    fontSize: { xs: 28, md: 36 },
                    mb: 2,
                }}
            >
                Contact Us
            </Typography>
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
                    <Stack spacing={2}>
                        <Typography variant="h5" mb={3} fontWeight={600}>
                            Let’s Build Something Great Together
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: {
                                    xs: '14px',
                                    md: '16px',
                                },
                                maxWidth: 500,
                            }}
                        >
                            We handle the development.<br />
                            You handle the clients.<br />
                            Together, we can deliver outstanding results.
                        </Typography>

                        {/* FEATURES */}
                        <Typography variant="h6" mb={3} fontWeight={600}>
                            Follow us:
                        </Typography>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr 1fr',
                                    sm: '1fr 1fr 1fr 1fr',
                                    md: '1fr 1fr 1fr 1fr 1fr 1fr',
                                },
                                gap: 1,
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

                {/* RIGHT IMAGE */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Stack spacing={3}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 2,
                                flexDirection: {
                                    xs: 'column',
                                    sm: 'row',
                                },
                            }}
                        >
                            <form onSubmit={handleSubmit} className="contact-form">
                                <Grid container spacing={1}>
                                    <Grid size={6} alignContent={'center'}>
                                        <TextField
                                            required
                                            margin="dense"
                                            id="name"
                                            name="name"
                                            label="Your Name"
                                            placeholder='John Doe'
                                            type="name"
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid size={6} alignContent={'center'}>
                                        <TextField
                                            required
                                            margin="dense"
                                            id="email"
                                            name="email"
                                            label="Your Email"
                                            placeholder='johndoe@example.com'
                                            type="email"
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid size={12} alignContent={'center'}>
                                        <TextField
                                            required
                                            margin="dense"
                                            id="phone"
                                            name="phone"
                                            label="Phone Number"
                                            placeholder="+1 123 456 89 99"
                                            type="phone"
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid size={12} alignContent={'center'}>
                                        <TextField
                                            required
                                            margin="dense"
                                            id="message"
                                            name="message"
                                            label="Message"
                                            placeholder="Tell me about your project or just say hello!"
                                            type="message"
                                            multiline
                                            rows={5}
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <MagneticButton />
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Contact;