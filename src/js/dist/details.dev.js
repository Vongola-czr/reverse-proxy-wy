"use strict";

var x_zhuti = document.querySelector('.x_zhuti'); // console.log(x_zhuti);

var xhr = new XMLHttpRequest(x_zhuti); // let _this = this
// let detailsID = this.id

var reg = /id=(\d+)/;
var id = reg.exec(location.search)[1]; //取得索引为1的值

localStorage.setItem('idm', id); // console.log(id);

var r1 = JSON.parse(localStorage.getItem("list"));
var r2 = r1.filter(function (item) {
  return item.id == id;
});
var arr2 = [];
arr2.push(r2); // localStorage.setItem('car', JSON.stringify(arr2[0]));
// let car1 = JSON.parse(localStorage.getItem('car'))

xhr.open('get', "/wyDetails?id=".concat(id, "&title=%E7%83%AD%E9%94%80%E7%88%86%E5%93%81")); // https://music.163.com/store/api/product/detail?id=88446810&title=%E7%83%AD%E9%94%80%E7%88%86%E5%93%81
// console.log(xhr.id);

xhr.send();

xhr.onload = function () {
  // return new Promise(resolve => {
  // })
  var res = JSON.parse(xhr.responseText);
  console.log(res.product); // let x_zhuti = document.querySelector('.x_zhuti');
  // czr = x_zhuti;

  render(res.product); // })
}; // let str = "";


