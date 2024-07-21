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

        // Проверяем состояние готовности
        const checkWebAppReady = () => {
          if (webApp.ready()) {
            // Если Web App инициализирован, разверните его
            webApp.expand();
            setIsTelegramInitialized(true);
          } else {
            // Если не инициализирован, попробуйте снова через небольшую задержку
            setTimeout(checkWebAppReady, 500); // Проверка каждые 500ms
          }
        };

        // Запуск проверки готовности Web App
        checkWebAppReady();
      }
    };

    // Запуск инициализации
    initializeTelegram();
  }, [setUserId]);

  return null;
};

export default TelegramWebApp;
