


window.onscroll = function() {scrollFunction()};
    // khai báo hàm scrollFunction
    function scrollFunction() {
        // Kiểm tra vị trí hiện tại của con trỏ so với nội dung trang
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            //nếu lớn hơn 2000px thì hiện button
            document.getElementById("back-top").style.display = "block";
        } else {
             //nếu nhỏ hơn 20px thì ẩn button
            document.getElementById("back-top").style.display = "none";
        }
    }
    //gán sự kiện click cho button
    document.getElementById('back-top').addEventListener("click", function(){
        //Nếu button được click thì nhảy về đầu trang
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });