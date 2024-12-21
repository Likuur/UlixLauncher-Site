import React, { useEffect } from 'react';

const SnowEffect = () => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snow';
      snowflake.style.left = Math.random() * window.innerWidth + 'px';
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
      snowflake.style.opacity = Math.random() * 0.6 + 0.4 + '';
      document.body.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    };

    const isWinter = () => {
      const month = new Date().getMonth();
      return month === 11 || month === 0 || month === 1; // December, January, February
    };

    let interval: NodeJS.Timeout;
    if (isWinter()) {
      interval = setInterval(createSnowflake, 200);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return null;
};

export default SnowEffect;