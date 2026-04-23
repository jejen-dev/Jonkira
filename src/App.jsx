import './App.css';
import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoStrip from './components/PromoStrip';
import ChefsSpecial from './components/ChefsSpecial';
import Testimonials from './components/Testimonials';
import Menu from './components/Menu';
import About from './components/About';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
    // Scroll reveal observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Active nav link on scroll
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        navLinks.forEach(link => link.classList.remove('active'));
                        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                        if (active) active.classList.add('active');
                    }
                });
            },
            { threshold: 0.35 }
        );
        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <ThemeProvider>
            <Topbar />
            <Navbar />
            <Hero />
            <PromoStrip />
            <ChefsSpecial />
            <Testimonials />
            <Menu />
            <About />
            <Gallery />
            <Reservation />
            <Contact />
            <Footer />
            <FloatingWhatsApp />
        </ThemeProvider>
    );
}

export default App;