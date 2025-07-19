import React, { useEffect, useState } from 'react';
import './Toast.css';

const Toast = ({ message, type, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const toastClass = `toast ${type} ${visible ? 'show' : 'hide'}`;

  return (
    <div className={toastClass}>
      {message}
    </div>
  );
};

export default Toast;
