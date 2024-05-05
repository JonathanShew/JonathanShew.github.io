function textBigger() {
    document.getElementById("textBox").style.fontSize = "24pt";
}

function textFancy() {
    let text = document.getElementById("textBox");
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline";
}

function textBoring() {
    document.getElementById("textBox").removeAttribute("style");
}

function textMoo() {
    let text = document.getElementById("textBox");
    text.value = text.value.toUpperCase();
    let segments = text.value.split(".");
    text.value = segments.join("-Moo.");
}