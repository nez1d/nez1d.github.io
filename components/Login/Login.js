class Login{
    render(){
        const html = `
    <div class="wrapper">
        <form action="">
            <h1>Вход в аккаунт</h1>
            <div class="input-box">
                <input type="text" 
                       placeholder="Имя">
            </div>
            <div class="input-box">
                <input type="password"
                       placeholder="Пароль">
            </div>

            <div class="remember-forgot">
                <label>
                    <input type="checkbox"> Запомнить меня
                </label>
                <a href="#">Забыли пароль?</a>
            </div>

            <button type="submit" class="btn">Войти</button>

            <div class="register-link">
                <p>Нету аккаунта?
                    <a href="register.html">Зарегестрироваться</a>
                </p>
                
                <p>
                    <a href="index.html">Вернуться на главную страницу</a>
                </p>
            </div>
        </form>
    </div>
        `;
        ROOT_LOGIN.innerHTML = html;
    }
}

const login = new Login();
login.render();