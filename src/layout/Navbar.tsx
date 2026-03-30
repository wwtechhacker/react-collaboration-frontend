import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ThemeSwitch from '../components/ThemeSwitch';
import { Typography } from '@mui/material';

const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    backdropFilter: 'blur(16px)',
    background: 'rgba(255,255,255,0.6)',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    padding: '8px 16px',
}));

const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'How We Work', id: 'work' },
    { label: 'Contact', id: 'contact' },
];

const Navbar = ({
    HomeRef,
    AboutRef,
    WorkRef,
    ContactRef,
    onHomeView,
    onAboutView,
    onWorkView,
    onContactView,
}: any) => {
    const [active, setActive] = useState('home');

    const containerRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const underlineRef = useRef<HTMLSpanElement | null>(null);

    const actions = {
        home: onHomeView,
        about: onAboutView,
        work: onWorkView,
        contact: onContactView,
    };

    // Move underline
    const moveUnderline = (index: number) => {
        const el = itemRefs.current[index];
        const container = containerRef.current;
        const underline = underlineRef.current;

        if (el && container && underline) {
            const elRect = el.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            const left = elRect.left - containerRect.left;
            const width = elRect.width;

            underline.style.transform = `translateX(${left}px)`;
            underline.style.width = `${width}px`;
        }
    };

    const getSection = (id: string) => {
        let section;
        if (id === 'home') section = HomeRef;
        else if (id === 'about') section = AboutRef;
        else if (id === 'work') section = WorkRef;
        else if (id === 'contact') section = ContactRef;
        return section;
    }

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            let current = 0;

            navItems.forEach((item, index) => {
                const section = getSection(item.id);
                if (section) {
                    const offset = section.current.getBoundingClientRect().top +
                        window.pageYOffset - 70;
                    if (window.scrollY >= offset) {
                        current = index;
                    }
                }
            });

            setActive(navItems[current].id);
            moveUnderline(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Initial position
    useEffect(() => {
        moveUnderline(0);
    }, []);

    // Handle click
    const handleClick = (index: number, id: string) => {
        setActive(id);
        moveUnderline(index);

        const section = getSection(id);
        if (section) {
            window.scrollTo({
                top: section.current.getBoundingClientRect().top +
                    window.pageYOffset - 70,
                behavior: 'smooth',
            });
        }
    };

    return (
        <AppBar position="fixed" elevation={0} sx={{ background: 'transparent' }}>
            <Box sx={{ px: { xs: 2, md: 6 } }}>
                <StyledToolbar>

                    {/* Logo */}
                    <Box>
                        <Typography sx={{ fontSize:'1.2em', fontWeight: 'bold', color: 'black' }}>James Farnsworth</Typography>
                    </Box>

                    {/* Menu Container */}
                    <Box
                        ref={containerRef}
                        sx={{
                            position: 'relative',
                            display: { xs: 'none', md: 'flex' },
                            gap: 3,
                        }}
                    >
                        {navItems.map((item, index) => (
                            <Button
                                key={item.id}
                                ref={(el) => (itemRefs.current[index] = el)}
                                onClick={() => handleClick(index, item.id)}
                                sx={{
                                    color: active === item.id ? 'primary.main' : 'text.primary',
                                    fontWeight: 500,
                                    textTransform: 'none',
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}

                        <ThemeSwitch sx={{ ml: 1 }} defaultChecked />

                        {/* Sliding underline */}
                        <Box
                            ref={underlineRef}
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                height: '2px',
                                backgroundColor: 'primary.main',
                                transition: 'all 0.3s ease',
                                borderRadius: '2px',
                            }}
                        />
                    </Box>

                    {/* Mobile Menu Placeholder */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <Button
                            sx={{ color: 'black' }}
                            onClick={() => handleClick(0, 'home')}
                        >Menu</Button>
                    </Box>
                </StyledToolbar>
            </Box>
        </AppBar>
    );
};

export default Navbar;