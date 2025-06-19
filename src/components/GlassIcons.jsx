import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const GlassIcons = () => {
  const items = [
    {
      icon: <FaGithub />,
      link: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin />,
      link: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
    {
      icon: <HiOutlineMail />,
      link: 'mailto:your@email.com',
      label: 'Email',
    },
  ];

  return (
    <div className="flex gap-6 mt-8">
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="w-14 h-14 flex items-center justify-center rounded-xl
                     bg-white/10 backdrop-blur-md text-white text-xl
                    
                     hover:bg-white/20
                     transition-all duration-300"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default GlassIcons;
