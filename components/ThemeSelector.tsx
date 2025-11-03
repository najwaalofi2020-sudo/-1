
import React from 'react';

interface Theme {
    id: string;
    title: string;
    icon: React.FC<{className?: string}>;
}

interface ThemeSelectorProps {
  onSelectTheme: (themeTitle: string) => void;
  themes: Theme[];
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onSelectTheme, themes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 animate-fade-in">
      {themes.map((theme) => (
        <button
          key={theme.id}
          onClick={() => onSelectTheme(theme.title)}
          className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg hover:bg-red-50 border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 text-right flex items-center"
        >
          <div className="bg-red-100 text-red-700 p-3 rounded-lg ml-4">
            <theme.icon className="w-8 h-8"/>
          </div>
          <span className="font-semibold text-gray-700">{theme.title}</span>
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;
