import React, { useState } from 'react';
import {
  Menu,
  X,
  Home,
  Eye,
  Heart,
  Tag,
  Droplet,
  Users,
  HelpCircle,
  MessageCircle
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const sections = [
  { id: 'utama',      label: 'Utama',               icon: <Home size={18} /> },
  { id: 'gejala',     label: 'Kenali Tanda Resdung', icon: <Eye size={18} /> },
  { id: 'rahsia',     label: 'Fungsi Viemis',        icon: <Heart size={18} /> },
  { id: 'pakej',      label: 'Pakej & Harga',        icon: <Tag size={18} /> },
  { id: 'cara-guna',  label: 'Cara Guna',            icon: <Droplet size={18} /> },
  { id: 'testimoni',  label: 'Testimoni Pengguna',   icon: <Users size={18} /> },
  { id: 'faq',        label: 'Soalan Lazim',         icon: <HelpCircle size={18} /> },
  { id: 'hubungi-kami', label: 'Hubungi Kami',       icon: <MessageCircle size={18} /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(open => !open);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-orange-600 to-black text-white font-poppins">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
          {/* Brand */}
          <a href="#utama" className="text-2xl uppercase font-bold">VIEMIS</a>
          {/* Links */}
          <ul className="flex space-x-8 text-sm">
            {sections.map(s => (
              <li key={s.id} className="hover:text-orange-300 transition">
                <a href={`#${s.id}`} className="capitalize">{s.label}</a>
              </li>
            ))}
          </ul>
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="https://www.tiktok.com/@viemis" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300">
              <FaTiktok size={20} />
            </a>
            <a href="https://www.facebook.com/viemis" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com/viemis" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed inset-x-0 top-0 z-50 p-4 flex justify-end">
        <button onClick={toggleSidebar} className="text-gray-800">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleSidebar} />}

      {/* Mobile Sidebar */}
      <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-orange-600 to-black text-white transform transition-transform duration-300 z-50 flex flex-col`}>
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/30">
          <a href="#utama" className="text-2xl uppercase font-bold">VIEMIS</a>
          <button onClick={toggleSidebar}><X size={24} /></button>
        </div>
        <ul className="flex-1 mt-4 px-4 space-y-4 overflow-y-auto">
          {sections.map(s => (
            <li key={s.id} className="flex items-center space-x-2 hover:text-orange-300 transition">
              {s.icon}
              <a href={`#${s.id}`} onClick={toggleSidebar} className="capitalize">{s.label}</a>
            </li>
          ))}
        </ul>
        <hr className="border-white/30 mx-4 my-2" />
        <div className="px-4 py-4 flex justify-center space-x-4">
          <a href="https://www.tiktok.com/@viemis" target="_blank" rel="noopener noreferrer"><FaTiktok size={20} /></a>
          <a href="https://www.facebook.com/viemis" target="_blank" rel="noopener noreferrer"><FaFacebookF size={20} /></a>
          <a href="https://www.instagram.com/viemis" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
        </div>
      </aside>
    </>
  );
}
