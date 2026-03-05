import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
      <div className="border-t border-slate-700 pt-4">
        <p className="text-slate-400 text-sm">
          View and copy code snippets with one click
        </p>
      </div>
    </div>
  );
};

export default Header;