/**
 * This file is used to init the eventSource service to receive notifications from the server side
 */
import { Notification } from '../types';

const SERVER_URL = 'http://localhost:9000/events';

export const createEventSource = (onMessageReceived: (data: Notification) => void): () => void => {
  const eventSource = new EventSource(SERVER_URL);

  eventSource.onmessage = (event) => {
    const data: Notification = JSON.parse(event.data);
    onMessageReceived(data);
  };

  eventSource.onerror = (error: Event | string) => {
    console.error('EventSource failed:', error);
    eventSource.close();
  };

  // Return a cleanup function
  return () => {
    eventSource.close();
  };
};