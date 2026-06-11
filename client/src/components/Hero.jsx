import React from 'react';
import { FaGithub, FaCode, FaLinkedin, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import CodeTypewriter from './CodeTypewriter';

const Hero = () => {
    const floatingIcons = [
        { Icon: FaGithub, delay: '0s', position: 'top-20 left-10' },
        { Icon: FaCode, delay: '0.5s', position: 'top-40 right-20' },
        { Icon: FaLinkedin, delay: '1s', position: 'bottom-40 left-20' },
        { Icon: FaReact, delay: '1.5s', position: 'top-60 right-40' },
        { Icon: FaNodeJs, delay: '2s', position: 'bottom-60 right-10' },
        { Icon: SiJavascript, delay: '2.5s', position: 'top-80 left-40' },
        { Icon: SiTailwindcss, delay: '3s', position: 'bottom-20 right-60' },
    ];

    return (
        <div id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse" />

            {/* Floating particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>

            {/* Floating tech icons */}
            {floatingIcons.map(({ Icon, delay, position }, index) => (
                <div
                    key={index}
                    className={`absolute ${position} text-white/30 animate-float-slow hover:text-white/80 hover:scale-125 transition-all duration-300 cursor-pointer`}
                    style={{
                        animationDelay: delay,
                    }}
                >
                    <Icon size={50} />
                </div>
            ))}

            {/* Hero content */}
            <div className="relative z-10 flex items-center justify-center h-screen px-6">
                <div className="text-center max-w-4xl">
                    {/* Glass card container */}
                    <div className="pt-20 p-12  animate-fade-in-up">
                        {/* Main heading with gradient */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                                Welcome to My Portfolio
                            </span>
                        </h1>
                    </div>
                    <CodeTypewriter />
                </div>
                
            </div>
        </div>
    );
};

export default Hero;
