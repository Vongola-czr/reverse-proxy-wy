"use strict";

var xhr = new XMLHttpRequest();
xhr.open('get', '/wyList_o?limit=60&offset=0&specialTopicId=55001&count=true');
xhr.send();

xhr.onload = function () {
  var res = JSON.parse(xhr.responseText);
  console.log(1);
  console.log(res.data.products);
  render(res.data.products); // console.log(res.data.products);

  localStorage.setItem("list", JSON.stringify(res.data.products));
};

var t1 = JSON.parse(localStorage.getItem("list"));
console.log(t1);

function render(data) {
  console.log(data);
  var list_O = document.querySelector('.list_O');
  data.forEach(function (item, index) {
    // console.log(item);
    var str = "<li>\n\n        <div class=\"id_tz\" >\n            <img src=\"".concat(item.coverUrl, "\" alt=\"\" id=\"").concat(item.id, "\">\n        </div>\n       \n        <div class=\"nav_font\">\n            <span>").concat(item.couponLabelDesc, "</span>\n            <a href=\"\">").concat(item.name, "</a>\n            <p>$").concat(item.minPrice, "</p>\n        </div>\n    </li>");
    list_O.innerHTML += str;
  });

  list_O.onclick = function () {
    console.log(1);
    var e = window.event; // console.log(e.target.getAttribute("id"));

    location.href = "../html/details.html?id=" + e.target.getAttribute("id"); // console.log(this);
  };
}