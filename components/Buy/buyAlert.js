function buyAlert(){
    emptyInput()
    // open('index.html')
}

function emptyInput(){

    if(document.getElementById("phone").value.length == 0)
    {
        alert('Поле "Телефон" обязательное для заполнения!');
    } else if(document.getElementById("email").value.length == 0){
        alert('Поле "Email" обязательное для заполнения!');
    } else {
        alert('Заказ оформлен!');
        open('index.html')
    }
}