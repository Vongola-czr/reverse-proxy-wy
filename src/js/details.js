let x_zhuti = document.querySelector('.x_zhuti');
// console.log(x_zhuti);

const xhr = new XMLHttpRequest(x_zhuti);
// let _this = this
// let detailsID = this.id

let reg = /id=(\d+)/;

let id = reg.exec(location.search)[1]; //取得索引为1的值
localStorage.setItem('idm', id);

// console.log(id);
let r1 = JSON.parse(localStorage.getItem("list"));

let r2 = r1.filter(item => {
    return item.id == id;
})
let arr2 = [];

arr2.push(r2);

// localStorage.setItem('car', JSON.stringify(arr2[0]));

// let car1 = JSON.parse(localStorage.getItem('car'))

xhr.open('get', `/wyDetails?id=${id}&title=%E7%83%AD%E9%94%80%E7%88%86%E5%93%81`);

// https://music.163.com/store/api/product/detail?id=88446810&title=%E7%83%AD%E9%94%80%E7%88%86%E5%93%81

// console.log(xhr.id);
xhr.send();

xhr.onload = function () {
    // return new Promise(resolve => {

    // })
    let res = JSON.parse(xhr.responseText);
    console.log(res.product);
    // let x_zhuti = document.querySelector('.x_zhuti');
    // czr = x_zhuti;

    render(res.product);
    // })
}


// let str = "";

function render(data) {
    // console.log(data);
    // let x_zhuti = document.querySelector('.x_zhuti');

    // czr = x_zhuti;
    // console.log(czr);
    let p1 = data.skus[0].picUrl;
    // console.log(p1);
    // console.log(data);
    // console.log(item);
    x_zhuti.innerHTML = `
        <section class="nav_tit">
            <div class="nav_l">
                <span class="index_l"><a href="">首页</a></span>
                <span class="index_t"><i></i><a href="">热销爆品</a></span>
                <span class="index_s"><i></i><a href="">${data.name}</a></span>
            </div>
            <div class="nav_r"><i></i><a href="分享"></a></div>

        </section>

        <section class="nav">
            <div class="box">
                <div class="show">
                    <img src="${data.coverUrl}">
                    <div class="mask"></div>
                </div>

                <div class="list">
                    <p class="active">
                        <img midelImg="${data.picUrls[0]}" bigImg="${data.picUrls[0]}"
                            src="${data.picUrls[0]}" style="width:76px;height:76px;">
                    </p>
                    <p>
                        <img midelImg="${data.picUrls[1]}" bigImg="${data.picUrls[1]}"
                            src="${data.picUrls[1]}"style="width:76px;height:76px;">
                    </p>
                    <p>
                        <img midelImg="${data.picUrls[2]}" bigImg="${data.picUrls[2]}"
                            src="${data.picUrls[2]}"style="width:76px;height:76px;">
                    </p>
                    <p>
                        <img midelImg="${data.picUrls[3]}" bigImg="${data.picUrls[3]}"
                            src="${data.picUrls[3]}"style="width:76px;height:76px;">
                    </p>
                    <p>
                        <img midelImg="${data.picUrls[4]}" bigImg="${data.picUrls[4]}"
                            src="${data.picUrls[4]}"style="width:76px;height:76px;">
                    </p>
                    <p>
                        <img midelImg="${data.picUrls[5]}" bigImg="${data.picUrls[5]}"
                            src="${data.picUrls[5]}"style="width:76px;height:76px;">
                    </p>
                    <p>
                        <img midelImg="${data.picUrls[6]}" bigImg="${data.picUrls[6]}"
                            src="${data.picUrls[6]}"style="width:76px;height:76px;">
                    </p>
                </div>


                <div class="enlarge"></div>
            </div>

            <div class="tit">
                <h2 class="tit_b">${data.name}</h2>
                <p class="tit_o">${data.suggestWord}</p>
                <p class="tit_t">¥199</p>
                <p class="cuxiao">促销 <span>手慢无</span>
                    <span>50元</span>
                    <span>双十二限时超享,无门槛</span>
                    <span>领券</span></p>

                <ul class="tit_s">
                    <li class="a">颜色</li>
                    <li>雾霾蓝</li>
                    <li>冰川灰</li>
                    <li>烟灰粉</li>
                </ul>

                <div class="nav_control">
                    <span class="nav_num">数量</span>
                    <input type="button" placeholder="-" value="-" class="reduce">
                    <input type="text" value="1" class="b">
                    <input type="button" placeholder="+" value="+" class="add">
                </div>

                <ul class="server">
                    <li class="b">服务</li>
                    <li>不支持7天无理由退货</li>
                    <li>满119包邮</li>
                    <li>商家发货</li>
                </ul>
            </div>
            <div class="button_o">
                <button class="buy" id="buy_b">立即购买</button>
                <button class="add_car" id="add_car">加入购物车</button>
            </div>
        </section>


        <section class="commodity_x">
            <section class="commodity_l">
                <h2>商品详情</h2>
                <p>${data.descr[0].resource}</p>
                <p>
                ${data.descr[1].resource}
                </p>
                <p>${data.descr[2].resource}</p>
                <p>${data.descr[3].resource}
                </p>                
                <img src="${data.descr[4].resource}" alt="">
                <img src="${data.descr[5].resource}" alt="">
                <img src="${data.descr[6].resource}" alt="">
                <img src="${data.descr[7].resource}" alt="">
                <img src="${data.descr[8].resource}" alt="">
            </section>

            <section class="commodity_r">
                <h2> 热门商品</h2>
                <figure>
                    <img src="../img/109951165392256869.jpg" alt="">
                    <figcaption class="f_o">
                        <span class="sp_o">
                            <span class="sp_t">特价
                            </span>
                            <a href="" class="a_o">
                            现货】网易云音乐2021年音乐人年历日历礼盒装
                            </a>
                        </span>
                        <p class="price_n">$168</p>
                    </figcaption>
                </figure>
            </section>

        </section>
        `
    // x_zhuti.innerHTML =

    new Enlarge(".box");
}
// console.log(czr);


