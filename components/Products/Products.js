class Products{
    constructor(){
        this.classNameActive = 'products__element-btn__cart_no-active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetLocationStorage(element, id){
        const { pushProduct, products} = localStorageUtil.putProducts(id);

        if(pushProduct){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
    }

    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({id, name, img, price, rating}) => {
            let activeClass = '';
            let activeText = '';

            if(productsStore.indexOf(id) === -1){
                activeText = this.labelAdd;
            }
            else {
                activeText = this.labelRemove;
                activeClass = ' ' + this.classNameActive;
            }

            htmlCatalog += `
            <li class="products__element">
                    <img class="products__element-img" src="${img}"/>
                    <div class="products__element__inner">
                        
                        <div class="title">
                            <h1 class="products__element-name">${name}</h1>
                        </div>
                        <p class="products__element-price">${price.toLocaleString()} ₽</p>

                        <div class="products__element__inner-content">
                            <div class="products__element-stars">
                                <img class="products__element-img-star" src="./img/interface/star-orange.svg"/>
                                <img class="products__element-img-star" src="./img/interface/star-orange.svg"/>
                                <img class="products__element-img-star" src="./img/interface/star-orange.svg"/>
                                <img class="products__element-img-star" src="./img/interface/star-orange.svg"/>
                                <img class="products__element-img-star" src="./img/interface/star-orange.svg"/>
                            </div>

                            <button class="products__element-btn__like">
                                <img class="products__element-img-like" src="./img/interface/like.svg"/>
                            </button>
                            <button class="products__element-btn__cart ${activeClass}" 
                            onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                                ${activeText}
                            </button>
                            <a href="buy.html" class="products__element-btn__buy">Купить</a>
                        </div>
                    </div>
                </li>
            `;
        });

        const html = `
            <ul class="products__container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();