import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Notification } from '../../types';
import { useSettings } from '../../contexts/SettingsContext';
import './Toast.css';

/**
  * This file is a component represeting a Toast. It receives two props: notification 
  * (containing the message to display) and onClose (a callback function to close the toast).
  * Also timeout automatically unless hovered on which resets the timeout.
  */

interface ToastProps {
  notification: Notification;
  onClose: () => void;
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(({ notification, onClose }, ref) => {
  const { disappearTime } = useSettings(); 
  const onCloseRef = useRef(onClose); 
  onCloseRef.current = onClose; 
  const [isHovered, setIsHovered] = useState(false); 

  useEffect(() => {
    // Function to handle the close action
    const handleAutoClose = () => {
      if (!isHovered) {
        onCloseRef.current();
      }
    };

    // Start the auto-close timeout if not hovered
    if (!isHovered) {
      const timerId = setTimeout(handleAutoClose, Number(disappearTime) * 1000);

      // Cleanup function to clear the timeout
      return () => clearTimeout(timerId);
    }
  }, [isHovered, disappearTime]);

  // Mouse enter and leave handlers to pause/resume the auto-close timeout
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div ref={ref} id={notification.msg_id} key={notification.msg_id} className="toast" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p>{notification.msg}</p>
      <button onClick={() => onCloseRef.current()}>&times;</button>
    </div>
  );
});
