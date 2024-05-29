class Register{
    render(){
        const html = `
    <div class="wrapper">
        <form action="">
            <h1>Регистрация</h1>

            <div class="input-box">
                <input type="text" 
                       placeholder="Имя">
            </div>

            <div class="input-box">
                <input type="email" 
                       placeholder="Почта">
            </div>

            <div class="input-box">
                <input type="password"
                       placeholder="Пароль">
            </div>

            <div class="input-box">
                <input type="password"
                       placeholder="Повторите пароль">
            </div>

            <button type="submit" class="btn">Зарегестрироваться</button>

            <div class="register-link">
                <p>Уже есть аккаунт?
                    <a href="login.html">Войти</a>
                </p>
                <p>
                    <a href="index.html">Вернуться на главную страницу</a>
                </p>
            </div>


            
        </form>
    </div>
    `;
        ROOT_REGISTER.innerHTML = html;
    }
}

const register = new Register();
register.render();