function render(data) {
  // console.log(data);
  // let x_zhuti = document.querySelector('.x_zhuti');
  // czr = x_zhuti;
  // console.log(czr);
  var p1 = data.skus[0].picUrl; // console.log(p1);
  // console.log(data);
  // console.log(item);

  x_zhuti.innerHTML = "\n        <section class=\"nav_tit\">\n            <div class=\"nav_l\">\n                <span class=\"index_l\"><a href=\"\">\u9996\u9875</a></span>\n                <span class=\"index_t\"><i></i><a href=\"\">\u70ED\u9500\u7206\u54C1</a></span>\n                <span class=\"index_s\"><i></i><a href=\"\">".concat(data.name, "</a></span>\n            </div>\n            <div class=\"nav_r\"><i></i><a href=\"\u5206\u4EAB\"></a></div>\n\n        </section>\n\n        <section class=\"nav\">\n            <div class=\"box\">\n                <div class=\"show\">\n                    <img src=\"").concat(data.coverUrl, "\">\n                    <div class=\"mask\"></div>\n                </div>\n\n                <div class=\"list\">\n                    <p class=\"active\">\n                        <img midelImg=\"").concat(data.picUrls[0], "\" bigImg=\"").concat(data.picUrls[0], "\"\n                            src=\"").concat(data.picUrls[0], "\" style=\"width:76px;height:76px;\">\n                    </p>\n                    <p>\n                        <img midelImg=\"").concat(data.picUrls[1], "\" bigImg=\"").concat(data.picUrls[1], "\"\n                            src=\"").concat(data.picUrls[1], "\"style=\"width:76px;height:76px;\">\n                    </p>\n                    <p>\n                        <img midelImg=\"").concat(data.picUrls[2], "\" bigImg=\"").concat(data.picUrls[2], "\"\n                            src=\"").concat(data.picUrls[2], "\"style=\"width:76px;height:76px;\">\n                    </p>\n                    <p>\n                        <img midelImg=\"").concat(data.picUrls[3], "\" bigImg=\"").concat(data.picUrls[3], "\"\n                            src=\"").concat(data.picUrls[3], "\"style=\"width:76px;height:76px;\">\n                    </p>\n                    <p>\n                        <img midelImg=\"").concat(data.picUrls[4], "\" bigImg=\"").concat(data.picUrls[4], "\"\n                            src=\"").concat(data.picUrls[4], "\"style=\"width:76px;height:76px;\">\n                    </p>\n                    <p>\n                        <img midelImg=\"").concat(data.picUrls[5], "\" bigImg=\"").concat(data.picUrls[5], "\"\n                            src=\"").concat(data.picUrls[5], "\"style=\"width:76px;height:76px;\">\n                    </p>\n                    <p>\n                        <img midelImg=\"").concat(data.picUrls[6], "\" bigImg=\"").concat(data.picUrls[6], "\"\n                            src=\"").concat(data.picUrls[6], "\"style=\"width:76px;height:76px;\">\n                    </p>\n                </div>\n\n\n                <div class=\"enlarge\"></div>\n            </div>\n\n            <div class=\"tit\">\n                <h2 class=\"tit_b\">").concat(data.name, "</h2>\n                <p class=\"tit_o\">").concat(data.suggestWord, "</p>\n                <p class=\"tit_t\">\xA5199</p>\n                <p class=\"cuxiao\">\u4FC3\u9500 <span>\u624B\u6162\u65E0</span>\n                    <span>50\u5143</span>\n                    <span>\u53CC\u5341\u4E8C\u9650\u65F6\u8D85\u4EAB,\u65E0\u95E8\u69DB</span>\n                    <span>\u9886\u5238</span></p>\n\n                <ul class=\"tit_s\">\n                    <li class=\"a\">\u989C\u8272</li>\n                    <li>\u96FE\u973E\u84DD</li>\n                    <li>\u51B0\u5DDD\u7070</li>\n                    <li>\u70DF\u7070\u7C89</li>\n                </ul>\n\n                <div class=\"nav_control\">\n                    <span class=\"nav_num\">\u6570\u91CF</span>\n                    <input type=\"button\" placeholder=\"-\" value=\"-\" class=\"reduce\">\n                    <input type=\"text\" value=\"1\" class=\"b\">\n                    <input type=\"button\" placeholder=\"+\" value=\"+\" class=\"add\">\n                </div>\n\n                <ul class=\"server\">\n                    <li class=\"b\">\u670D\u52A1</li>\n                    <li>\u4E0D\u652F\u63017\u5929\u65E0\u7406\u7531\u9000\u8D27</li>\n                    <li>\u6EE1119\u5305\u90AE</li>\n                    <li>\u5546\u5BB6\u53D1\u8D27</li>\n                </ul>\n            </div>\n            <div class=\"button_o\">\n                <button class=\"buy\" id=\"buy_b\">\u7ACB\u5373\u8D2D\u4E70</button>\n                <button class=\"add_car\" id=\"add_car\">\u52A0\u5165\u8D2D\u7269\u8F66</button>\n            </div>\n        </section>\n\n\n        <section class=\"commodity_x\">\n            <section class=\"commodity_l\">\n                <h2>\u5546\u54C1\u8BE6\u60C5</h2>\n                <p>").concat(data.descr[0].resource, "</p>\n                <p>\n                ").concat(data.descr[1].resource, "\n                </p>\n                <p>").concat(data.descr[2].resource, "</p>\n                <p>").concat(data.descr[3].resource, "\n                </p>                \n                <img src=\"").concat(data.descr[4].resource, "\" alt=\"\">\n                <img src=\"").concat(data.descr[5].resource, "\" alt=\"\">\n                <img src=\"").concat(data.descr[6].resource, "\" alt=\"\">\n                <img src=\"").concat(data.descr[7].resource, "\" alt=\"\">\n                <img src=\"").concat(data.descr[8].resource, "\" alt=\"\">\n            </section>\n\n            <section class=\"commodity_r\">\n                <h2> \u70ED\u95E8\u5546\u54C1</h2>\n                <figure>\n                    <img src=\"../img/109951165392256869.jpg\" alt=\"\">\n                    <figcaption class=\"f_o\">\n                        <span class=\"sp_o\">\n                            <span class=\"sp_t\">\u7279\u4EF7\n                            </span>\n                            <a href=\"\" class=\"a_o\">\n                            \u73B0\u8D27\u3011\u7F51\u6613\u4E91\u97F3\u4E502021\u5E74\u97F3\u4E50\u4EBA\u5E74\u5386\u65E5\u5386\u793C\u76D2\u88C5\n                            </a>\n                        </span>\n                        <p class=\"price_n\">$168</p>\n                    </figcaption>\n                </figure>\n            </section>\n\n        </section>\n        "); // x_zhuti.innerHTML =

  new Enlarge(".box");
} // console.log(czr);
// let carw = [];
// let carw = JSON.parse(localStorage.getItem('carw'))
// carw = carw ? carw : [];
// console.log(carw);


