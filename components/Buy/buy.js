class Buy{
    render(){
        const html = `<div class="buy_inner">
        <form class="buy_form">
            <div class="user_inner">
                <h1 class="title_buy title-test">1). Данные покупателя</h1>
    
                <a class="reg__button" href="login.html">Есть учетная запись? Войти...</a>
                <br>
    
                <input name="phone" id="phone" class="input_reg" type="phone" placeholder="Телефон">

                <input name="email" id="email" class="input_reg" type="email" placeholder="Email">
            </div>


            <h1 class="title_buy">2). Выберите способ получения</h1>
            <div class="btn_inner">

                <button class="btn">Самовывоз</button>
                <button class="btn">Доставка</button>
                <button class="btn">Пункт выдачи</button>
            </div>

            
            <h1 class="title_buy">2). Выберите способ оплаты</h1>

            <div class="btn_inner">
                
                <button class="btn">Онлайн</button>
                <button class="btn">При получении</button>
                <button class="btn">В кредит</button>
            </div>

            <br>

            <button class="button__go" onclick="buyAlert()">Подтвердите заказ</button>
            <br>

            <a class="back_btn" href="index.html">Вернуться на главную</a>

        </div>
    </form>
    `
    ROOT_BUY.innerHTML = html;
    }
}

const buy = new Buy();
buy.render();