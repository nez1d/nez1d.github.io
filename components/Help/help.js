class Help{
    render(){
        const html = `
        <section class="contact" id="contact">
        
        <form action="#">
            <h2 class="heading"> Обратиться за помощью </span></h2>
            <div class="input-box">
                <div class="input-field">
                    <input type="text" placeholder="Имя" required>
                    <span class="focus"></span>
                </div>

                <div class="input-field">
                    <input type="text" placeholder="Email" required>
                    <span class="focus"></span>
                </div>
            </div>

            <div class="input-box">
                <div class="input-field">
                    <input type="number" placeholder="Телевон" required>
                    <span class="focus"></span>
                </div>

                <div class="input-field">
                    <input type="text" placeholder="Ваша проблема" required>
                    <span class="focus"></span>
                </div>
            </div>

            <div class="textarea-field">
                <textarea name="" id="" cols="30" rows="10" placeholder="Текст сообщения..." required></textarea>
                <span class="focus"></span>
            </div>

            <div class="btn-box btns">
                <button type="submit" class="btn_sub">Отправить</button>
            </div>
        </form>
    </section>
        `

        ROOT_HELP.innerHTML = html;
    }
}

const help = new Help();
help.render();