window.onload = function(){
    setInterval(countTime, 1000);
    function countTime(){
        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var clock = document.getElementById("timer");
        if(hour < 10) hour = '0' + hour;
        if(min < 10) min = '0' + min;
        if(sec < 10) sec = '0' + sec;
        clock.innerHTML = hour + ":" + min + ":" + sec;
    }
}

function clicked(){
    alert("Cái form này chỉ để cho đẹp thôi hehe ^^");
}

function aboutme(){
    var info = 'Name:  Nguyễn Ngọc Hưng \n'
            +  'Email: nguyenngochung.ncth@gmail.com\n'
            +  'MSSV:  20183759\n'
            +  'Lớp: IT2-02\n'
            +  'Khóa: 63-HUST';
    alert(info);
}