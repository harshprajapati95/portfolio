import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaTwitter, FaExternalLinkAlt } from 'react-icons/fa'

const Contact = () => {
    const contactMethods = [
        {
            icon: FaPhone,
            label: 'Phone',
            value: '+91 9511667497',
            link: 'tel:+919511667497',
            color: 'text-green-400'
        },
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'hp6173585@gmail.com',
            link: 'mailto:hp6173585@gmail.com',
            color: 'text-red-400'
        },
        {
            icon: FaGithub,
            label: 'GitHub',
            value: 'github.com/harshprajapati95',
            link: 'https://github.com/harshprajapati95',
            color: 'text-gray-400'
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            link: 'http://www.linkedin.com/in/harsh-prajapati-b4880331b',
            color: 'text-blue-400'
        }
    ]

    return (
        <div className="w-full py-16">
            <div className="mb-12">
                <h2 className="text-5xl font-bold mb-4 text-white">Get In Touch</h2>
                <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {contactMethods.map((method, idx) => (
                    <a
                        key={idx}
                        href={method.link}
                        className="group backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-4 hover:border-purple-400/50 transition-all duration-300 hover:bg-white/10"
                    >
                        <div className="flex flex-col items-center text-center gap-3">
                            <div className={`p-3 bg-purple-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                                <method.icon className={`${method.color} text-2xl`} />
                            </div>
                            <h3 className="text-white font-semibold">{method.label}</h3>
                            <p className="text-white/60 text-sm hover:text-white/80 transition-colors duration-300">
                                {method.value}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

            {/* CTA Section */}
            <div className="backdrop-blur-xl bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-3xl p-12 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h3>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <a
                    href="mailto:hp6173585@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                >
                    <FaEnvelope />
                    Send Me an Email
                </a>
            </div>


        </div>
    )
}

export default Contact
