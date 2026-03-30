import { useRef } from 'react'

import Navbar from '../layout/Navbar.tsx'
import Home from './Home'
import About from './About'
import Work from './Work/index.tsx'
import Contact from './Contact'
import Footer from '../layout/Footer.tsx'
import BackToTopButton from '../components/BackToTopButton.tsx'
import { Grid } from '@mui/material'

const AppRoutes = () => {
    const HomeRef = useRef<HTMLDivElement>(null);
    const AboutRef = useRef<HTMLDivElement>(null);
    const WorkRef = useRef<HTMLDivElement>(null);
    const ContactRef = useRef<HTMLDivElement>(null);

    const scrollTo = (ref: any) => {
        const yOffset = -70; // navbar height
        const y =
            ref.current.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    return (
        <Grid
            maxWidth={{
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            }}
            sx={{ margin: 'auto' }}
        >
            <Navbar
                HomeRef={HomeRef}
                AboutRef={AboutRef}
                WorkRef={WorkRef}
                ContactRef={ContactRef}
                onHomeView={() => scrollTo(HomeRef)}
                onAboutView={() => scrollTo(AboutRef)}
                onWorkView={() => scrollTo(WorkRef)}
                onContactView={() => scrollTo(ContactRef)}
            />

            <Home HomeRef={HomeRef} />
            <About AboutRef={AboutRef} />
            <Work WorkRef={WorkRef} />
            <Contact ContactRef={ContactRef} />

            <BackToTopButton />
            <Footer />
        </ Grid>
    );
};

export default AppRoutes;
