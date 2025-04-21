window.onscroll = function () {
    const btn = document.getElementById("scrollToTopButton");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function subMenu1Display() {
    var dl = document.getElementById("categoryForBelowLarge__item1-subMenu");
    if (dl.style.display == "none") dl.style.display = "block";
    else dl.style.display = "none";
}

function subMenu2Display() {
    var dl = document.getElementById("categoryForBelowLarge__item2-subMenu");
    if (dl.style.display == "none") dl.style.display = "block";
    else dl.style.display = "none";
}

function subMenu3Display() {
    var dl = document.getElementById("categoryForBelowLarge__item3-subMenu");
    if (dl.style.display == "none") dl.style.display = "block";
    else dl.style.display = "none";
}

function subMenu4Display() {
    var dl = document.getElementById("categoryForBelowLarge__item4-subMenu");
    if (dl.style.display == "none") dl.style.display = "block";
    else dl.style.display = "none";
}

function subMenu5Display() {
    var dl = document.getElementById("categoryForBelowLarge__item5-subMenu");
    if (dl.style.display == "none") dl.style.display = "block";
    else dl.style.display = "none";
}

function subMenu6Display() {
    var dl = document.getElementById("categoryForBelowLarge__item6-subMenu");
    if (dl.style.display == "none") dl.style.display = "block";
    else dl.style.display = "none";
}

function subMenu8Display() {
    var dl = document.getElementById("categoryForBelowLarge__item8-subMenu");
    if (dl.style.display == "none") dl.style.display = "block";
    else dl.style.display = "none";
}

function signUpForm() {
    var dl1 = document.getElementById("signUpFormOverLay");
    var dl2 = document.getElementById("signUpForm");
    if (dl1.style.display == "none" && dl2.style.display == "none") {
        dl1.style.display = "block";
        dl2.style.display = "block";
    }
    else {
        dl1.style.display = "none";
        dl2.style.display = "none";
    }
}

function logInForm() {
    var dl1 = document.getElementById("logInFormOverLay");
    var dl2 = document.getElementById("logInForm");
    if (dl1.style.display == "none" && dl2.style.display == "none") {
        dl1.style.display = "block";
        dl2.style.display = "block";
    }
    else {
        dl1.style.display = "none";
        dl2.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.bestSeller-item__hoverdButton-addToCartIcon-container');
    const addToCartButtons2 = document.querySelectorAll('.saleProduct-item__hoverdButton-addToCartIcon-container');
    const addToCartButtons3 = document.querySelectorAll('.category1-item__hoverdButton-addToCartIcon-container');
    const addToCartButtons4 = document.querySelectorAll('.category2-item__hoverdButton-addToCartIcon-container');
    const addToCartButtons5 = document.querySelectorAll('.category3-item__hoverdButton-addToCartIcon-container');
    const addToCartButtons6 = document.querySelectorAll('.category4-item__hoverdButton-addToCartIcon-container');
    const addToCartButtons7 = document.querySelectorAll('.category5-item__hoverdButton-addToCartIcon-container');
    const addToCartButtons8 = document.querySelectorAll('.category6-item__hoverdButton-addToCartIcon-container');
    const addToCartButtons9 = document.querySelectorAll('.category8-item__hoverdButton-addToCartIcon-container');
    const cartIcon = document.querySelector('.header_shoppingCart');
    
    let cartCount = 2; //set số lượng mặc định là 2 sp

    function updateCartCount() {
        let existingBadge = cartIcon.querySelector('.cart-count-badge');

        if (!existingBadge) {
            const badge = document.createElement('span');
            badge.classList.add('cart-count-badge');
            badge.style.position = 'absolute';
            badge.style.top = '-10px';
            badge.style.right = '-6px';
            badge.style.backgroundColor = 'white';
            badge.style.border = '0.5px solid black';
            badge.style.borderRadius = '50%';
            badge.style.width = '20px';
            badge.style.height = '20px';
            badge.style.display = 'flex';
            badge.style.justifyContent = 'center';
            badge.style.alignItems = 'center';
            badge.style.fontSize = '12px';
            badge.style.fontWeight = 'bold';
            badge.textContent = cartCount;
            badge.classList.add('cart-count-badge');

            cartIcon.appendChild(badge);
        } else {
            existingBadge.textContent = cartCount;
        }
    }

    updateCartCount(); // Khởi tạo khi trang vừa load

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const productName = button.closest('.content__bestSeller-item')
                                      .querySelector('.bestSeller-item__name').innerText.trim();

            cartCount++;
            updateCartCount();

            alert(`Bạn đã thêm sản phẩm "${productName}" vào giỏ hàng thành công!`);
        });
    });

    addToCartButtons2.forEach(function (button) {
        button.addEventListener('click', function () {
            const productName = button.closest('.content__saleProduct-item')
                                      .querySelector('.saleProduct-item__name').innerText.trim();

            cartCount++;
            updateCartCount();

            alert(`Bạn đã thêm sản phẩm "${productName}" vào giỏ hàng thành công!`);
        });
    });

    addToCartButtons3.forEach(function (button) {
        button.addEventListener('click', function () {
            const productName = button.closest('.content__category1-item')
                                      .querySelector('.category1-item__name').innerText.trim();

            cartCount++;
            updateCartCount();

            alert(`Bạn đã thêm sản phẩm "${productName}" vào giỏ hàng thành công!`);
        });
    });

    addToCartButtons4.forEach(function (button) {
        button.addEventListener('click', function () {
            const productName = button.closest('.content__category2-item')
                                      .querySelector('.category2-item__name').innerText.trim();

            cartCount++;
            updateCartCount();

            alert(`Bạn đã thêm sản phẩm "${productName}" vào giỏ hàng thành công!`);
        });
    });

    addToCartButtons5.forEach(function (button) {
        button.addEventListener('click', function () {
            const productName = button.closest('.content__category3-item')
                                      .querySelector('.category3-item__name').innerText.trim();

            cartCount++;
            updateCartCount();

            alert(`Bạn đã thêm sản phẩm "${productName}" vào giỏ hàng thành công!`);
        });
    });

    addToCartButtons6.forEach(function (button) {
        button.addEventListener('click', function () {
            const productName = button.closest('.content__category4-item')
                                      .querySelector('.category4-item__name').innerText.trim();

            cartCount++;
            updateCartCount();

            alert(`Bạn đã thêm sản phẩm "${productName}" vào giỏ hàng thành công!`);
        });
    });

    addToCartButtons7.forEach(function (button) {
        button.addEventListener('click', function () {
            const productName = button.closest('.content__category5-item')
                                      .querySelector('.category5-item__name').innerText.trim();

            cartCount++;
            updateCartCount();

            alert(`Bạn đã thêm sản phẩm "${productName}" vào giỏ hàng thành công!`);
        });
    });

    addToCartButtons8.forEach(function (button) {
        button.addEventListener('click', function () {
            const productName = button.closest('.content__category6-item')
                                      .querySelector('.category6-item__name').innerText.trim();

            cartCount++;
            updateCartCount();

            alert(`Bạn đã thêm sản phẩm "${productName}" vào giỏ hàng thành công!`);
        });
    });

    addToCartButtons9.forEach(function (button) {
        button.addEventListener('click', function () {
            const productName = button.closest('.content__category8-item')
                                      .querySelector('.category8-item__name').innerText.trim();

            cartCount++;
            updateCartCount();

            alert(`Bạn đã thêm sản phẩm "${productName}" vào giỏ hàng thành công!`);
        });
    });
});
