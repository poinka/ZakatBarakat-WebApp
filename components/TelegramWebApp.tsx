'use client'
import { useEffect, useState } from 'react';

interface TelegramWebAppProps {
  setUserId: (id: number) => void;
}

const TelegramWebApp: React.FC<TelegramWebAppProps> = ({ setUserId }) => {
  const [isTelegramInitialized, setIsTelegramInitialized] = useState(false);

  useEffect(() => {
    const checkTelegram = () => {
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

        // Установить Web App в полноэкранный режим
        webApp.expand();
        setIsTelegramInitialized(true);
      }
    };

    // Проверка наличия Telegram Web App каждые 500ms до инициализации
    const intervalId = setInterval(() => {
      if (!isTelegramInitialized) {
        checkTelegram();
      } else {
        clearInterval(intervalId);
      }
    }, 500);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, [isTelegramInitialized, setUserId]);

  return null;
};

export default TelegramWebApp;
