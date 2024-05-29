class Footer{
    render(){
        const html = `
        <div class="footer__inner">
            
            <div class="company">
                <h1 class="main-title">Компания</h1>
                <div class="line-decoration"></div>
                <ul class="footer-block">
                    <li class="footer-block__item">
                        <a href="#!" class="footer-block__link">О Компании</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!" class="footer-block__link">Новости</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!" class="footer-block__link">Партнерам</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!" class="footer-block__link">Вакансии</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!" class="footer-block__link">Политика конфиденциальности</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!" class="footer-block__link">Персональные данные</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!" class="footer-block__link">Правила продаж</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!" class="footer-block__link">Правила пользования сайта</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!" class="footer-block__link">Технологии</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!" class="footer-block__link">Сервисные центры</a>
                    </li>
                </ul>
            </div>
    
            <div class="buyer">
                <h1 class="main-title">Покупателям</h1>
                <div class="line-decoration"></div>
                <ul class="footer-block">
                    <li class="footer-block__item">
                        <a href="#!">Как оформить заказ</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!">Способы оплаты</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!">Кредиты</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!">Доставка</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!">Статус заказа</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!">Обмен, возврат, гарантия</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!">Проверка статуса ремонта</a>
                    </li>
                </ul>
            </div>
    
            <div class="legal-entities">
                <h1 class="main-title">Юридическим лицам</h1>
                <div class="line-decoration"></div>
                <ul class="footer-block">
                    <li class="footer-block__item">
                        <a href="#!">Проверка счета</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!">Корпоративные отделы</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!">Подарочные карты</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="#!">Бонусная программа</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="./html/feedback/feedback.html">Обратная связь</a>
                    </li>
                    <li class="footer-block__item">
                        <a href="./html/help/help.html">Помощь</a>
                    </li>
                </ul>
            </div>
            
        </div>

        <div class="line-decoration-top"></div>

        <p class="company-rights">
            © 2024 Администрация Сайта не несет ответственности за размещаемые Пользователями материалы (в т.ч. 
            информацию и изображения), их содержание и качество.
        </p>
        `;

        ROOT_FOOTER.innerHTML = html;
    }
}


const footer = new Footer();
footer.render();