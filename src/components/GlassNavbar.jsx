// GlassNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const defaultItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Showcase', href: '/showcase' },
  { label: 'Connect', href: '/connect' },
];

export default function GlassNavbar({ items = defaultItems, className = '' }) {
  return (
    <nav
      className={`
        flex items-center justify-center
        bg-black bg-opacity-20    
        backdrop-blur-md
        border border-blue-200 border-opacity-10             
        rounded-full
        py-3 px-8                
        ${className}
      `}
    >
      <ul className="flex space-x-6">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className="
                text-sm font-medium
                text-gray-300 hover:text-white
                transition-colors
              "
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
