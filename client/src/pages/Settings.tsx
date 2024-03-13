import React from 'react';
import { useSettings } from '../contexts/SettingsContext';
import './Pages.css'

const Settings: React.FC = () => {
  const {
    disappearTime,
    setDisappearTime,
    notificationCount,
    setNotificationCount,
    notificationPosition,
    setNotificationPosition
  } = useSettings();

  return (
    <div className="settings-container">
      <div className="setting-item">
        <label htmlFor="notification-count">Notification count</label>
        <input
          type="number"
          id="notification-count"
          value={notificationCount}
          onChange={(e) => {
            // Remove leading zeros and parse the number
            const inputValue = e.target.value.replace(/^0+/, '') || '0';
            setNotificationCount(inputValue);
          }}
        />
      </div>

      <div className="setting-item">
        <label>Notification position</label>
        <div className="radio-group">
          {['Position 1', 'Position 2', 'Position 3', 'Position 4'].map((pos) => (
            <label key={pos}>
              <input
                type="radio"
                value={pos}
                checked={notificationPosition === pos}
                onChange={(e) => setNotificationPosition(e.target.value)}
              />
              {pos}
            </label>
          ))}
        </div>
      </div>

      <div className="setting-item">
        <label htmlFor="disappear-time">Notification disappear time</label>
        <input
          type="number"
          id="disappear-time"
          value={disappearTime}
          min="0"
          onChange={(e) => {
            // Remove leading zeros and parse the number
            const inputTimeValue = e.target.value.replace(/^0+/, '') || '0';
            setDisappearTime(inputTimeValue);
          }}
        />
        <span>sec</span>
      </div>
    </div>
  );
};

export default Settings;
