"use strict";

var xhr = new XMLHttpRequest();
xhr.open('get', '/wy?limit=60&offset=0');
xhr.send();

xhr.onload = function () {
  var res = JSON.parse(xhr.responseText);
  console.log(res.data.hotProduct);
  render(res.data.hotProduct);
};

function render(data) {
  console.log(data);
  var one_nav = document.querySelector('.one_nav');
  data.forEach(function (item, index) {
    // console.log(item);
    var str = "<li>\n        <a href=\"../html/list01.html\">\n            <img src=\"".concat(item.products.coverUrl, "\" alt=\"\" >\n        </a>\n        <div class=\"nav_font\">\n            <span>").concat(item.products.couponLabelDesc, "</span>\n            <a href=\"\">").concat(item.name, "</a>\n            <p>$").concat(item.products.minPrice, "</p>\n        </div>\n    </li>");
    one_nav.innerHTML += str;
  });
}

var xhr1 = new XMLHttpRequest();
xhr1.open('get', '/wySec?limit=60&offset=0');
xhr1.send();

xhr1.onload = function () {
  var res1 = JSON.parse(xhr1.responseText);
  renderSec(res1.data.allProduct);
};

function renderSec(dataSec) {
  var two_nav = document.querySelector('.two_nav');
  dataSec.forEach(function (item, index) {
    var strSec = "<li>\n        <a href=\"../html/list01.html\">\n            <img src=\"".concat(item.coverUrl, "\" alt=\"\">\n        </a>\n        <div class=\"nav_font\">\n            <span>").concat(item.couponLabelDesc, "</span>\n            <a href=\"../html/list01.html\">\u7F51\u6613\u4E91\u97F3\u4E50\u8BB0\u5FC6\u56DE\u97F3\u7CFB\u5217\u9ED1\u767D\u6C5F\u6E56\u5706\u9886\u536B\u8863</a>\n            <p>$109</p>\n        </div>\n    </li>");
    two_nav.innerHTML += strSec;
  });
}