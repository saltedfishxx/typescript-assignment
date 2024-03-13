import React, { useEffect, useContext } from 'react';
import { createEventSource } from './util/sseService';
import { ToastManagerProvider, ToastManagerContext } from './contexts/ToastManagerContext';
import { Notification } from './types';
import { HashRouter  as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Main from './pages/Main';
import Settings from './pages/Settings';
import './App.css';
import EventSourceListener from './util/EventSourceListener';
import { SettingsProvider } from './contexts/SettingsContext';

const App: React.FC = () => {
  const { addNotification } = useContext(ToastManagerContext);

  useEffect(() => {
    const handleNewMessage = (notification: Notification) => {
      addNotification(notification);
    };

    const closeEventSource = createEventSource(handleNewMessage);

    return closeEventSource;
  }, [addNotification]);

  return (
    <SettingsProvider>
    <ToastManagerProvider>
    <Router>
      <MenuBar />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </Router>
    <EventSourceListener/>
    </ToastManagerProvider>
    </SettingsProvider>
  );
};

export default App;
