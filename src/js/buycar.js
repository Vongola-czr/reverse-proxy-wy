// let carArr = [];
// let carArr;
let nav_o = document.querySelector(".nav_o");
let nav_f = document.querySelector(".nav_f")

let id = document.URL.match(/id=(\d+)/).join().match(/\d+/).join();


console.log(id);


let carw = JSON.parse(localStorage.getItem('carw'))
console.log(carw);
// let nav_d = document.querySelector('.nav_d')
// function zyw() {

// let lists = list.filter(item => {
//     return item.id == id;

// })
// console.log(lists[0]);

// console.log(1);
let carArr = JSON.parse(localStorage.getItem("cars"));
carArr = carArr ? carArr : [];

// carArr.push(lists[0]);

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

render(carw)

// jisuan(carw)



function jisuan(wzwl) {

    let totalPrice = wzwl.reduce((pre, item) => {
        return pre + item.maxPrice * item.saleNum;
    }, 0)

    let zo_num = wzwl.reduce((pre, item) => {
        return pre + item.saleNum * 1;
    }, 0)
    return {
        totalPrice,
        zo_num
    }
}

// zyw();
// add_num(resa);

// var nav_o = document.querySelector(".nav_o");

function render(data) {
    // data = JSON.parse(localStorage.getItem("cars"))

    let zo = jisuan(data)

    let str = `

    <div class="nav_e">
            <label for="" class="nav_f1">

                <span>
                    <input type="checkbox" name="all" id="all">全选</span>
            </label>
            <label for="" class="l_o">商品</label>
            <label for="" class="l_t">金额</label>
            <label for="" class="l_f">数量</label>
            <label for="" class="l_s">小计</label>
            <label for="" class="l_e">操作</label>
        </div>

        <p class="nav_eo">
            <span>全部商品(50)</span>
            <span>全场满$119免运费</span>
        </p>

        
    `
    str += `<ul class="nav_d">`

    data.forEach(item => {

        str += `
    <li class = "nav_f" data-id="${item.id}">
    
        <input type="checkbox" name="hobby" class="in_o">
        <img src="${item.coverUrl}" alt="">
        <a href="">
            ${item.name}</a>
        <span class="nav_f_price">${item.maxPrice}</span>


        <input type="button" value="-" class="input_bo" data-id="${item.id}">

        <input type="text" name="" value="${item.saleNum}" class="input_t">

        <input type="button" value="+" class="input_bt" data-id="${item.id}">

        <span>$${zo.totalPrice}</span>
        <button class="deleta_b" dele_id="${item.id}"> * </button>
</li>
    `
    })
    str += `</ul>
        
        <p class="nav_g">
            <label for="" class="nav_g_j"><input type="checkbox" name="" id="">
                <span>全选</span>
            </label>
            <span class="nav_g_p">商品总数<span>
            ${zo.zo_num}</span>件商品</span>

            <span class="nav_g_t">合计: <span>${zo.totalPrice}</span></span>
            <button class="totoa_j">结算</button>
        </p>`;
    nav_o.innerHTML = str;

    // console.log(2);
}
let nav_d = document.querySelector(".nav_d")

nav_o.onclick = function () {
    let carw = JSON.parse(localStorage.getItem('carw'))
    let idx = localStorage.getItem('idm');
    // console.log(idx);
    let e = window.event;
    // let carw = carw.filter(item => {
    //     return item.id == id;
    // })
    if (e.target.classList == 'input_bt') {
        let num = document.querySelector(".input_t").value;
        num++;
        // num = num <= 1 ? 1 : num--;
        // num = num;
        document.querySelector(".input_t").value = num;
        // localStorage.setItem("carw", JSON.stringify(saleNum))
        let idx = e.target.getAttribute("data-id");
        document.querySelector(".input_t").value = num;
        // let data = JSON.parse(localStorage.getItem("carw")).filter(item => {
        //     return item.id == idx;
        // })
        let carw = JSON.parse(localStorage.getItem("carw"));
        carw.forEach(item => {
            if (item.id == idx) {
                // console.log(item.saleNum);
                let numb = document.querySelector(".input_t").value * 1;
                console.log(numb);
                item.saleNum = numb;
                // let a = item.saleNum * 1
                // item.saleNum = numb * 1 + a
                // console.log(item.saleNum);
            }
            localStorage.setItem("carw", JSON.stringify(carw))
        })
    }
    if (e.target.classList == 'input_bo') {
        // console.log(1);
        let numt = document.querySelector(".input_t").value;

        // if (numt <= 1) {
        //     numt = 1;
        // } else {
        //     numt--;
        // }
        numt <= 1 ? 1 : numt--;
        // num = num < 0 ? 1 : num--
        // num--
        // num = num;
        let idx = e.target.getAttribute("data-id");
        document.querySelector(".input_t").value = numt;
        // let data = JSON.parse(localStorage.getItem("carw")).filter(item => {
        //     return item.id == idx;
        // })
        let carw = JSON.parse(localStorage.getItem("carw"));

        // console.log(data);
        carw.forEach(item => {
            if (item.id == idx) {
                // console.log(item.saleNum);
                let numb = document.querySelector(".input_t").value * 1;
                console.log(numb);

                item.saleNum = numb;

                // let a = item.saleNum * 1
                // item.saleNum = numb * 1 + a
                // console.log(item.saleNum);
            }
            localStorage.setItem("carw", JSON.stringify(carw))
        })

        console.log(carw);
        // localStorage.setItem('carw', saleNum)

    }

    if (e.target.classList == 'totoa_j') {
        // console.log(1);
        // localStorage.getItem("carw")
        localStorage.clear("carw");
        render(carw);
    }

    if (e.target.classList == 'deleta_b') {
        // console.log(1);

        let id = e.target.getAttribute('dele_id');
        let dashu = carw.filter(item => {
            return item.id != id;
        })
        // localStorage.removeItem('dashu');
        localStorage.setItem('carw', JSON.stringify(dashu));
        render(dashu)
        // if (e.target.id == 'id') {
        //     localStorage.clear();
        // }
        // console.log(dashu);
        // console.log(this);
    }

}





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

    var hobby = document.getElementsByName('hobby');

    // 2）全选/不选
    // 把所有hobby复选框的状态改成与#all的状态一致
    all.onclick = function () {
        for (var i = 0; i < hobby.length; i++) {
            hobby[i].checked = all.checked;
        }
    }

    // 给每个hobby复选框绑定点击事件
    // 判定#all复选框的勾选状态
    for (var i = 0; i < hobby.length; i++) {
        hobby[i].onclick = function () {
            all.checked = isCheckAll();
        }
    }
    // 封装#all勾选状态函数
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



}
// let nav_d = document.querySelector('.nav_d');
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