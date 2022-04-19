function ModalOpen(imgs) {
    var modalImg = document.getElementById("modalImg");
    var menuIcon = document.getElementById("Sidebar");
    
    

    modalImg.src = imgs.src;
    modalImg.parentElement.style.display = "block";
    menuIcon.parentElement.style.display = "none";

    $('body').addClass('stop_scrolling');
    $('footer').addClass('no_show');
}

function ModalClose(imgs){
    var modalImg = document.getElementById("modalImg");
    var menuIcon = document.getElementById("Sidebar");

    modalImg.src = imgs.src;
    modalImg.parentElement.style.display = "none";
    menuIcon.parentElement.style.display = "block";

    $('body').removeClass('stop_scrolling');
    $('footer').removeClass('no_show');
}

function modalCaption(){
    var x = document.getElementById("cpt1").alt;
    document.getElementById("cpt_text").innerHTML = x;
}
