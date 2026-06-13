import React, { useRef, useEffect, useState } from 'react'
import { FaExternalLinkAlt, FaGithub, FaJava } from 'react-icons/fa'
import { SiReact, SiNodedotjs, SiPostgresql, SiSpringboot, SiMongodb } from 'react-icons/si'

const Projects = () => {
    const containerRef = useRef(null)
    const scrollContainerRef = useRef(null)
    const [scrollProgress, setScrollProgress] = useState(0)
    const projects = [
        {
            title: 'TrackMint - Finance Management Application',
            description: 'A full-stack personal finance management platform with AI-powered insights. Built interactive dashboards for expense tracking, budgeting, and financial goal management. Optimized and validated API performance, reducing response time by 25%.',
            tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL/Supabase', 'Gemini AI', 'REST APIs'],
            icons: [SiReact, SiNodedotjs, SiPostgresql],
            features: [
                'AI-powered financial insights',
                'Interactive expense tracking dashboards',
                'Budget planning and management',
                'Financial goal setting',
                '25% API response time optimization'
            ],
            link: 'https://trackmint2-main-main-1.onrender.com/',
            github: 'https://github.com/harshprajapati95/trackmint2-main-main'
        },
        {
            title: 'Eduhub - Educational Platform',
            description: 'Developed a full-stack educational platform for accessing and sharing learning resources. Implemented backend APIs for data management and user operations. Integrated PostgreSQL for efficient storage and retrieval. Served 100+ registered users during testing.',
            tech: ['React', 'PostgreSQL', 'REST APIs', 'Express.js'],
            icons: [SiReact, SiPostgresql],
            features: [
                'Resource sharing and access',
                'User management system',
                'Content storage optimization',
                'Served 100+ users successfully',
                'Efficient data retrieval'
            ],
            link: 'https://eduhub-i2fw.onrender.com/',
            github: 'https://github.com/harshprajapati95/Eduhub3'
        },
        {
            title: 'TalentSwap - Skill Exchange Platform',
            description: 'A comprehensive full-stack skill exchange platform using React.js and Java. Built secure authentication and authorization using JWT and Spring Security. Implemented features for skill matching, user profiles, and messaging.',
            tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'JWT', 'React.js', 'REST APIs'],
            icons: [FaJava, SiSpringboot, SiPostgresql, SiReact],
            features: [
                'JWT-based authentication',
                'Spring Security authorization',
                'Skill matching algorithm',
                'User profile management',
                'Real-time messaging',
                'RESTful API design'
            ],
            github: 'https://github.com/harshprajapati95/talent_swap'
        }
    ]

    // Handle vertical scroll to horizontal scroll
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const handleScroll = () => {
            const element = container
            const elementTop = element.offsetTop
            const elementHeight = element.offsetHeight
            const windowHeight = window.innerHeight
            
            // Calculate when the section is in viewport
            const distanceFromTop = window.scrollY + windowHeight - elementTop
            const sectionProgress = distanceFromTop / (elementHeight + windowHeight)
            
            // Clamp between 0 and 1, then apply to horizontal scroll
            const clampedProgress = Math.max(0, Math.min(1, sectionProgress))
            setScrollProgress(clampedProgress)
            
            if (scrollContainerRef.current) {
                const scrollWidth = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
                scrollContainerRef.current.scrollLeft = scrollWidth * clampedProgress
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="w-full" ref={containerRef}>
            <div className="mb-12">
                <h2 className="text-5xl font-bold mb-4 text-white">Featured Projects</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>

            <div 
                ref={scrollContainerRef}
                className="flex gap-8 overflow-x-hidden scroll-smooth pb-4"
                style={{ scrollBehavior: 'smooth' }}
            >
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="group flex-shrink-0 w-full lg:w-[500px] xl:w-[600px] backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                    >
                        <div className="flex flex-col gap-6">
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-white/70 text-lg leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-white/60 mb-3 uppercase">Key Features</h4>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {project.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="text-white/60 text-sm flex items-start gap-2">
                                                <span className="text-purple-400 mt-1">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-400/30 hover:border-purple-400 transition-colors duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.link}
                                        className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                                    >
                                        <FaExternalLinkAlt size={16} />
                                        View Project
                                    </a>
                                    <a
                                        href={project.github}
                                        className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 text-white rounded-lg font-semibold border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300"
                                    >
                                        <FaGithub size={16} />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
