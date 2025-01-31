/**
 * This file is used to init an EventSource API to create a connection with 
 * the server to receive real-time messages.
 */
import React, { useContext, useEffect } from 'react';
import { ToastManagerContext } from '../contexts/ToastManagerContext';
import { createEventSource } from './sseService';

const EventSourceListener: React.FC = () => {
  const { addNotification } = useContext(ToastManagerContext);

  useEffect(() => {
    // Pass the callback to handle the received message
    const closeEventSource = createEventSource((notification) => {
      addNotification(notification);
    });

    return closeEventSource;
  }, [addNotification]);

  return null;
};

export default EventSourceListener;
