import React, { createContext, useState, useCallback, useContext } from 'react';
import { Toast } from '../components/Toasts/Toast';
import { Notification } from '../types';
import './../components/Toasts/Toast.css'
import { SettingsContext } from './SettingsContext';

interface IToastManagerContext {
  addNotification: (notification: Notification) => void;
  removeNotification: (msg_id: string) => void;
}

export const ToastManagerContext = createContext<IToastManagerContext>({
  addNotification: () => {},
  removeNotification: () => {}
});

export const ToastManagerProvider =  ({children}: {children: React.ReactNode}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { notificationCount, notificationPosition } = useContext(SettingsContext);

  const addNotification = useCallback((notification: Notification) => {
    setNotifications((prevNotifications) => {
      // Add the new notification and respect the max count
      const newNotifications = [...prevNotifications, notification];
      return newNotifications.slice(-Number(notificationCount)); // Keep only the last `notificationCount` items
    });
  }, [Number(notificationCount)]);

  const removeNotification = useCallback((msg_id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.filter(notification => notification.msg_id !== msg_id));
  }, []);

  // Additional CSS class based on position
  const positionClass = `toast-manager-${notificationPosition.replace(' ', '-').toLowerCase()}`;

  return (
    <ToastManagerContext.Provider value={{ addNotification, removeNotification }}>
      <div className={`toast-manager ${positionClass}`}>
        {notifications.map(notification => (
          <Toast
            key={notification.msg_id}
            notification={notification}
            onClose={() => removeNotification(notification.msg_id)}
          />
        ))}
      </div>
      {children}
    </ToastManagerContext.Provider>
  );
};