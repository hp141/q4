String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

let str = "63def21078549abc".shuffle();
function hexToDec(hex) {
    return parseInt(hex, 16);
  }
const boxes = document.querySelectorAll(".small-box");
for (let i = 0; i < 16; i++) {
    console.log(hexToDec(str[i]));
    boxes[i].style.order = hexToDec(str[i]);
}

function check() {
    var str2 = document.getElementById("keyInput").value
    str = str.shuffle();
    for (let i = 0; i < 16; i++) {
        boxes[i].style.order = hexToDec(str[i]);
    }
}