const xhr = new XMLHttpRequest();
xhr.open('get', '/wy?limit=60&offset=0');

xhr.send();

xhr.onload = function () {
    let res = JSON.parse(xhr.responseText);
    console.log(res.data.hotProduct);
    render(res.data.hotProduct);
}



function render(data) {
    console.log(data);
    let one_nav = document.querySelector('.one_nav');

    data.forEach((item, index) => {
        // console.log(item);
        let str = `<li>
        <a href="../html/list01.html">
            <img src="${item.products.coverUrl}" alt="" >
        </a>
        <div class="nav_font">
            <span>${item.products.couponLabelDesc}</span>
            <a href="">${item.name}</a>
            <p>$${item.products.minPrice}</p>
        </div>
    </li>`
        one_nav.innerHTML += str;
    });
}

const xhr1 = new XMLHttpRequest();
xhr1.open('get', '/wySec?limit=60&offset=0');
xhr1.send();

xhr1.onload = function () {
    let res1 = JSON.parse(xhr1.responseText);
    renderSec(res1.data.allProduct);

}


function renderSec(dataSec) {
    let two_nav = document.querySelector('.two_nav');
    dataSec.forEach((item, index) => {

        let strSec = `<li>
        <a href="../html/list01.html">
            <img src="${item.coverUrl}" alt="">
        </a>
        <div class="nav_font">
            <span>${item.couponLabelDesc}</span>
            <a href="../html/list01.html">网易云音乐记忆回音系列黑白江湖圆领卫衣</a>
            <p>$109</p>
        </div>
    </li>`
        two_nav.innerHTML += strSec;
    });
}