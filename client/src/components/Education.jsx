import React from 'react'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Education = () => {
    const education = [
        {
            school: 'Mumbai University',
            location: 'Bhandup, Mumbai',
            degree: "Bachelor's Degree in Computer Science",
            period: '2023 - 2026',
            achievements: [
                'Strong foundation in Data Structures & Algorithms',
                'Expertise in DBMS and Operating Systems',
                'Coursework in SDLC and Software Engineering',
                'GPA: 8.5/10'
            ]
        }
    ]

    const achievements = [
        {
            title: 'Hackathon Participation',
            description: 'Participated in Mumbai Hackathon and 3+ competitive hackathons (2023-2026)',
            details: 'Built working software prototypes under strict deadlines'
        },
        {
            title: 'Cross-Functional Collaboration',
            description: 'Collaborated with cross-functional teams',
            details: 'Designed, developed, and presented full-stack solutions'
        }
    ]

    return (
        <div className="w-full">
            <div className="mb-12">
                <h2 className="text-5xl font-bold mb-4 text-white">Education & Achievements</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Education Section */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                    {education.map((edu, idx) => (
                        <div
                            key={idx}
                            className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-purple-500/30 rounded-lg">
                                    <FaGraduationCap className="text-purple-300 text-2xl" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                    <p className="text-purple-300 font-semibold">{edu.school}</p>
                                </div>
                            </div>

                            <div className="space-y-2 mb-4 text-white/70">
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-purple-400" />
                                    <span>{edu.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt className="text-purple-400" />
                                    <span>{edu.period}</span>
                                </div>
                            </div>

                            <div className="bg-white/5 rounded-lg p-4">
                                <h5 className="text-sm font-semibold text-white/60 mb-3 uppercase">Key Achievements</h5>
                                <ul className="space-y-2">
                                    {edu.achievements.map((achievement, aIdx) => (
                                        <li key={aIdx} className="text-white/70 text-sm flex items-start gap-2">
                                            <span className="text-purple-400 mt-1">✓</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Achievements Section */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Achievements & Hackathons</h3>
                    {achievements.map((achievement, idx) => (
                        <div
                            key={idx}
                            className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 hover:border-pink-400/50 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-pink-500/30 rounded-lg flex-shrink-0">
                                    <FaCalendarAlt className="text-pink-300 text-2xl" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                                    <p className="text-white/70 mb-3">{achievement.description}</p>
                                    <div className="pl-3 border-l-2 border-pink-400/50">
                                        <p className="text-white/60 text-sm">{achievement.details}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Additional Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-400/30 rounded-xl p-4 text-center">
                            <p className="text-3xl font-bold text-blue-300 mb-1">3+</p>
                            <p className="text-white/70 text-sm">Hackathons</p>
                        </div>
                        <div className="backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-400/30 rounded-xl p-4 text-center">
                            <p className="text-3xl font-bold text-green-300 mb-1">100+</p>
                            <p className="text-white/70 text-sm">Users Served</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
