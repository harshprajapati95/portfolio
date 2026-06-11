import React, { useState, useEffect } from 'react';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const navItems = [
            'home', 'about', 'skills', 'projects', 'education', 'contact'
        ];

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach(itemId => {
            const element = document.getElementById(itemId);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            navItems.forEach(itemId => {
                const element = document.getElementById(itemId);
                if (element) {
                    observer.unobserve(element);
                }
            });
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Me' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'py-4'
                    : 'py-6'
                }`}
        >
            <div className="flex justify-center px-6">
                <div
                    className={`relative backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-3 shadow-2xl transition-all duration-500 ${scrolled ? 'shadow-lg' : 'shadow-xl'
                        }`}
                    style={{
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    }}
                >
                    {/* Gradient overlay for extra depth */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 pointer-events-none" />

                    <div className="relative">
                        {/* Navigation Items */}
                        <ul className="flex items-center space-x-1">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className={`relative px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm ${activeSection === item.id
                                                ? 'text-white'
                                                : 'text-white/70 hover:text-white'
                                            }`}
                                    >
                                        {/* Active indicator */}
                                        {activeSection === item.id && (
                                            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-full backdrop-blur-sm border border-white/30 animate-pulse" />
                                        )}
                                        <span className="relative z-10">{item.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