x_zhuti.onclick = function () {
  var list = JSON.parse(localStorage.getItem('list'));
  var idx = localStorage.getItem('idm'); // console.log(idx);

  var e = window.event;
  var lists = list.filter(function (item) {
    return item.id == id;
  });

  if (e.target.id == 'buy_b') {
    var arr = [];

    var _id = document.URL.match(/id=\d+/).join().match(/\d+/).join();

    var data = JSON.parse(localStorage.getItem("list")).filter(function (item) {
      return item.id == _id;
    })[0];
    console.log(data);
    var carw = localStorage.getItem("carw"); // console.log(carw);

    var val = document.querySelector(".b").value;

    if (!carw) {
      data.saleNum = val;
      arr.push(data); // console.log(1);

      localStorage.setItem("carw", JSON.stringify(arr));
    } else {
      // return console.log(carw);
      carw = JSON.parse(carw);
      console.log(carw);
      carw.forEach(function (item) {
        if (item.id == _id) {
          console.log(item.saleNum);
          val = document.querySelector(".b").value * 1;
          console.log(val);
          var a = item.saleNum * 1;
          item.saleNum = val * 1 + a;
        } else {
          carw.push(data);
          localStorage.setItem("carw", JSON.stringify(carw));
        }
      });
      localStorage.setItem("carw", JSON.stringify(carw));
    } // console.log(lists[0]);
    // carw.push(lists[0])
    // // console.log(carw);
    // localStorage.setItem('carw', JSON.stringify(carw));
    // // location.href = '../html/buycar.html'


    location.href = '../html/buycar.html?id=' + idx;
  } // let num = localStorage.getItem('class_c', saleNum);
  // num = num ? num : 0;
  // console.log(num);


  if (e.target.classList == 'add') {
    var num = document.querySelector(".b").value;
    num++; // num = num <= 1 ? 1 : num--;
    // num = num;

    document.querySelector(".b").value = num;
  }

  if (e.target.classList == 'reduce') {
    var _num = document.querySelector(".b").value;
    console.log(_num);
    _num--;

    if (_num <= 1) {
      _num = 1;
    } // num = num <= 1 ? 1 : num--;
    // num = num;


    document.querySelector(".b").value = _num;
  }

  if (e.target.id == 'add_car') {
    // localStorage.setItem('class_c', num);
    // // 因为添加到购物车按钮 需要用户名和商品id
    // // 所以需要判断是否有登录
    // num++;
    // console.log(num);
    // let login = getCookie('login');
    // if (!login) {
    //     location.href = '../html/login.html';
    //     // 记录url 从哪里跳过来,保证输入数据后返回原网址
    //     // setCookie('url', 'http://facai.com/PHP/phpday06/html/detail.html?id' = +id)
    //     localStorage.setItem('http://facai.com/PHP/phpday06/html/detail.html?id=' + id)
    //     return
    // }
    console.log(1);

    var _id2 = localStorage.getItem("idm");

    var _val = document.querySelector(".b").value; // console.log(val);

    var _list = JSON.parse(localStorage.getItem("list"));

    var newObj = _list.filter(function (item) {
      return item.id == _id2;
    })[0];

    console.log(newObj);
    console.log(_id2, _val);
    var goods = JSON.parse(localStorage.getItem("carw"));
    goods = goods ? goods : [];
    console.log(goods);
    goods.forEach(function (item) {
      if (item.id == _id2) {
        var a = item.saleNum * 1;
        item.saleNum = _val * 1 + a;
      } else {
        goods.push(newObj);
      }
    });
    localStorage.setItem("carw", JSON.stringify(goods));
    console.log(JSON.parse(localStorage.getItem("carw")));
  }
};