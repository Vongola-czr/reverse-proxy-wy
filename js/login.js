let m_zlo = document.querySelector('.m_zlo');
let m_zlt = document.querySelector('.m_zlt');
let mask = document.querySelector('#mask');
let login = document.querySelector('.login');
let loginx = document.querySelector('#login')
let title = document.querySelector('.title');
let closeBtn = document.querySelector('#closeBtn');
let loginBtn = document.querySelector('#loginBtn');
let checkbox = document.querySelector('.checkbox');
let showName = document.querySelector('#showName');
let zhuce_g = document.querySelector('.zhuce_g')

// console.log(m_zlt);

m_zlt.onmousedown = event => {
    let e = event || window.event;
    e.returnValue = false;
    loginx.style.display = 'block';
    setStyle();
}

zhuce_g.onclick = function () {
    loginx.style.display = "none";
}

m_zlo.onmousedown = event => {
    // console.log(1);
    let e = event || window.event;
    e.returnValue = false;
    mask.style.display = 'block';
    setStyle();
}

window.onresize = setStyle;

closeBtn.onclick = () => mask.style.display = 'none';

document.onkeyup = event => {
    let e = event || window.event;
    if (e.keyCode === 27) mask.style.display = 'none';
}

// title.onmousedown = (event) => {
//     let e1 = event || window.event;
//     let x = e1.offsetX;
//     let y = e1.offsetY;
//     document.onmousemove = (e) => {
//         login.style.left = e.clientX - x + 'px';
//         login.style.top = e.clientY - y + 'px';
//     }
// }

document.onmouseup = () => {
    document.onmousemove = null;
}

function setStyle() {
    login.style.left = (innerWidth - login.offsetWidth) / 2 + 'px';
    login.style.top = (innerHeight - login.offsetHeight) / 2 + 'px';
}

// 验证匹配
let userName = document.querySelector('#userName');
let password = document.querySelector('#password');
let testObj = {};

userName.onchange = function () {
    let userNameTest = /^[a-z][0-9A-Za-z]{5,11}$/i.test(userName.value);
    if (!userNameTest) {
        this.nextElementSibling.innerText = '用户名不正确';
    } else {
        testObj.userNameTest = userNameTest;
        this.nextElementSibling.innerText = '';
    }
    chnage(testObj);
}
password.onchange = function () {
    let passwordTest = /^[^\s]{6,18}$/.test(password.value);
    if (!passwordTest) {
        this.nextElementSibling.innerText = '密码验证不通过';
    } else {
        testObj.passwordTest = passwordTest;
        this.nextElementSibling.innerText = '';
    }
    chnage(testObj);
}
checkbox.onclick = function () {
    testObj.checkbox = this.checked;
    chnage(testObj);
}

// loginBtn.onclick = function () {
//     showName.innerText = userName.value;
//     mask.style.display = 'none';
// }

function chnage(testObj) {
    if (testObj.checkbox && testObj.userNameTest && testObj.passwordTest) {
        loginBtn.disabled = false;
    } else {
        loginBtn.disabled = true;
    }
}
$('#loginBtn').click(function () {
    console.log(1);
    $('#userName').val();
    console.log($('#userName').val());
    $('#password').val();
    $.ajax({
        url: "../api/login.php",
        method: 'get',
        data: {
            userName: $('#userName').val(),
            password: $('#password').val()
        },
        dataType: 'json',
        async: true,
        success: function (res) {
            console.log(res);
            if (res.code == 1) {
                if (confirm('注册成功,前往主页') == true) {
                    location.href = "http://facai.com/PHP/Shop163/html/index.html";
                    // $('#login').hide();
                    return;
                }
            }
        },
        error: function (err) {
            console.log(err);
        }
    })
})


// 给validate自定验证规则
//  jQuery.validator.addMethod(规则名字,函数,'验证错误的提示信息')

jQuery.validator.addMethod('testTel', function (value) {
    let reg = /^1[3,5,6,7,8]\d{9}$/;
    if (reg.test(value)) {
        return true
    } else {
        return false
    }
}, '验证失败的提示信息');

$('#login').validate({
    // 填写的 输入框验证的规则
    rules: {
        // 就是input的name属性的属性值来验证
        username: {
            required: true,
            maxlength: 12,
            minlength: 6
        },
        tel: {
            required: true,
            testTel: true
        },
        password: 'required'
    },
    // 当不满足规则的是 编写的提示信息
    messages: {
        username: {
            required: '用户名必填项',
            maxlength: '用户的最大长度只能为12位',
            minlength: '用户名不能低于6位字符'
        },
        tel: {
            required: '用户名必填项',
            testTel: '手机号格式不正确'
        }
    },
    submitHandler: function () {
        // 当界面中所有的表单验证都成功的时候 就会执行这个 方法
        // 一般用跟后端进行数据交互 
        // 发送ajax请求
        console.log(this.successList[0].value);
        console.log(this.successList[1].value);
        console.log(this.successList[2].value);
        $.ajax({
            url: '../api/register.php',
            method: 'post',
            data: {
                username: this.successList[0].value,
                tel: this.successList[1].value,
                password: this.successList[2].value
            },
            dataType: 'json',
            async: true,
            success: function (res) {
                console.log(res);
                if (res.code == 1) {
                    if (confirm('注册成功,请登录') == true) {
                        // location.href = "http://facai.com/PHP/Shop163/html/index.html";
                        $('#login').hide();
                        return;
                    }
                }
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
});