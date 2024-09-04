"use client"

import React, { useEffect } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState(null);
  const [fontSize, setFontSize] = React.useState('normal');
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('text-base', 'text-lg', 'text-xl');
    root.classList.add(
      fontSize === 'normal' ? 'text-base' : 
      fontSize === 'large' ? 'text-lg' : 
      'text-xl'
    );
  }, [fontSize]);

  const menuItems = [
    { label: "Delphos", href: "/chat" },
    { label: "Principal", href: "#",},
    { label: "Contexto", href: "/"      
      ,submenu: [
      { label: "Responsables", href: "/" },
    ] },
    { label: "Gestión", href: "/",
      submenu:[
        {label:"Objetos",href: "/"},
        {label:"Indicadores",href: "/"},
        {label:"Planes de Acción",href: "/"},
        {label:"Presupuestos",href: "/"},
        {label:"Maestro de Detalles",href: "/"},
      ]
    },
    { label: "Propuesto",href: "/" },
    { label: "Visualización",href: "/" },
    { label: "Consulta",href: "/" },



  ];
  const toggleSubmenu = (label) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  const changeFontSize = (size) => {
    setFontSize(size);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--font-size-multiplier', 
      fontSize === 'normal' ? '1' : 
      fontSize === 'large' ? '1.2' : 
      '1.4'
    );
  }, [fontSize]);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed top-4 left-4 z-50 text-white text-2xl  p-2 rounded"
      >
        ☰
      </button>
      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-200 ease-in-out 
      bg-zinc-900 w-64 z-40  rounded-tr-3xl overflow-y-auto`}>
        <nav className="p-5">
          <Link href="/" className="block py-2 text-white text-xl font-bold mb-4 mt-10"></Link>
          {menuItems.map((item, index) => (
            <div key={index}>
              <div 
                className="flex items-center justify-between py-2 text-white cursor-pointer" 
                onClick={() => item.submenu && toggleSubmenu(item.label)}
              >
                {item.href !== "#" ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {item.submenu && (
                  <span>{openSubmenu === item.label ? '▲' : '▼'}</span>
                )}
              </div>
              {item.submenu && openSubmenu === item.label && (
                <div className="pl-4">
                  {item.submenu.map((subItem, subIndex) => (
                    <Link 
                      key={subIndex} 
                      href={subItem.href} 
                      className="block py-2 text-white hover:text-orange-500"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="p-5 border-t border-gray-700 mt-10">
          <div className="flex justify-around">
              <button 
              onClick={() => changeFontSize('normal')}
              className={`px-3 py-1 text-white border border-white rounded hover:bg-gray-800 focus:outline-none  ${fontSize === 'normal' ? 'bg-gray-700' : ''}`}>
              <span className="sr-only">Tamaño de texto normal</span>
              A
            </button>

            <button 
              onClick={() => changeFontSize('large')}
              className={`px-3 py-1 text-white border border-white rounded hover:bg-gray-800 focus:outline-none  ${fontSize === 'large' ? 'bg-gray-700' : ''}`}>
              <span className="sr-only">Tamaño de texto grande</span>
              <span className="text-lg">A</span>
            </button>

            <button 
              onClick={() => changeFontSize('extra-large')}
              className={`px-3 py-1 text-white border border-white rounded hover:bg-gray-800 focus:outline-none  ${fontSize === 'extra-large' ? 'bg-gray-700' : ''}`}
            >
              <span className="sr-only">Tamaño de texto extra grande</span>
              <span className="text-xl">A</span>
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;