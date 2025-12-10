// Telegram Bot Integration для отправки заявок
const TELEGRAM_BOT_TOKEN = "8272637888:AAEzggbG8AO-olunSXcc3NgJxiEk_T5J47o";
const TELEGRAM_CHAT_ID = "337528971"; // Полина Кондратьева

interface BookingData {
  name: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
}

export const sendToTelegram = async (data: BookingData): Promise<boolean> => {
  if (!TELEGRAM_CHAT_ID) {
    console.error("Telegram Chat ID не настроен");
    return false;
  }

  const message = `
🏋️ <b>Новая заявка с сайта СК Победа!</b>

👤 <b>Имя:</b> ${data.name}
📞 <b>Телефон:</b> ${data.phone}
📅 <b>Дата:</b> ${data.preferredDate}
⏰ <b>Время:</b> ${data.preferredTime}

📍 <i>Отправлено с сайта pobeda-sport-comfort-ca35914d.vercel.app</i>
  `.trim();

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    const result = await response.json();
    
    if (!result.ok) {
      console.error("Telegram API error:", result);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Ошибка отправки в Telegram:", error);
    return false;
  }
};

