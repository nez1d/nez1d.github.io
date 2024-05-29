class Header{
    render(){
        const html = `
        <div class="header-container">
            <div class="search">
                <input class="search-input" type="text">
            </div>
            <ul class="menu-list">
                <li class="menu-list__item menu-list__item-like" onmouseover="OverLikeMenu()" onmouseout="OutLikeMenu()">
                    <a class="menu-list__link" href="#">
                        <img src="./img/header/like.svg"/>
                    </a>
                </li>
                <li class="menu-list__item menu-list__item-cart">
                    <a class="menu-list__link" href="cart.html" onclick="headerPage.handlerOpenCartPage()">
                        <img src="./img/header/cart.svg"/>
                    </a>
                </li>
                <li class="menu-list__item menu-list__item-user">
                    <a id="like-btn" class="menu-list__link like-menu-link" href="login.html" >
                        <img src="./img/header/user.svg"/>
                    </a>
                </li>
            </ul>
        </div>

        <div class="like-menu" id="like-menu">
            <p class="title-like">Избранное</p>
            <p class="text-like">Здесь будут отображаться товары, добавленные вами в избранное!</p>
        </div>
        `;


        ROOT_HEADER.innerHTML = html;
    }
    
}

const header = new Header();
header.render();