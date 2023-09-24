var acc = document.getElementsByClassName("pf-v5-c-accordion__toggle");



for (let i = 0; i < acc.length; i += 1) {
    acc[i].addEventListener("click", function () {
        if (this.getAttribute("aria-expanded", "false")) {
            this.setAttribute("aria-expanded", "true");
            this.classList.remove("non__visible");
        } else {
            this.setAttribute("aria-expanded", "false");
            this.classList.add("non__visible");
        }
        var sibl = this.nextElementSibling;
        if (sibl.classList.contains("pf-m-expanded")) {
            sibl.setAttribute("hidden", true);
            sibl.classList.remove("pf-m-expanded");
        } else {
            sibl.removeAttribute("hidden");
            sibl.classList.add("pf-m-expanded");
        }
    });
}

var btn = document.getElementsByClassName("pf-v5-c-button pf-m-plain");
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        codeBlock =
            this.parentNode.parentNode.parentNode.nextElementSibling
                .firstElementChild.firstElementChild;
        codeBlock.setAttribute("id", "myText");
        copyContent();
        codeBlock.removeAttribute("id");
    });
}

const copyContent = async () => {
    let text = document.getElementById("myText").innerHTML;
    try {
        await navigator.clipboard.writeText(text);
        alert("Copied!");
    } catch (err) {
        alert("Failed to copy text: ", err);
    }
};


var burgerButton = document.getElementById("navBtn");
var page = document.getElementById("main--page");
var sideBar = document.getElementById("sidebar");
var contentPage = document.getElementById("page__main");
var content = document.getElementById("content");
burgerButton.addEventListener("click", function() {
    if (this.checked) {
        page.classList.remove("no--sidebar");
        sideBar.classList.remove("non__visible");
        /*content.classList.remove("expanded");*/
        
        
        
    } else {
        page.classList.add("no--sidebar");
        sideBar.classList.add("non__visible");
        /*content.classList.add("expanded");*/
        
    }
});


var bottom = document.getElementById("bottom");
var bottomBtn = document.getElementById("bottomBtn");
bottomBtn.addEventListener("click", function() {
    if (bottom.classList.contains("raised")) {
        bottom.classList.remove("raised");
        bottomBtn.classList.remove("raised");
    } else {
        bottom.classList.add("raised");
        bottomBtn.classList.add("raised");
    }
});


var nav = document.getElementById("navList");
try {
    var navList = nav.getElementsByClassName("pf-v5-c-nav__link");
    for (let i=0; i < navList.length; i += 1) {
        navList[i].addEventListener("click", function() {
            for (let j = 0; j < navList.length; j += 1) {
                navList[j].classList.remove("pf-m-current");
            }
            navList[i].classList.add("pf-m-current");
        });
    }
} catch(err) {
    console.log(err)
}



var windowH = window.innerHeight;
var backToTop = document.getElementById("backToTop");

contentPage.addEventListener("scroll", function() {
    if (contentPage.scrollTop > (windowH / 2)) {
        backToTop.style.display = "block";
    }
    else {
        backToTop.style.display = "none";
    }
}, {passive: true});