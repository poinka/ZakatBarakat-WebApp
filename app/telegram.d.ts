interface TelegramWebAppUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}

interface TelegramWebApp {
  initDataUnsafe: {
    user?: TelegramWebAppUser;
    [key: string]: any;
  };
  expand(): void;
  onEvent(event: string, callback: (data: any) => void): void;
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}