import React from 'react';
import GithubIcon from '../../assets/github.svg?react';
import { useAppContext } from '../../context/AppContext';

const Header: React.FC = () => {
  const { darkMode: isDarkMode, toggleDarkMode } = useAppContext();

  return (
    <header className="rw-header">
      <div>
        <h1 className="rw-title">SkyCast</h1>

        <p className="rw-subtitle">
          Modern weather forecasts in real time
        </p>
      </div>

      <div className="rw-header-icons">
        <button
          className="rw-dark-mode-button"
          type="button"
          aria-label="Toggle dark mode"
          aria-pressed={isDarkMode}
          onClick={toggleDarkMode}
        >
          <span className="rw-dark-mode-thumb" />
        </button>

        <a
          className="rw-github-link"
          href="https://github.com/meow-1010/weather-app-roshan"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
      </div>
    </header>
  );
};

export default Header;