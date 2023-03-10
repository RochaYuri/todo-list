// Create a "close" button and append it to each list item
var MyNodeList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < MyNodeList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    MyNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById("itemName").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === ''){
        alert("Você deve escrever algo!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("itemName").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Selected querys to change with the theme
check.addEventListener('change', () => {
    document.querySelector('.logo').classList.toggle('dark');
    document.querySelector('.header').classList.toggle('dark');
    document.querySelector('.link').classList.toggle('dark');
    document.querySelector('.mainContent').classList.toggle('dark');
    document.querySelector('.title').classList.toggle('dark');
    document.querySelector('#addButton').classList.toggle('dark');
})