import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Шапка */}
      <header className="bg-fitness-secondary py-6 border-b-2 border-primary/30">
        <div className="container mx-auto px-4 sm:px-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Вернуться на главную</span>
          </Link>
        </div>
      </header>

      {/* Контент */}
      <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Политика конфиденциальности
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground/70">
              Дата последнего обновления: 08 декабря 2025 года
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Общие положения</h2>
              <p>
                Настоящая Политика конфиденциальности персональных данных (далее – Политика) действует 
                в отношении всей информации, которую Спортивный клуб «Победа» (далее – Оператор) может 
                получить о посетителях веб-сайта sk-pobeda.ru (далее – Сайт).
              </p>
              <p>
                Использование Сайта означает безоговорочное согласие Пользователя с настоящей Политикой 
                и указанными в ней условиями обработки его персональных данных. В случае несогласия с 
                этими условиями Пользователь должен воздержаться от использования Сайта.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Персональные данные</h2>
              <p>
                Под персональными данными понимается любая информация, относящаяся к прямо или косвенно 
                определённому или определяемому физическому лицу (субъекту персональных данных).
              </p>
              <p>К персональным данным, обрабатываемым Оператором, относятся:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Фамилия, имя, отчество</li>
                <li>Номер телефона</li>
                <li>Адрес электронной почты</li>
                <li>Данные о посещении сайта (cookies, IP-адрес, данные браузера)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Цели обработки персональных данных</h2>
              <p>Оператор обрабатывает персональные данные в следующих целях:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Предоставление доступа к функционалу Сайта</li>
                <li>Обработка заявок на запись на тренировки</li>
                <li>Связь с Пользователем по вопросам предоставления услуг</li>
                <li>Направление информационных и рекламных материалов (с согласия Пользователя)</li>
                <li>Улучшение качества работы Сайта и его содержимого</li>
                <li>Проведение статистических и маркетинговых исследований</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Правовые основания обработки</h2>
              <p>
                Обработка персональных данных осуществляется на основании:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных»</li>
                <li>Согласия субъекта персональных данных на обработку его персональных данных</li>
                <li>Договора, стороной которого является субъект персональных данных</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Порядок сбора и хранения персональных данных</h2>
              <p>
                Сбор персональных данных осуществляется следующими способами:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Заполнение форм на Сайте</li>
                <li>Автоматический сбор информации при посещении Сайта (cookies)</li>
              </ul>
              <p>
                Персональные данные хранятся в защищённом виде и не передаются третьим лицам, 
                за исключением случаев, предусмотренных законодательством Российской Федерации.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Использование файлов cookie</h2>
              <p>
                Сайт использует файлы cookie для обеспечения корректной работы и улучшения 
                пользовательского опыта. Файлы cookie — это небольшие текстовые файлы, 
                которые сохраняются на устройстве Пользователя.
              </p>
              <p>Мы используем следующие типы cookie:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Необходимые cookie</strong> — обеспечивают работу основных функций сайта</li>
                <li><strong>Аналитические cookie</strong> — помогают понять, как посетители взаимодействуют с сайтом</li>
                <li><strong>Функциональные cookie</strong> — запоминают предпочтения пользователя</li>
              </ul>
              <p>
                Пользователь может отключить использование cookie в настройках браузера, 
                однако это может повлиять на функциональность Сайта.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Права пользователя</h2>
              <p>Пользователь имеет право:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Получать информацию об обработке своих персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>Обжаловать действия Оператора в уполномоченный орган по защите прав субъектов персональных данных</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">8. Меры по защите персональных данных</h2>
              <p>
                Оператор принимает необходимые и достаточные организационные и технические меры 
                для защиты персональных данных от неправомерного или случайного доступа, 
                уничтожения, изменения, блокирования, копирования, распространения, а также 
                от иных неправомерных действий третьих лиц.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">9. Контактная информация</h2>
              <p>
                По всем вопросам, связанным с обработкой персональных данных, вы можете 
                обратиться к нам:
              </p>
              <ul className="list-none space-y-2">
                <li><strong>Адрес:</strong> г. Калуга, ул. Кибальчича, д. 32</li>
                <li><strong>Телефон:</strong> <a href="tel:+79105298282" className="text-primary hover:underline">+7 910 529 82 82</a></li>
                <li><strong>Email:</strong> <a href="mailto:pobedanakube@gmail.com" className="text-primary hover:underline">pobedanakube@gmail.com</a></li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">10. Изменение Политики</h2>
              <p>
                Оператор оставляет за собой право вносить изменения в настоящую Политику. 
                Новая редакция Политики вступает в силу с момента её размещения на Сайте, 
                если иное не предусмотрено новой редакцией Политики.
              </p>
            </section>
          </div>

          {/* Кнопка возврата */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <ArrowLeft size={20} />
              Вернуться на главную
            </Link>
          </div>
        </div>
      </main>

      {/* Футер */}
      <footer className="bg-secondary text-secondary-foreground py-6">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © 2025 СК Победа. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;


