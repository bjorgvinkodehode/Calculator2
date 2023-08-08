import React, { useState, useEffect } from 'react';
import './ThemeSelector.css'; // Add styles specific to the ThemeSelector

function ThemeSelector() {
  const [theme, setTheme] = useState('1');

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function applyTheme(selectedTheme) {
    const link = document.getElementById('theme-link');
    link.href = `${selectedTheme}-theme.css`;
  }

  function handleThemeChange(event) {
    setTheme(event.target.value);
  }

  return (
    <div className="theme-selector">
      <div className="radio-group">
        <label htmlFor="theme1">1</label>
        <input
          type="radio"
          name="theme"
          value="1"
          id="theme1"
          checked={theme === '1'}
          onChange={handleThemeChange}
        />
      </div>

      <div className="radio-group">
        <label htmlFor="theme2">2</label>
        <input
          type="radio"
          name="theme"
          value="2"
          id="theme2"
          checked={theme === '2'}
          onChange={handleThemeChange}
        />
      </div>

      <div className="radio-group">
        <label htmlFor="theme3">3</label>
        <input
          type="radio"
          name="theme"
          value="3"
          id="theme3"
          checked={theme === '3'}
          onChange={handleThemeChange}
        />
      </div>

      <link id="theme-link" rel="style" href="" />
    </div>
  );
}

export default ThemeSelector;