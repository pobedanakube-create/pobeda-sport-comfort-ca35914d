import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
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
            Пользовательское соглашение
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-sm text-muted-foreground/70">
              Дата последнего обновления: 11 декабря 2025 года
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Общие положения</h2>
              <p>
                Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения 
                между Спортивным клубом «Победа» (далее — Клуб, Администрация) и пользователем 
                сети Интернет (далее — Пользователь), возникающие при использовании веб-сайта 
                sk-pobeda.ru (далее — Сайт) и услуг Клуба.
              </p>
              <p>
                Использование Сайта и/или услуг Клуба означает полное и безоговорочное принятие 
                Пользователем условий настоящего Соглашения. В случае несогласия с условиями 
                Соглашения Пользователь должен прекратить использование Сайта.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Предмет соглашения</h2>
              <p>
                Администрация предоставляет Пользователю доступ к информации о Клубе, 
                его услугах, расписании занятий, а также возможность:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Просматривать информацию об услугах и ценах Клуба</li>
                <li>Отправлять заявки на запись на тренировки</li>
                <li>Связываться с администрацией Клуба через форму обратной связи</li>
                <li>Получать информацию об акциях и специальных предложениях</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Права и обязанности сторон</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-4">3.1. Администрация обязуется:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Обеспечивать работоспособность Сайта</li>
                <li>Предоставлять актуальную информацию об услугах Клуба</li>
                <li>Рассматривать заявки Пользователей в разумные сроки</li>
                <li>Обеспечивать конфиденциальность персональных данных Пользователей</li>
                <li>Оказывать услуги надлежащего качества в соответствии с правилами Клуба</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4">3.2. Администрация имеет право:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Вносить изменения в работу Сайта без предварительного уведомления</li>
                <li>Приостанавливать работу Сайта для проведения технических работ</li>
                <li>Отказать в предоставлении услуг при нарушении Пользователем условий Соглашения</li>
                <li>Изменять стоимость и перечень предоставляемых услуг</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4">3.3. Пользователь обязуется:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Соблюдать условия настоящего Соглашения</li>
                <li>Предоставлять достоверную информацию при заполнении форм на Сайте</li>
                <li>Не использовать Сайт в противоправных целях</li>
                <li>Соблюдать правила внутреннего распорядка Клуба при посещении занятий</li>
                <li>Своевременно оплачивать услуги Клуба</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-4">3.4. Пользователь имеет право:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Получать информацию об услугах Клуба</li>
                <li>Отправлять заявки на тренировки</li>
                <li>Обращаться в Администрацию с вопросами и предложениями</li>
                <li>Отказаться от услуг Клуба в порядке, предусмотренном законодательством</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Правила посещения Клуба</h2>
              <p>При посещении Клуба Пользователь обязан:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Иметь при себе действующий абонемент или оплатить разовое посещение</li>
                <li>Использовать сменную спортивную обувь и форму</li>
                <li>Соблюдать правила техники безопасности</li>
                <li>Бережно относиться к имуществу Клуба</li>
                <li>Соблюдать чистоту и порядок в помещениях Клуба</li>
                <li>Не нарушать общественный порядок и не мешать другим посетителям</li>
                <li>Следовать указаниям тренеров и администрации</li>
              </ul>
              <p className="mt-4">
                <strong>Внимание:</strong> Посетители с противопоказаниями по состоянию здоровья 
                должны предварительно проконсультироваться с врачом и уведомить тренера 
                об имеющихся ограничениях.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Оплата услуг</h2>
              <p>
                Стоимость услуг Клуба указана на Сайте и может быть изменена Администрацией 
                в одностороннем порядке.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Оплата производится наличными или банковской картой</li>
                <li>Абонементы именные и не подлежат передаче третьим лицам</li>
                <li>Срок действия абонемента начинается с момента активации</li>
                <li>Неиспользованные занятия не переносятся на следующий период (если иное не предусмотрено условиями абонемента)</li>
                <li>Возврат денежных средств осуществляется в соответствии с законодательством РФ</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Ответственность сторон</h2>
              <p>
                Администрация не несёт ответственности за:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Технические сбои в работе Сайта, вызванные действиями третьих лиц</li>
                <li>Травмы, полученные Пользователем вследствие нарушения правил безопасности</li>
                <li>Утрату личных вещей, оставленных без присмотра</li>
                <li>Действия третьих лиц на территории Клуба</li>
              </ul>
              <p className="mt-4">
                Пользователь несёт ответственность за ущерб, причинённый имуществу Клуба 
                или другим посетителям по его вине.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Интеллектуальная собственность</h2>
              <p>
                Все материалы, размещённые на Сайте (тексты, изображения, логотипы, дизайн), 
                являются интеллектуальной собственностью Клуба или его партнёров и защищены 
                законодательством об авторском праве.
              </p>
              <p>
                Запрещается копирование, воспроизведение, распространение материалов Сайта 
                без письменного разрешения Администрации.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">8. Конфиденциальность</h2>
              <p>
                Обработка персональных данных Пользователей осуществляется в соответствии с{" "}
                <a href="/Политика конфиденциальности.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Политикой конфиденциальности
                </a>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">9. Разрешение споров</h2>
              <p>
                Все споры и разногласия, возникающие между сторонами, решаются путём переговоров.
              </p>
              <p>
                При невозможности достижения согласия споры подлежат рассмотрению в суде 
                по месту нахождения Клуба в соответствии с законодательством Российской Федерации.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">10. Заключительные положения</h2>
              <p>
                Настоящее Соглашение вступает в силу с момента начала использования Сайта 
                Пользователем и действует бессрочно.
              </p>
              <p>
                Администрация оставляет за собой право вносить изменения в Соглашение без 
                предварительного уведомления Пользователей. Актуальная версия Соглашения 
                размещается на Сайте.
              </p>
              <p>
                Продолжение использования Сайта после внесения изменений означает согласие 
                Пользователя с новой редакцией Соглашения.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">11. Контактная информация</h2>
              <p>
                По всем вопросам, связанным с настоящим Соглашением, вы можете обратиться к нам:
              </p>
              <ul className="list-none space-y-2">
                <li><strong>Адрес:</strong> г. Калуга, ул. Кибальчича, д. 32</li>
                <li><strong>Телефон:</strong> <a href="tel:+79105298282" className="text-primary hover:underline">+7 910 529 82 82</a></li>
                <li><strong>Email:</strong> <a href="mailto:pobedanakube@gmail.com" className="text-primary hover:underline">pobedanakube@gmail.com</a></li>
              </ul>
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

export default Terms;

