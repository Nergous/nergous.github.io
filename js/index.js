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
        console.log(codeBlock);
        codeBlock.setAttribute("id", "myText");
        copyContent();
        codeBlock.removeAttribute("id");
    });
}

const copyContent = async () => {
    let text = document.getElementById("myText").innerHTML;
    console.log(text);
    try {
        await navigator.clipboard.writeText(text);
        alert("Copied!");
    } catch (err) {
        alert("Failed to copy text: ", err);
    }
};