// let carw = [];

// let carw = JSON.parse(localStorage.getItem('carw'))
// carw = carw ? carw : [];
// console.log(carw);
x_zhuti.onclick = function () {
    let list = JSON.parse(localStorage.getItem('list'))
    let idx = localStorage.getItem('idm');
    // console.log(idx);
    let e = window.event;
    let lists = list.filter(item => {
        return item.id == id;
    })
    if (e.target.id == 'buy_b') {
        let arr = [];
        let id = document.URL.match(/id=\d+/).join().match(/\d+/).join();
        let data = JSON.parse(localStorage.getItem("list")).filter(item => {
            return item.id == id;
        })[0];
        console.log(data);
        let carw = localStorage.getItem("carw");
        // console.log(carw);
        let val = document.querySelector(".b").value;
        if (!carw) {
            data.saleNum = val;
            arr.push(data)
            // console.log(1);
            localStorage.setItem("carw", JSON.stringify(arr));

        } else {
            // return console.log(carw);
            carw = JSON.parse(carw);
            console.log(carw);
            carw.forEach(item => {
                if (item.id == id) {
                    console.log(item.saleNum);
                    val = document.querySelector(".b").value * 1;
                    console.log(val);
                    let a = item.saleNum * 1
                    item.saleNum = val * 1 + a;
                } else {
                    carw.push(data);
                    localStorage.setItem("carw", JSON.stringify(carw));
                }
            });
            localStorage.setItem("carw", JSON.stringify(carw))
        }
        // console.log(lists[0]);
        // carw.push(lists[0])
        // // console.log(carw);
        // localStorage.setItem('carw', JSON.stringify(carw));

        // // location.href = '../html/buycar.html'
        location.href = '../html/buycar.html?id=' + idx;
    }

    // let num = localStorage.getItem('class_c', saleNum);
    // num = num ? num : 0;
    // console.log(num);
    if (e.target.classList == 'add') {
        let num = document.querySelector(".b").value;
        num++;
        // num = num <= 1 ? 1 : num--;
        // num = num;
        document.querySelector(".b").value = num;
    }
    if (e.target.classList == 'reduce') {
        let num = document.querySelector(".b").value;
        console.log(num);
        num--;
        if (num <= 1) {
            num = 1;
        }
        // num = num <= 1 ? 1 : num--;
        // num = num;
        document.querySelector(".b").value = num;

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
        let id = localStorage.getItem("idm");
        let val = document.querySelector(".b").value;
        // console.log(val);
        let list = JSON.parse(localStorage.getItem("list"));
        let newObj = list.filter(item => {
            return item.id == id;
        })[0];
        console.log(newObj);
        console.log(id, val);
        let goods = JSON.parse(localStorage.getItem("carw"));
        goods = goods ? goods : [];
        console.log(goods);
        goods.forEach(item => {
            if (item.id == id) {
                let a = item.saleNum * 1
                item.saleNum = val * 1 + a;
            } else {
                goods.push(newObj)
            }
        })
        localStorage.setItem("carw", JSON.stringify(goods));
        console.log(JSON.parse(localStorage.getItem("carw")));
    }
}