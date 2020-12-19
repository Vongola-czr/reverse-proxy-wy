"use strict";

// let carArr = [];
// let carArr;
var nav_o = document.querySelector(".nav_o");
var nav_f = document.querySelector(".nav_f");
var id = document.URL.match(/id=(\d+)/).join().match(/\d+/).join();
console.log(id);
var carw = JSON.parse(localStorage.getItem('carw'));
console.log(carw); // let nav_d = document.querySelector('.nav_d')
// function zyw() {
// let lists = list.filter(item => {
//     return item.id == id;
// })
// console.log(lists[0]);
// console.log(1);

var carArr = JSON.parse(localStorage.getItem("cars"));
carArr = carArr ? carArr : []; // carArr.push(lists[0]);
// localStorage.setItem('cars', JSON.stringify(carArr));
// let carlists = JSON.parse(localStorage.getItem('cars'));
// console.log(carlists);
// // $('.input_bt').on('click', function () {
// // })
// // console.log(carlists);
// inData(carlists)
// function inData(arr) {
//     console.log(arr);
//     arr.forEach(item => {
//         // console.log(item.name);
//         // console.log(item.coverUrl);
//         // console.log(item.minPrice);
//         // console.log(item.id);
//         pAjax({
//             url: "../api/inData.php",
//             data: {
//                 shopname: item.name,
//                 pic: item.coverUrl,
//                 price: item.minPrice,
//                 shop_id: item.id,
//             }
//         }).then(res => {
//             console.log(res);
//         })
//     })
// }

render(carw); // jisuan(carw)

function jisuan(wzwl) {
  var totalPrice = wzwl.reduce(function (pre, item) {
    return pre + item.maxPrice * item.saleNum;
  }, 0);
  var zo_num = wzwl.reduce(function (pre, item) {
    return pre + item.saleNum * 1;
  }, 0);
  return {
    totalPrice: totalPrice,
    zo_num: zo_num
  };
} // zyw();
// add_num(resa);
// var nav_o = document.querySelector(".nav_o");


function render(data) {
  // data = JSON.parse(localStorage.getItem("cars"))
  var zo = jisuan(data);
  var str = "\n\n    <div class=\"nav_e\">\n            <label for=\"\" class=\"nav_f1\">\n\n                <span>\n                    <input type=\"checkbox\" name=\"all\" id=\"all\">\u5168\u9009</span>\n            </label>\n            <label for=\"\" class=\"l_o\">\u5546\u54C1</label>\n            <label for=\"\" class=\"l_t\">\u91D1\u989D</label>\n            <label for=\"\" class=\"l_f\">\u6570\u91CF</label>\n            <label for=\"\" class=\"l_s\">\u5C0F\u8BA1</label>\n            <label for=\"\" class=\"l_e\">\u64CD\u4F5C</label>\n        </div>\n\n        <p class=\"nav_eo\">\n            <span>\u5168\u90E8\u5546\u54C1(50)</span>\n            <span>\u5168\u573A\u6EE1$119\u514D\u8FD0\u8D39</span>\n        </p>\n\n        \n    ";
  str += "<ul class=\"nav_d\">";
  data.forEach(function (item) {
    str += "\n    <li class = \"nav_f\" data-id=\"".concat(item.id, "\">\n    \n        <input type=\"checkbox\" name=\"hobby\" class=\"in_o\">\n        <img src=\"").concat(item.coverUrl, "\" alt=\"\">\n        <a href=\"\">\n            ").concat(item.name, "</a>\n        <span class=\"nav_f_price\">").concat(item.maxPrice, "</span>\n\n\n        <input type=\"button\" value=\"-\" class=\"input_bo\" data-id=\"").concat(item.id, "\">\n\n        <input type=\"text\" name=\"\" value=\"").concat(item.saleNum, "\" class=\"input_t\">\n\n        <input type=\"button\" value=\"+\" class=\"input_bt\" data-id=\"").concat(item.id, "\">\n\n        <span>$").concat(zo.totalPrice, "</span>\n        <button class=\"deleta_b\" dele_id=\"").concat(item.id, "\"> * </button>\n</li>\n    ");
  });
  str += "</ul>\n        \n        <p class=\"nav_g\">\n            <label for=\"\" class=\"nav_g_j\"><input type=\"checkbox\" name=\"\" id=\"\">\n                <span>\u5168\u9009</span>\n            </label>\n            <span class=\"nav_g_p\">\u5546\u54C1\u603B\u6570<span>\n            ".concat(zo.zo_num, "</span>\u4EF6\u5546\u54C1</span>\n\n            <span class=\"nav_g_t\">\u5408\u8BA1: <span>").concat(zo.totalPrice, "</span></span>\n            <button class=\"totoa_j\">\u7ED3\u7B97</button>\n        </p>");
  nav_o.innerHTML = str; // console.log(2);
}

var nav_d = document.querySelector(".nav_d");

