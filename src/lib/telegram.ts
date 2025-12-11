// Telegram Bot Integration для отправки заявок
const TELEGRAM_BOT_TOKEN = "8272637888:AAEzggbG8AO-olunSXcc3NgJxiEk_T5J47o";

// Chat ID получателей (можно добавить несколько)
const TELEGRAM_CHAT_IDS = [
  "241367335",   // Разработчик (тест)
  // "337528971", // Полина Кондратьева (временно отключена)
];

interface BookingData {
  name: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
}

export const sendToTelegram = async (data: BookingData): Promise<boolean> => {
  if (TELEGRAM_CHAT_IDS.length === 0) {
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
    // Отправляем во все чаты из списка
    const results = await Promise.all(
      TELEGRAM_CHAT_IDS.map(chatId =>
        fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "HTML",
          }),
        }).then(res => res.json())
      )
    );

    // Проверяем что хотя бы одно сообщение отправлено
    const success = results.some(result => result.ok);
    
    if (!success) {
      console.error("Telegram API errors:", results);
    }

    return success;
  } catch (error) {
    console.error("Ошибка отправки в Telegram:", error);
    return false;
  }
};

