import React, { createContext, useState, useContext } from 'react';

interface SettingsContextType {
  disappearTime: string;
  setDisappearTime: (time: string) => void;
  notificationCount: string; 
  setNotificationCount: (count: string) => void; 
  notificationPosition: string; 
  setNotificationPosition: (position: string) => void; 
}

const defaultSettings: SettingsContextType = {
  disappearTime: '5',
  setDisappearTime: () => {},
  notificationCount: '5', // Assuming a default value
  setNotificationCount: () => {},
  notificationPosition: 'Position 2', // Assuming a default value
  setNotificationPosition: () => {},
};


export const SettingsContext = createContext<SettingsContextType>(defaultSettings);

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider =  ({ children }: { children: React.ReactNode }) => {
  const [disappearTime, setDisappearTime] = useState<string>(defaultSettings.disappearTime);
  const [notificationCount, setNotificationCount] = useState<string>(defaultSettings.notificationCount);
  const [notificationPosition, setNotificationPosition] = useState<string>(defaultSettings.notificationPosition);

  return (
    <SettingsContext.Provider value={{ 
      disappearTime, 
      setDisappearTime, 
      notificationCount, 
      setNotificationCount,
      notificationPosition,
      setNotificationPosition
    }}>
      {children}
    </SettingsContext.Provider>
  );
};

