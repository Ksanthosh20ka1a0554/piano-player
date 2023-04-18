var a = new Audio('a.wav');
var w = new Audio('w.wav');
var s = new Audio('s.wav');
var e = new Audio('e.wav');
var d = new Audio('d.wav');
var r = new Audio('r.wav');
var f = new Audio('f.wav');
var t = new Audio('t.wav');
var g = new Audio('g.wav');
var y = new Audio('y.wav');
var h = new Audio('h.wav');
var u = new Audio('u.wav');
var j = new Audio('j.wav');
var i = new Audio('i.wav');
var k = new Audio('k.wav');
var o = new Audio('o.wav');
var l = new Audio('l.wav');
document.querySelector('#a').addEventListener('click',function s(event){
    a.play();
    $('#a').fadeOut(100);
    $('#a').fadeIn(100);
    
})
document.querySelector('#w').addEventListener('click',function ply(event){
    w.play();
    $('#w').addClass("black-pressed");
    setTimeout(function() {
        $('#w').removeClass("black-pressed");;
        }, 200);
})
document.querySelector('#s').addEventListener('click',function ply(event){
    s.play();
    $('#s').fadeOut(100);
    $('#s').fadeIn(100);
})
document.querySelector('#e').addEventListener('click',function ply(event){
    e.play();
    $('#e').addClass("black-pressed");
    setTimeout(function() {
        $('#e').removeClass("black-pressed");;
        }, 200);
})
document.querySelector('#d').addEventListener('click',function ply(event){
    d.play();
    $('#d').fadeOut(100);
    $('#d').fadeIn(100);
})
document.querySelector('#r').addEventListener('click',function ply(event){
    r.play();
    $('#r').addClass("black-pressed");
    setTimeout(function() {
        $('#r').removeClass("black-pressed");;
        }, 200);
})
document.querySelector('#f').addEventListener('click',function ply(event){
    f.play();
    $('#f').fadeOut(100);
    $('#f').fadeIn(100);
})
document.querySelector('#t').addEventListener('click',function ply(event){
    t.play();
    $('#t').addClass("black-pressed");
    setTimeout(function() {
        $('#t').removeClass("black-pressed");;
        }, 200);
})
document.querySelector('#g').addEventListener('click',function ply(event){
    g.play();
    $('#g').fadeOut(100);
    $('#g').fadeIn(100);
})
document.querySelector('#y').addEventListener('click',function ply(event){
    y.play();
    $('#y').addClass("black-pressed");
    setTimeout(function() {
        $('#y').removeClass("black-pressed");;
        }, 200);
})
document.querySelector('#h').addEventListener('click',function ply(event){
    h.play();
    $('#h').fadeOut(100);
    $('#h').fadeIn(100);
})
document.querySelector('#u').addEventListener('click',function ply(event){
    u.play();
    $('#u').addClass("black-pressed");
    setTimeout(function() {
        $('#u').removeClass("black-pressed");;
        }, 200);
})
document.querySelector('#j').addEventListener('click',function ply(event){
    j.play();
    $('#j').fadeOut(100);
    $('#j').fadeIn(100);
})
document.querySelector('#i').addEventListener('click',function ply(event){
    i.play();
    $('#i').addClass("black-pressed");
    setTimeout(function() {
        $('#i').removeClass("black-pressed");;
        }, 200);
})
document.querySelector('#k').addEventListener('click',function ply(event){
    k.play();
    $('#k').fadeOut(100);
    $('#k').fadeIn(100);
})
document.querySelector('#o').addEventListener('click',function ply(event){
    o.play();
    $('#o').addClass("black-pressed");
    setTimeout(function() {
        $('#o').removeClass("black-pressed");;
        }, 200);
})
document.querySelector('#l').addEventListener('click',function ply(event){
    l.play();
    $('#l').fadeOut(100);
    $('#l').fadeIn(100);
})
document.addEventListener("keypress", function(event) {

    makeSound(event.key);
  
  });
  
  
  function makeSound(key) {
  
    switch (key) {

        case "a":
            a.play();
            $('#a').fadeOut(100);
            $('#a').fadeIn(100);
            break;
  
        case "w":
            w.play();
            $('#w').addClass("black-pressed");
            setTimeout(function() {
                $('#w').removeClass("black-pressed");;
              }, 200);
            break;

        case "s":
            s.play();
            $('#s').fadeOut(100);
            $('#s').fadeIn(100);
            break;

        case "e":
            e.play();
            $('#e').addClass("black-pressed");
            setTimeout(function() {
                $('#e').removeClass("black-pressed");;
                }, 200);
            break;

        case "d":
            d.play();
            $('#d').fadeOut(100);
            $('#d').fadeIn(100);
            break;

        case "r":
            r.play();
            $('#r').addClass("black-pressed");
            setTimeout(function() {
                $('#r').removeClass("black-pressed");;
                }, 200);
                break;
        
        case "f":
            f.play();
            $('#f').fadeOut(100);
            $('#f').fadeIn(100);
            break;

        case "t":
            t.play();
            $('#t').addClass("black-pressed");
            setTimeout(function() {
                $('#t').removeClass("black-pressed");;
                }, 200);
            break;

        case "g":
            g.play();
            $('#g').fadeOut(100);
            $('#g').fadeIn(100);
            break;

        case "y":
            y.play();
            $('#y').addClass("black-pressed");
            setTimeout(function() {
                $('#y').removeClass("black-pressed");;
                }, 200);
            break;

        case "h":
            h.play();
            $('#h').fadeOut(100);
            $('#h').fadeIn(100);
            break;

        case "u":
            u.play();
            $('#u').addClass("black-pressed");
            setTimeout(function() {
                $('#u').removeClass("black-pressed");;
                }, 200);
            break;
            
        case "j":
            j.play();
            $('#j').fadeOut(100);
            $('#j').fadeIn(100);
            break;

        case "i":
            i.play();
            $('#i').addClass("black-pressed");
            setTimeout(function() {
                $('#i').removeClass("black-pressed");;
                }, 200);
            break;

        case "k":
            k.play();
            $('#k').fadeOut(100);
            $('#k').fadeIn(100);
            break;

        case "o":
            o.play();
            $('#o').addClass("black-pressed");
            setTimeout(function() {
                $('#o').removeClass("black-pressed");;
                }, 200);
            break;

        case "l":
            l.play();
            $('#l').fadeOut(100);
            $('#l').fadeIn(100);
            break;
        
         
      default: console.log(key);
  
    }
  }
