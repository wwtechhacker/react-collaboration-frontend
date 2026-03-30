import {
    Box,
    Grid,
    Typography,
    Avatar,
    Stack,
} from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import { motion } from 'framer-motion';
import TechIcons from '../../data/TechIcons';

const MotionBox = motion(Box);

type Props = {
    AboutRef: any
}

const About: React.FC<Props> = ({ AboutRef }) => {
    return (
        <Box ref={AboutRef}>
            {/* Who I Am */}
            <Box
                sx={{
                    py: { xs: 2, md: 4 },
                    px: { xs: 2, sm: 4, md: 8 },
                }}
            >
                {/* TITLE */}
                <Typography
                    textAlign="center"
                    fontWeight={700}
                    sx={{
                        fontSize: { xs: 28, md: 36 },
                        mb: 2,
                    }}
                >
                    About Me
                </Typography>

                {/* MAIN CONTENT */}
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                >
                    {/* AVATAR */}
                    <Grid size={{ xs: 12, md: 3 }} textAlign="center">
                        <Avatar
                            src={`https://img.freepik.com/premium-photo/businessman-listening-music-through-headphones-while-working_107420-93511.jpg`}
                            sx={{
                                width: { xs: 120, md: 160 },
                                height: { xs: 120, md: 160 },
                                mx: 'auto',
                                boxShadow: '0 0 40px rgba(100,100,100,0.4)',
                            }}
                        />
                    </Grid>

                    {/* CARDS */}
                    <Grid size={{ xs: 12, md: 9 }}>
                        <Typography
                            component={'span'}
                            sx={{
                                color: 'black',
                                maxWidth: 700,
                                mx: 'auto',
                                mb: 6,
                                fontSize: { xs: 16, md: 18 },
                            }}
                        >
                            <Typography sx={{ fontSize: { xs: 20, md: 24 } }}>
                                <Box component="span" sx={{ color: 'var(--light-theme)', fontWeight: 'bold' }}>
                                    I’m a results-driven developer
                                </Box>{' '}
                                <Box component="span" sx={{ color: 'black', fontWeight: 'bold' }}>
                                    focused on execution.
                                </Box>
                            </Typography>
                            I specialize in building clean, scalable web applications.
                            Now, I’m ready to partner with a professional who excels at managing client interactions.
                        </Typography>
                    </Grid>

                    <Grid container spacing={3}>
                        {[
                            {
                                icon: <CodeIcon />,
                                title: 'Frontend & Fullstack Expertise',
                                desc: 'React, Next.js, Node.js, clean scalable systems.',
                            },
                            {
                                icon: <RocketLaunchIcon />,
                                title: 'Focused on Building',
                                desc: 'Turn requirements into production-ready systems.',
                            },
                            {
                                icon: <AccessTimeIcon />,
                                title: 'Reliable & Consistent',
                                desc: 'Always deliver clean, tested, maintainable code.',
                            },
                        ].map((item, i) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                                <MotionBox
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.5, duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <Box
                                        sx={{
                                            p: 3,
                                            borderRadius: 3,
                                            background: 'rgba(0,0,0,0.05)',
                                            backdropFilter: 'blur(10px)',
                                            height: '100%',
                                            transition: '0.3s',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                            },
                                        }}
                                    >
                                        <Stack spacing={2} style={{ textAlign: 'center', alignItems: 'center' }}>
                                            <Box
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: '50%',
                                                    background: 'var(--light-theme)',
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {item.icon}
                                            </Box>
                                            <Typography fontWeight={600}>
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                sx={{ color: 'black', fontSize: 14 }}
                                            >
                                                {item.desc}
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </MotionBox>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                {/* TECH STACK */}
                <Box
                    sx={{
                        mt: 6,
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: 3,
                        color: 'black',
                        fontSize: 14,
                    }}
                >
                    {TechIcons.map((tech) => (
                        <Box
                            key={tech.title}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            <img src={tech.icon} draggable={false} />
                            {tech.title}
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Who I'm Looking For */}
            <Box
                sx={{
                    py: { xs: 2, md: 4 },
                    px: { xs: 2, sm: 4, md: 8 },
                    background: 'rgb(246,247,251)',
                }}
            >
                {/* TITLE */}
                <Typography
                    textAlign="center"
                    fontWeight={700}
                    sx={{
                        fontSize: { xs: 28, md: 36 },
                        mb: 2,
                    }}
                >
                    Who I'm Looking For
                </Typography>

                <Grid size={{ xs: 12, md: 9 }}>
                    <Typography
                        sx={{
                            color: 'black',
                            textAlign: 'center',
                            mx: 'auto',
                            mb: 4,
                            fontSize: { xs: 16, md: 18 },
                        }}
                    >
                        I need a communication partner who can represent the project and handle the client relationships.
                    </Typography>
                </Grid>

                <Grid container spacing={3}>
                    {[
                        {
                            icon: <QuestionAnswerOutlinedIcon />,
                            title: 'Strong Communicator',
                            desc: 'Comfortable talking with clients and understanding their needs.',
                        },
                        {
                            icon: <Diversity3OutlinedIcon />,
                            title: 'Client-Facing & Responsible',
                            desc: 'Handles meetings, clarifies requirements, and keeps clients happy.',
                        },
                        {
                            icon: <HandymanOutlinedIcon />,
                            title: 'Organized & Proactive',
                            desc: 'Manages updates, expectations, and project flow.',
                        },
                        {
                            icon: <VolunteerActivismOutlinedIcon />,
                            title: 'A True Partner',
                            desc: 'Someone who wants to grow and build successful projects together.',
                        },
                    ].map((item, i) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
                            <Box
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    backdropFilter: 'blur(10px)',
                                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                                    height: '100%',
                                    transition: '0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                    },
                                }}
                            >
                                <Stack spacing={2} style={{ textAlign: 'center', alignItems: 'center' }}>
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            background: 'var(--light-theme)',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Typography fontWeight={600}>
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        sx={{ color: 'black', fontSize: 14 }}
                                    >
                                        {item.desc}
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default About;