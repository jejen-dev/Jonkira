import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
    const refs = useRef([]);

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

        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return refs;
};