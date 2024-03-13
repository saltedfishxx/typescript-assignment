import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Notification } from '../../types';
import { useSettings } from '../../contexts/SettingsContext';
import './Toast.css';

interface ToastProps {
  notification: Notification;
  onClose: () => void;
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(({ notification, onClose }, ref) => {
  const { disappearTime } = useSettings(); // Assuming useSettings provides disappearTime
  const onCloseRef = useRef(onClose); // Ref to keep a stable reference to onClose
  onCloseRef.current = onClose; // Update the current property to the latest onClose each render
  const [isHovered, setIsHovered] = useState(false); // State to track hover

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