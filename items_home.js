fetch('products.json')
.then(response => response.json())
.then(data => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [] //اللي هعملها علشان لما اعمل ري فريش للصفحة وفي منتجات موجودة عندي قبل كده يبقي الزر بتاع الاضافة مش هيسمح بالاضافة مره تاني بعد الري فرشconst دي
    const swiper_items_sale = document.getElementById("swiper_items_sale") // slider_products slide <=دي الخاصة بال 
    const swiper_electronics = document.getElementById("swiper_electronics")// swiper Electronics <=دي الخاصة بال 
    const swiper_appliances = document.getElementById("swiper_appliances") // swiper_appliances <= دي الخاصة بال
    const swiper_mobiles = document.getElementById("swiper_mobiles") // swiper_mobiles <= دي الخاصة بال
/* This is Data => swiper_items_sale */
    data.forEach(product => {
        if(product.old_price){
            const isInCart = cart.some(cartItem => cartItem.id === product.id)    // دي معناها أنه لقي المنتج موجود في الكارت لما عمل ري فرش
            const percent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100) // حساب نسبة الخصم لكل منتج
            swiper_items_sale.innerHTML += `
            <div class="swiper-slide product">
                        <span class="sale_present">%${percent_disc}</span> 
                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product"><a href="#">${product.name}</a></p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old_price">$${product.old_price}</p>
                        </div>
                        <div class="icons">
                            <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'Item in cart' : 'add to cart'}
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                    </div>`
            //ده معناه هل في منتجات في الكارت لو الاجابة اه نفذ لي الكلاس أكتيف<= ${isInCart ? 'active' : ''} تعليق علي السطر        
            //ده معناه لو المنتج موجود في الكارت اطبع لي جملة العنصر في الكارت لو مش موجودة اطبع لي جملة اضف الي الكارت وبكده اقدر اعمل ري فرش للصفحة واي منتج كنت ضايفه قبل كدة مش هقدر اضيفة تاني <= ${isInCart ? 'Item in cart' : 'add to cart'} تعليق علي السطر 
        } 
    })    
/* This is Data => swiper_electronics */
    data.forEach(product => {
       if(product.catetory == "electronics"){
        const isInCart = cart.some(cartItem => cartItem.id === product.id)
        const old_price_Pargraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : "";
        const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";
        swiper_electronics.innerHTML += `
            <div class="swiper-slide product">
                        ${percent_disc_div}
                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product"><a href="#">${product.name}</a></p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_Pargraph}
                        </div>
                        <div class="icons">
                            <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'Item in cart' : 'add to cart'}
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                    </div>`
       } 
    })
/* This is Data => swiper_appliances */
    data.forEach(product => {
       if(product.catetory == "appliances"){
        const isInCart = cart.some(cartItem => cartItem.id === product.id)
        const old_price_Pargraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : "";
        const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";
        swiper_appliances.innerHTML += `
            <div class="swiper-slide product">
                        ${percent_disc_div}
                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product"><a href="#">${product.name}</a></p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_Pargraph}
                        </div>
                        <div class="icons">
                            <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'Item in cart' : 'add to cart'}
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                    </div>`
       } 
    })
/* This is Data => swiper_mobiles */
    data.forEach(product => {
       if(product.catetory == "mobiles"){
        const isInCart = cart.some(cartItem => cartItem.id === product.id)
        const old_price_Pargraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : "";
        const percent_disc_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";
        swiper_mobiles.innerHTML += `
            <div class="swiper-slide product">
                        ${percent_disc_div}
                        <div class="img_product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p class="name_product"><a href="#">${product.name}</a></p>
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            ${old_price_Pargraph}
                        </div>
                        <div class="icons">
                            <span class="btn_add_cart ${isInCart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i> ${isInCart ? 'Item in cart' : 'add to cart'}
                            </span>
                            <span class="icon_product">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </div>
                    </div>`
       } 
    })
})