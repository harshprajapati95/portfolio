import React from 'react'
import profile from '../assets/profile.png'
import ProfileCard from './ProfileCard'

const AboutMe = () => {
    const handleContactClick = () => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
            {/* Left: Image + Name */}
            <div className="flex flex-col items-center text-center shrink-0">
                <ProfileCard
                    name="Harsh Prajapati"
                    title="Full-Stack Developer"
                    handle="harshprajapati"
                    status="Online"
                    contactText="Contact Me"
                    avatarUrl={profile}
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={handleContactClick}
                />
            </div>

            {/* Right: Content */}
            <div className="flex-1">
                <h2 className="text-5xl font-bold mb-6 text-white">About Me</h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                    I'm a Computer Science student from Mumbai University passionate about building scalable, 
                    user-centered web applications. With expertise in full-stack development, I combine strong 
                    DSA fundamentals with modern technologies to create efficient and elegant solutions.
                </p>
                
                <div className="space-y-4">
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-2">What I Do</h3>
                        <p className="text-white/70">
                            Design and develop full-stack applications using React, Node.js, and Java with Spring Boot. 
                            I focus on writing clean, maintainable code and optimizing performance.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Contact Info</h3>
                        <ul className="text-white/70 space-y-2">
                            <li>📞 +919511667497</li>
                            <li>💼 <a href="https://github.com/harshprajapati95" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">GitHub</a> | <a href="https://www.linkedin.com/in/harshprajapati95" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