nav_o.onclick = function () {
  var carw = JSON.parse(localStorage.getItem('carw'));
  var idx = localStorage.getItem('idm'); // console.log(idx);

  var e = window.event; // let carw = carw.filter(item => {
  //     return item.id == id;
  // })

  if (e.target.classList == 'input_bt') {
    var num = document.querySelector(".input_t").value;
    num++; // num = num <= 1 ? 1 : num--;
    // num = num;

    document.querySelector(".input_t").value = num; // localStorage.setItem("carw", JSON.stringify(saleNum))

    var _idx = e.target.getAttribute("data-id");

    document.querySelector(".input_t").value = num; // let data = JSON.parse(localStorage.getItem("carw")).filter(item => {
    //     return item.id == idx;
    // })

    var _carw = JSON.parse(localStorage.getItem("carw"));

    _carw.forEach(function (item) {
      if (item.id == _idx) {
        // console.log(item.saleNum);
        var numb = document.querySelector(".input_t").value * 1;
        console.log(numb);
        item.saleNum = numb; // let a = item.saleNum * 1
        // item.saleNum = numb * 1 + a
        // console.log(item.saleNum);
      }

      localStorage.setItem("carw", JSON.stringify(_carw));
    });
  }

  if (e.target.classList == 'input_bo') {
    // console.log(1);
    var numt = document.querySelector(".input_t").value; // if (numt <= 1) {
    //     numt = 1;
    // } else {
    //     numt--;
    // }

    numt <= 1 ? 1 : numt--; // num = num < 0 ? 1 : num--
    // num--
    // num = num;

    var _idx2 = e.target.getAttribute("data-id");

    document.querySelector(".input_t").value = numt; // let data = JSON.parse(localStorage.getItem("carw")).filter(item => {
    //     return item.id == idx;
    // })

    var _carw2 = JSON.parse(localStorage.getItem("carw")); // console.log(data);


    _carw2.forEach(function (item) {
      if (item.id == _idx2) {
        // console.log(item.saleNum);
        var numb = document.querySelector(".input_t").value * 1;
        console.log(numb);
        item.saleNum = numb; // let a = item.saleNum * 1
        // item.saleNum = numb * 1 + a
        // console.log(item.saleNum);
      }

      localStorage.setItem("carw", JSON.stringify(_carw2));
    });

    console.log(_carw2); // localStorage.setItem('carw', saleNum)
  }

  if (e.target.classList == 'totoa_j') {
    // console.log(1);
    // localStorage.getItem("carw")
    localStorage.clear("carw");
    render(carw);
  }

  if (e.target.classList == 'deleta_b') {
    // console.log(1);
    var _id = e.target.getAttribute('dele_id');

    var dashu = carw.filter(function (item) {
      return item.id != _id;
    }); // localStorage.removeItem('dashu');

    localStorage.setItem('carw', JSON.stringify(dashu));
    render(dashu); // if (e.target.id == 'id') {
    //     localStorage.clear();
    // }
    // console.log(dashu);
    // console.log(this);
  }
};

function add_num(one) {
  console.log(1);
}

window.onload = function () {
  /*
      思路：
      1）获取页面元素
      2）全选/不选
          给#all复选框绑定点击事件
      3）#all复选框状态修改
          hobby复选框全勾选，则#all为勾选状态
          hobby复选框中只要有一个未勾选，则#all为取消状态
      4）反选
          遍历所有hobby复选框，勾选的取消，没勾选的勾选上
   */
  var all = document.getElementById('all');
  var hobby = document.getElementsByName('hobby'); // 2）全选/不选
  // 把所有hobby复选框的状态改成与#all的状态一致

  all.onclick = function () {
    for (var i = 0; i < hobby.length; i++) {
      hobby[i].checked = all.checked;
    }
  }; // 给每个hobby复选框绑定点击事件
  // 判定#all复选框的勾选状态


  for (var i = 0; i < hobby.length; i++) {
    hobby[i].onclick = function () {
      all.checked = isCheckAll();
    };
  } // 封装#all勾选状态函数
  // * 如果所有的hobby勾选，则#all勾选
  // * 只有有一个hobby未勾选，则#all取消勾选


  function isCheckAll() {
    // 假设hobby全部勾选
    var res = true;

    for (var i = 0; i < hobby.length; i++) {
      if (!hobby[i].checked) {
        res = false;
        break;
      }
    }

    return res;
  }
}; // let nav_d = document.querySelector('.nav_d');
// nav_d.onclick = function (e) {
//     if (e.target.classList == 'input_bt') {
//         // console.log(carlists);
//         let id = e.target.parentNode.getAttribute('data-id')
//         console.log(id);
//         let res = carlists.filter((item) => {
//             console.log(item);
//             return item.id == id
//         })
//         console.log(res);
//     }
// }
// console.log(resa);
// nav_f.onclick = function () {
//     let resat = JSON.parse(localStorage.getItem("cars"));
//     // console.log(resat);
//     let jieshou = resat.filter(item => {
//         return item.id != id;
//     })
//     // console.log(1);
//     console.log(jieshou);
//     // localStorage.setItem('cars', JSON.stringify(jieshou));
//     // // console.log();
//     // render(jieshou);
//     // localStorage.getItem
//     // let e = window.event;
//     //  localStorage.getItem('id');
//     // console.log(id);
//     // if (e.target.classList.contains('deleta_b')) {
//     // }
// }
// console.log(lists);