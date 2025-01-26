import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, Rocket } from 'lucide-react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Rocket Cursor */}
      <div
        className="rocket-cursor"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: `translate(-50%, -50%) rotate(45deg)`,
        }}
      >
        <Rocket className="w-6 h-6 text-violet-400" />
        <div className="rocket-trail"></div>
        <div className="rocket-particle particle-1"></div>
        <div className="rocket-particle particle-2"></div>
        <div className="rocket-particle particle-3"></div>
      </div>

      <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <img 
            src="/profile.jpg"
            alt="Anmol Malhotra"
            className="w-48 h-48 rounded-full border-4 border-violet-500 shadow-lg object-cover"
          />
        </div>

        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Anmol Malhotra
          </span>
        </h1>
        <h2 className="text-2xl text-gray-300 mb-8">Computer Vision Lead Engineer</h2>
        <p className="max-w-2xl text-gray-400 mb-8">
          Specialized in ML & Vision with expertise in OpenCV, PyTorch, TensorFlow, and various AI technologies.
          Currently leading vision pipeline development at Sylvester AI.
        </p>
        
        <div className="flex space-x-6">
          <SocialLink href="https://www.linkedin.com/in/anmol-1810rs/" icon={<Linkedin />} label="LinkedIn" />
          <SocialLink href="https://github.com/anmol1810rs" icon={<Github />} label="GitHub" />
          <SocialLink href="mailto:96anmolmalhotra@gmail.com" icon={<Mail />} label="Email" />
          <SocialLink href="tel:+12368633364" icon={<Phone />} label="Phone" />
        </div>
      </div>
    </>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all"
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default Hero;