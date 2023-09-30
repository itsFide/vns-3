function requestCart() {

    const cartDOMElement = document.querySelector('.js-cart')
    const cartCompareDOMElement = document.querySelector('.compare__slider')
    const cartItemsCounterDOMElement = document.querySelectorAll('.js-cart-total-count-items')
    const cartTotalPriceDOMElement = document.querySelectorAll('.js-cart-total-summa')
        // const cartTotalSummaDOMElement = document.querySelector('.js-cart-total-price')
        // const totalSumma = document.querySelector('.js-all-summa')

    const cart = JSON.parse(localStorage.getItem('AnsCart')) || {};
    // const cartCompare = JSON.parse(localStorage.getItem('AnsCartCompare')) || {};


    const clearBusket = () => {
        const table = document.querySelector('.busket')
            // const total = document.querySelector('.count')
            // const form = document.querySelector('.feedback__container')
        const empty = document.querySelector('.empty')
        if (Object.keys(cart).length == 0) {
            table.classList.add('disabled');
            // total.classList.add('disabled');
            // form.classList.add('disabled');
            empty.classList.add('active');
        }
    }
    const busketpage = document.querySelector('.busket')
    if (busketpage) {
        clearBusket();
    }
    //отображаем добавленный товар в корзине
    const renderCartItem = ({ id, articul, descr, name, totalprice, price, src, quantity, href }) => {
        const cartItemDOMElement = document.createElement('div');
        if (articul === null) {
            articul = '';
        }
        // totalprice = totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        // console.log(price);
        price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        const cartItemTemplate = `
        <div class="cart__item">
              <div class="cart__item__image">
                <img src="${src}" alt="" />
              </div>
              <div class="cart__item__info">
                <h3>${name}</h3>
                <p>
                  ${descr}
                </p>
                <div class="cart__item__counter counter">
                <button class="js-minus">
                    <img src="images/minus-svg.svg" alt="" />
                </button>
                  
                  <span class="js-cart-item-quantity">${quantity}</span>
                  <button class="js-plus">
                  <img src="images/plus-svg.svg" alt="" />
                  </button>
                </div>
              </div>
              <a class="busket__card-remove remove cart__item__close" href="javascript:;">
                <svg class="remove" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.00689 8.71632L8.36044 9.06987L8.714 8.71632L8.36044 8.36276L8.00689 8.71632ZM8.714 9.42342L9.06755 9.06987L8.714 8.71632L8.36044 9.06987L8.714 9.42342ZM9.4211 8.71632L9.06755 8.36276L8.714 8.71632L9.06755 9.06987L9.4211 8.71632ZM8.714 8.00921L8.36044 8.36276L8.714 8.71632L9.06755 8.36276L8.714 8.00921ZM1.92661 1.92893L2.63372 1.22183C2.24319 0.831301 1.61003 0.831302 1.21951 1.22183L1.92661 1.92893ZM1.92661 1.92893L1.21951 1.22183C0.82898 1.61235 0.828981 2.24552 1.21951 2.63604L1.92661 1.92893ZM8.36044 8.36276L1.92661 1.92893L1.21951 2.63604L7.65334 9.06987L8.36044 8.36276ZM1.64293 15.7874L8.36044 9.06987L7.65334 8.36276L0.935823 15.0803L1.64293 15.7874ZM1.64293 15.7874L0.935823 15.0803C0.545299 15.4708 0.545297 16.104 0.935823 16.4945L1.64293 15.7874ZM1.64293 15.7874L0.935823 16.4945C1.32635 16.885 1.95951 16.885 2.35004 16.4945L1.64293 15.7874ZM8.36044 9.06987L1.64293 15.7874L2.35004 16.4945L9.06755 9.77698L8.36044 9.06987ZM16.0687 16.0711L9.06755 9.06987L8.36044 9.77698L15.3616 16.7782L16.0687 16.0711ZM16.0687 16.0711L15.3616 16.7782C15.7522 17.1687 16.3853 17.1687 16.7759 16.7782L16.0687 16.0711ZM16.0687 16.0711L16.7759 16.7782C17.1664 16.3877 17.1664 15.7545 16.7759 15.364L16.0687 16.0711ZM9.06755 9.06987L16.0687 16.0711L16.7759 15.364L9.77466 8.36276L9.06755 9.06987ZM15.7851 1.64525L9.06755 8.36276L9.77466 9.06987L16.4922 2.35236L15.7851 1.64525ZM15.7851 1.64525L16.4922 2.35236C16.8827 1.96183 16.8827 1.32867 16.4922 0.938143L15.7851 1.64525ZM15.7851 1.64525L16.4922 0.938143C16.1016 0.547618 15.4685 0.547619 15.078 0.938143L15.7851 1.64525ZM9.06755 8.36276L15.7851 1.64525L15.078 0.938143L8.36044 7.65566L9.06755 8.36276ZM1.92661 1.92893L8.36044 8.36276L9.06755 7.65566L2.63372 1.22183L1.92661 1.92893Z"
                    fill="#979797" />
                </svg>
            </a>
        `;

        cartItemDOMElement.innerHTML = cartItemTemplate;
        cartItemDOMElement.setAttribute('data-id', id);
        cartItemDOMElement.classList.add('busket__card', 'shadow');
        cartDOMElement.appendChild(cartItemDOMElement);
        // totalBusket();
        updateCart();
    }


    //сохраняем товар в LocalStorage
    const saveCart = () => {
        localStorage.setItem('AnsCart', JSON.stringify(cart));
    }


    // подсчитываение колличества и суммы товара
    // const totalBusket = () => {
    //     let totalcount = 0;
    //     const ids = Object.keys(cart);
    //     for (let i = 0; i < ids.length; i++) {
    //         const id = ids[i]
    //         totalcount += +(cart[id].quantity);
    //     }

    //     let totalAll = 0;
    //     const price = document.querySelectorAll('.js-cart-item-totalprice');
    //     for (let i = 0; i < price.length; i++) {
    //         totalAll = totalAll + parseInt(price[i].innerHTML);
    //     }

    //     cartTotalPriceDOMElement.textContent = totalAll.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' тг';
    //     // cartTotalSummaDOMElement.textContent = total + ' тг';
    //     cartItemsCounterDOMElement.forEach(elem => {
    //         elem.textContent = totalcount;
    //     })
    //     cartTotalPriceDOMElement.forEach(elem => {
    //         elem.textContent = totalAll.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' тг'
    //     })
    //     $('.js-cart-total-summa').attr('data-summ', totalAll);

    //     if (ids.length == 0) {
    //         cartTotalPriceDOMElement.forEach(elem => {
    //                 elem.textContent = totalAll + ' тг'
    //             })
    //             // cartTotalSummaDOMElement.textContent = 0;
    //         $('.js-cart-total-summa').attr('data-summ', 0);
    //     }
    //     updateCart();
    //     checkSelectDeliv();
    // }

    function totalBusketHeader() {
        let busket = document.querySelectorAll('.count__busket')
        let totalcount = 0;
        const ids = Object.keys(cart);
        for (let i = 0; i < ids.length; i++) {
            const id = ids[i]
            totalcount += +(cart[id].quantity);
        }
        // console.log(totalcount)
        busket.forEach((e)=>{
            e.innerHTML = totalcount;
            if (totalcount > 1) {
                e.classList.add('active')
            } else {
                e.classList.remove('active')
            }
        })
        
    }
    totalBusketHeader();
    //Проверка выбранного селекта для доставки товара
    // let select = document.getElementById('deliv')
    // if (select) {
    //     select.addEventListener('input', checkSelectDeliv)
    // }

    // function checkSelectDeliv() {
    //     let summa = document.querySelector('.js-all-summa')
    //     let deliv = document.querySelector('.deliv')
    //     let select = document.getElementById('deliv')
    //     let value = select.value
    //     let totalAll = 0;
    //     // let price = document.querySelectorAll('.js-cart-item-totalprice');
    //     // for (let i = 0; i < price.length; i++) {
    //     //     let parseSumma = totalAll + parseInt(price[i].innerHTML)
    //     //     totalAll = parseSumma;
    //     // }
    //     if (value === 'delivery') {
    //         // let parseSumma = parseInt(totalAll + 2000)
    //         // summa.innerHTML = parseSumma.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' тг';
    //         deliv.classList.add('active')
    //     } else {
    //         // summa.innerHTML = totalAll.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' тг'
    //         deliv.classList.remove('active')
    //     }
    //     requestTable();
    //     // console.log(value)
    // }
    //Удаление из корзины
    const deleteCartItem = (id) => {
            const cartItemDOMElement = cartDOMElement.querySelector(`[data-id="${id}"]`);
            // const tableElement = tableDOMElement.querySelector(`[data-product-articul="${articul}"]`);
            cartDOMElement.removeChild(cartItemDOMElement);
            // tableDOMElement.removeChild(tableElement);
            delete cart[id];
            updateCart();
            // totalBusket();
        }
        //Обновление количества товара и итоговой суммы
    const updateQuantityTotalPrice = (id, quantity) => {
            const cartItemDOMElement = cartDOMElement.querySelector(`[data-id="${id}"`);
            const cartItemQuantityDOMElement = cartItemDOMElement.querySelector('.js-cart-item-quantity');
            // const cartTotalPriceDOMElement = document.querySelector('.js-cart-total-price')
            const cartItemPriceDOMElement = cartItemDOMElement.querySelector('.js-cart-item-totalprice');

            const ids = Object.keys(cart);
            cart[id].quantity = quantity;
            cartItemQuantityDOMElement.textContent = quantity;
            // cart[id].totalprice = cart[id].quantity * cart[id].price;
            // cartItemPriceDOMElement.textContent = cart[id].totalprice + ' тг';
            // console.log(cart[id].totalprice)

            // tableQuantity.textContent = quantity;
            // cart[id].totalprice = cart[id].quantity * cart[id].price;
            // tableTotal.textContent = cart[articul].totalprice;

            updateCart();
        }
        //Увеличение количества товара и итоговой суммы
    const increaseQuantity = (id) => {
            const newQuantity = cart[id].quantity + 1;
            updateQuantityTotalPrice(id, newQuantity);
        }
        //Уменьшение количества товара и итоговой суммы
    const decreaseQuantity = (id) => {
        const newQuantity = cart[id].quantity - 1;
        if (newQuantity >= 1) {
            updateQuantityTotalPrice(id, newQuantity);
        }
    }



    //Добавление в корзину
    const addCartItem = (data) => {
        // console.log(data)
        const { id } = data;
        cart[id] = data;
        updateCart();
        if (cartDOMElement) {
            renderCartItem(data);
        }
    }


    //Обновляем данные в LocalStorage
    const updateCart = () => {
        saveCart();
    }


    //Получаем данные для объекта
    const getProductData = (productDOMElement) => {
        const button = document.querySelector('.buy__product')
        const id = productDOMElement.getAttribute('data-id')
        const name = productDOMElement.getAttribute('data-product-name');
        const descr = productDOMElement.getAttribute('data-descr');
        // const desc = productDOMElement.getAttribute('data-product-desc');
        const articul = productDOMElement.getAttribute('data-product-articul');
        const size = productDOMElement.getAttribute('data-product-size');
        // const color = productDOMElement.getAttribute('data-product-color');
        const price = productDOMElement.getAttribute('data-product-price');
        const src = productDOMElement.getAttribute('data-product-img');
        let href = productDOMElement.getAttribute('data-product-href');
        if (button) {
            href = window.location.href;
        }
        const quantity = 1;
        const totalprice = quantity * +(price);
        return { id, name, descr, articul, size, price, totalprice, src, quantity, href };
    }



    const renderCart = () => {
        const ids = Object.keys(cart);
        // console.log(ids);
        ids.forEach((id) => renderCartItem(cart[id]));
    };


    const disabledButton = () => {
        // console.log(cart)
        const test = document.querySelectorAll('.js-product')
        const button = document.querySelector('.buy__product')
        for (let i = 0; i < test.length; i++) {
            const attr = (test[i].getAttribute('data-id'))
            const parent = test[i].querySelector('.js-buy')
                // console.log(parent)
                // console.log(cart.hasOwnProperty(attr))
            if (cart.hasOwnProperty(attr)) {
                parent.classList.add('disabled')
                parent.classList.remove('product-modal-open')
                parent.innerHTML = 'Добавлено'
                parent.disabled = true;
                if (button) {
                    button.innerHTML = 'Добавлено'
                }
            }

        }

    }
    disabledButton();


    // Вызов popup
    function showPopup({ id, articul, descr, name, totalprice, price, src, quantity, href }) {
        let productsModalBody = document.querySelector('.products-modal__body');
        
        productsModalBody.innerHTML = `
            <div data-id="${id}" class="busket__card modal__top">
            <a href="${src}" class="modal__product-image photo--zoom">
            <img src="${src}" alt=""/>
            <div>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <g opacity="0.3">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.7254 22.3993L16.9542 15.6281C20.0392 11.8746 19.8293 6.30257 16.3237 2.79698C12.5943 -0.932347 6.52632 -0.932347 2.797 2.79698C-0.932332 6.52631 -0.932332 12.5943 2.797 16.3237C6.30165 19.8283 11.8729 20.0405 15.6281 16.9542L22.3993 23.7254C22.7655 24.0915 23.3591 24.0915 23.7253 23.7254C24.0916 23.3591 24.0916 22.7654 23.7254 22.3993ZM14.9976 14.9976C11.9995 17.9957 7.12121 17.9956 4.12309 14.9976C1.12496 11.9994 1.12496 7.12115 4.12309 4.12303C7.12112 1.12504 11.9994 1.12481 14.9976 4.12303C17.9957 7.12115 17.9957 11.9994 14.9976 14.9976ZM10.498 8.62261H14.1514C14.6693 8.62261 15.0891 9.04242 15.0891 9.56029C15.0891 10.0782 14.6693 10.498 14.1514 10.498H10.498V14.1514C10.498 14.6693 10.0782 15.0891 9.56031 15.0891C9.04243 15.0891 8.62262 14.6693 8.62262 14.1514V10.498H4.96918C4.45131 10.498 4.0315 10.0782 4.0315 9.56029C4.0315 9.04242 4.45131 8.62261 4.96918 8.62261H8.62262V4.96917C8.62262 4.45129 9.04243 4.03148 9.56031 4.03148C10.0782 4.03148 10.498 4.45129 10.498 4.96917V8.62261Z"
                        fill="black"
                    />
                </g>
                </svg>
            </div>
            </a>
            <div class="modal__product-info">
            <h3 class="modal__product-name">${name}</h3>
            <p class="modal__product-text">
                ${descr}
            </p>
            <div class="modal__counter counter">
                <button class="js-minus modal__counter__dec">
                    <img src="images/minus-svg.svg" alt="">
                </button>
                <span class="js-cart-item-quantity">1</span>
                <button class="js-plus modal__counter__inc">
                <img src="images/plus-svg.svg" alt="">
                </button>
            </div>
            </div>
        </div>
        <div class="modal__actions">
            <a href="products.html" class="outline-btn modal__btn"> Продолжить покупку</a>
            <a href="cart.html" class="filled-btn modal__btn">Перейти в корзину</a>
        </div>
        
        `
    }


    //Инициализация
    const cartInit = () => {
        if (cartDOMElement) {
            renderCart();
        }

        if (cartCompareDOMElement) {
            renderCompareCart();
        }

        document.querySelector('body').addEventListener('click', (e) => {
            const target = e.target;
            //В корзину
            if (target.classList.contains('js-buy')) {
                e.preventDefault();
                const productDOMElement = target.closest('.js-product');
                const data = getProductData(productDOMElement);
                addCartItem(data);
                disabledButton();
                totalBusketHeader();
                showPopup(data);
            }

            //Удалить из корзины
            if (target.classList.contains('remove')) {
                e.preventDefault();
                const cartItemDOMElement = target.closest('.busket__card');
                const productId = cartItemDOMElement.getAttribute('data-id');
                deleteCartItem(productId);
                clearBusket();
                // requestTable();
                totalBusketHeader();
            }

            //Увеличить
            if (target.classList.contains('js-plus')) {
                e.preventDefault();
                const cartItemDOMElement = target.closest('.busket__card');
                const productId = cartItemDOMElement.getAttribute('data-id');
                increaseQuantity(productId);
                // totalBusket();
                // requestTable();
                totalBusketHeader();
            }

            //Уменьшить
            if (target.classList.contains('js-minus')) {
                e.preventDefault();
                const cartItemDOMElement = target.closest('.busket__card');
                const productId = cartItemDOMElement.getAttribute('data-id');
                decreaseQuantity(productId);
                // totalBusket();
                // requestTable();

                totalBusketHeader();
            }


        });
    }
    cartInit();
}
requestCart();