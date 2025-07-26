import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
          Next.js App
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/home" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:text-gray-300 transition-colors">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/users" className="hover:text-gray-300 transition-colors">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;