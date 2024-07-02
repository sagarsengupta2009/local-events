import { useState, useContext } from 'react';
import ColorContext from '../../context/ColorContext';
import '../css/ToggleButton.css';

export default function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);
  const { selectColorTheme } = useContext(ColorContext);

  const handleChange = () => {
    setIsToggled(!isToggled);
    selectColorTheme(!isToggled);
  };

  return (
    <button onClick={handleChange} className={`toggle-button ${isToggled ? 'on' : 'off'}`}>
      {isToggled ? 'Dark' : 'Light'}
    </button>
  );
}