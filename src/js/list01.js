const xhr = new XMLHttpRequest();
xhr.open('get', '/wyList_o?limit=60&offset=0&specialTopicId=55001&count=true');
xhr.send();

xhr.onload = function () {
    let res = JSON.parse(xhr.responseText);
    console.log(1);
    console.log(res.data.products);
    render(res.data.products);

    // console.log(res.data.products);
    localStorage.setItem("list", JSON.stringify(res.data.products));
}
let t1 = JSON.parse(localStorage.getItem("list"));
console.log(t1);



function render(data) {
    console.log(data);
    let list_O = document.querySelector('.list_O');

    data.forEach((item, index) => {         
        // console.log(item);
        let str = `<li>

        <div class="id_tz" >
            <img src="${item.coverUrl}" alt="" id="${item.id}">
        </div>
       
        <div class="nav_font">
            <span>${item.couponLabelDesc}</span>
            <a href="">${item.name}</a>
            <p>$${item.minPrice}</p>
        </div>
    </li>`
        list_O.innerHTML += str;

    });


    list_O.onclick = function () {
        console.log(1);
        let e = window.event;

        // console.log(e.target.getAttribute("id"));
        location.href = "../html/details.html?id=" + e.target.getAttribute("id")
        // console.log(this);
    }
}