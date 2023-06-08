// PopUp Section

let popup = document.getElementById("popup");


function openPopup(){
    popup.classList.add("open-popup")
}

function closePopup() {
    popup.classList.remove("open-popup")
}

document.addEventListener('DOMContentLoaded', function () {
    var mixer = mixitup('.product-filter-items');
})

// Review slide //

var swiper = new Swiper(".reviews-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Shop Section

var parent1 = document.querySelector('#modal-parent1');

document.querySelector('#button1').addEventListener('click', () => {
    parent1.style.display = 'block';
    document.getElementById("box1").style.backgroundColor = "#79F8F8";
    document.getElementById("p1").style.color = "blue";
});
document.querySelector('#button-close1').addEventListener('click', () => {
    parent1.style.display = 'none';
});

var parent2 = document.querySelector('#modal-parent2');
document.querySelector('#button2').addEventListener('click', () => {
    parent2.style.display = 'block';
    document.getElementById("box2").style.backgroundColor = "#FFCB60";
    document.getElementById("p2").style.color = "#0000FF";
})
document.querySelector('#button-close2').addEventListener('click', () => {
    parent2.style.display = 'none';
});

var parent3 = document.querySelector('#modal-parent3');
document.querySelector('#button3').addEventListener('click', () => {
    parent3.style.display = 'block';
    document.getElementById("box3").style.backgroundColor = "#01D758";
    document.getElementById("p3").style.color = "#99512B";
})
document.querySelector('#button-close3').addEventListener('click', () => {
    parent3.style.display = 'none';
});

var parent4 = document.querySelector('#modal-parent4');
document.querySelector('#button4').addEventListener('click', () => {
    parent4.style.display = 'block';
    document.getElementById("box4").style.backgroundColor = "#E8D630";
    document.getElementById("p4").style.color = "#785E2F";
})
document.querySelector('#button-close4').addEventListener('click', () => {
    parent4.style.display = 'none';
});

var parent5 = document.querySelector('#modal-parent5');
document.querySelector('#button5').addEventListener('click', () => {
    parent5.style.display = 'block';
    document.getElementById("box5").style.backgroundColor = "#BBAE98";
    document.getElementById("p5").style.color = "#F0FFFF"
})
document.querySelector('#button-close5').addEventListener('click', () => {
    parent5.style.display = 'none';
});

var parent6 = document.querySelector('#modal-parent6');
document.querySelector('#button6').addEventListener('click', () => {
    parent6.style.display = 'block';
    document.getElementById("box6").style.backgroundColor = "#E2BC74";
    document.getElementById("p6").style.color = "#614E1A"
})
document.querySelector('#button-close6').addEventListener('click', () => {
    parent6.style.display = 'none';
});

var parent7 = document.querySelector('#modal-parent7');
document.querySelector('#button7').addEventListener('click', () => {
    parent7.style.display = 'block';
    document.getElementById("box7").style.backgroundColor = "#BBD2E1";
    document.getElementById("p7").style.color = "#1560BD"
})
document.querySelector('#button-close7').addEventListener('click', () => {
    parent7.style.display = 'none';
});

var parent8 = document.querySelector('#modal-parent8');
document.querySelector('#button8').addEventListener('click', () => {
    parent8.style.display = 'block';
    document.getElementById("box7").style.backgroundColor = "#965578";
    document.getElementById("p7").style.color = "	#730800"
})
document.querySelector('#button-close8').addEventListener('click', () => {
    parent8.style.display = 'none';
});

