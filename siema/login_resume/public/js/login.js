let account = document.querySelector("#account"),
    logBut = document.querySelector(".logBut"),
    password = document.querySelector("#password");

logBut.onclick = function() {
    axios.post('/login', {
        account: account.value,
        password: password.value
    }).then((res) => {
        if(res.data.url){
            window.location=res.data.url
        }else{
            alert("账号或者密码错误，请通过正当的路径获取登录信息！")
        }
        
    }).catch((err) => {
        
    });
}