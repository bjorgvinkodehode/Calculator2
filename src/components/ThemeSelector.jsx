import { useState, useEffect } from 'react';
import './ThemeSelector.css'; 


function ThemeSelector() {
  const [theme, setTheme] = useState("1"); 

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function applyTheme(selectedTheme) {
    const link = document.getElementById('theme-link');
    if (selectedTheme === "1") {
      link.href = "Style.css";  // This should be your default stylesheet
    } else {
      link.href = `${selectedTheme}-theme.css`;  // Make sure these theme files actually exist
    }
  }

 
  function handleThemeChange(event) {
    setTheme(event.target.value);
  }

  return (
    <div className="theme-selector">
      <span className="theme-label">Theme</span>
      <div className="slider-container">
        <div className="slider-numbers">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <input
          type="range"
          min="1"
          max="3"
          value={theme}
          onChange={handleThemeChange}
        />
      </div>
    </div>
  );
}


export default ThemeSelector;
