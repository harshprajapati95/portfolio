import React from 'react'
import { FaJava, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiPostgresql, SiMongodb, SiSpringboot } from 'react-icons/si'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: [
                { name: 'Java', icon: FaJava, color: 'text-orange-500' },
                { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
                { name: 'SQL', icon: FaDatabase, color: 'text-blue-400' },
            ]
        },
        {
            title: 'Frontend',
            skills: [
                { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
                { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
                { name: 'Tailwind CSS', icon: null, color: 'text-cyan-300' },
            ]
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
                { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
                { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-400' },
            ]
        },
        {
            title: 'Database',
            skills: [
                { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500' },
                { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
                { name: 'MySQL', icon: FaDatabase, color: 'text-blue-600' },
            ]
        },
        {
            title: 'Tools & DevOps',
            skills: [
                { name: 'Git/GitHub', icon: FaGitAlt, color: 'text-red-500' },
                { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
                { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
            ]
        },
        {
            title: 'Core Concepts',
            skills: [
                { name: 'Data Structures & Algorithms', icon: null, color: 'text-purple-400' },
                { name: 'DBMS', icon: null, color: 'text-blue-300' },
                { name: 'REST APIs', icon: null, color: 'text-green-300' },
            ]
        }
    ]

    return (
        <div className="w-full">
            <div className="mb-12">
                <h2 className="text-5xl font-bold mb-4 text-white">Technical Skills</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, idx) => (
                    <div 
                        key={idx}
                        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300"
                    >
                        <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
                        <div className="space-y-4">
                            {category.skills.map((skill, skillIdx) => (
                                <div 
                                    key={skillIdx}
                                    className="flex items-center gap-3 group cursor-pointer"
                                >
                                    {skill.icon ? (
                                        <skill.icon className={`text-2xl ${skill.color} group-hover:scale-125 transition-transform duration-300`} />
                                    ) : (
                                        <div className={`w-6 h-6 rounded-full ${skill.color}`}></div>
                                    )}
                                    <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
