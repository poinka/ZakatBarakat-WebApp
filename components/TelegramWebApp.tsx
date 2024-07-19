'use client';
import { useEffect, useState } from 'react';

interface TelegramWebAppProps {
  setUserId: (id: number) => void;
}

const TelegramWebApp: React.FC<TelegramWebAppProps> = ({ setUserId }) => {
  const [isTelegramInitialized, setIsTelegramInitialized] = useState(false);

  useEffect(() => {
    const initializeTelegram = () => {
      if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
        const webApp = window.Telegram.WebApp;
        const initDataUnsafe = webApp.initDataUnsafe;

        if (initDataUnsafe.user) {
          const userId = initDataUnsafe.user.id;
          setUserId(userId);

          // Отправка userId на сервер
          fetch('/api/saveUserId', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }),
          });
        }

        // Установить Web App в полноэкранный режим после небольшой задержки
        const timeoutId = setTimeout(() => {
          webApp.expand();
          setIsTelegramInitialized(true);
        }, 1000); // Задержка в 1000ms, при необходимости можно увеличить или уменьшить

        // Очистка таймера при размонтировании компонента
        return () => clearTimeout(timeoutId);
      }
    };

    // Запуск инициализации
    initializeTelegram();
  }, [setUserId]);

  return null;
};

export default TelegramWebApp;
