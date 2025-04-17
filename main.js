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