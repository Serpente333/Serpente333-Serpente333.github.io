//FUNCTIONS
function devetkaResize(middleSize) {
    var devetka = document.getElementById('tim-devetka')
    if (middleSize === true) {
        devetka.innerHTML = 'Devetka'; 
        }
    else {
        devetka.innerHTML = 'Tim Devetka';
    }
}

function navIndicatorResize(windowSize) {
    if (windowSize < 768 ) {
    $('#nav-indicator').addClass('nav-indicator-show');
    $('#nav-indicator').html($('title').html());
    }
    
    else {
    $('#nav-indicator').removeClass('nav-indicator-show');
    $('#nav-indicator').html(''); 
    }
    
}

//RESIZE
$(window).resize(function() {

if (window.innerWidth < 995 & window.innerWidth > 768) {
    devetkaResize(true);
}
else {
    devetkaResize(false);
}
navIndicatorResize(window.innerWidth);
});  

//DOCUMENT LOAD
function loadHtml() {
    $('#navigation').load("../SupportHTML/Nav.html");
}

function setActive() {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1, url.length-5);
    $('#' + filename).addClass('active');
}

function checkDevetka() {
    if (window.innerWidth < 995 & window.innerWidth > 768) {
    devetkaResize(true);
    }
    else {
     devetkaResize(false);
    }
};

$(document).ready(function(){
   loadHtml();
   setTimeout(checkDevetka, 10);
   setTimeout(setActive, 10);
   setTimeout(navIndicatorResize, 10,window.innerWidth);
   console.log(window.innerWidth);
});


