function goRight (bretagne) {
    document.getElementById(bretagne).scrollLeft += 304;
};
function goLeft (normandie) {
    document.getElementById(normandie).scrollLeft -= 304;
};

window.onload = function () {
    console.log(Math.floor(Math.random() * 10));
    var images = ['AdambyEve.jpg', 'chateaudsciel.jpg', 'arrietty.jpg', 'princesse.jpg', 'lamaison.jpg', 'bojack.jpg', 'oreille.jpg', 'kiki.jpg', 'nausicaa.jpg', 'gospel.jpg'];
    var action = ['archive.jpg', 'bebop.jpg', 'carbon.jpg', 'colony.jpg', 'flash.jpg', 'snow.jpg', 'star.jpg', 'stranger.jpg', 'supergirl.jpg', 'titans.jpg'];
    var hard = ['affranchis.jpg', 'arnaque.jpg', 'django.jpg', 'gantz.jpg', 'manonfire.jpg', 'polar.jpg', 'punisher.jpg', 'revenant.jpg', 'samourai.jpg', 'scarface.jpg'];
    var humor = ['agentspresquesecrets.jpg', 'backtothefuture.jpg', 'chapardeur.jpg', 'crazystupidlove.jpg', 'johnnyenglish.jpg', 'knightday.jpg', 'loganluck.jpg', 'mib.jpg', 'shrek.jpg', 'snatch.jpg'];

    let i= 0;


    var MyList = document.getElementById("animation")
    while (i < images.length) {
        i++;
        MyList.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./Images/Netimages/Animation/' + images[Math.floor(Math.random() * images.length)] + '" class="rounded"></a></div></div>')
    }

    i=0

    var SF = document.getElementById("act")
    while (i < action.length) {
        i++;
        SF.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./Images/Netimages/SériesUS/' + action[Math.floor(Math.random() * action.length)] + '" class="rounded"></a></div></div>')
    }

    i=0

    var violent = document.getElementById("shock")
    while (i < action.length) {
        i++;
        violent.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./Images/Netimages/Films%20Violents/' + hard[Math.floor(Math.random() * hard.length)] + '" class="rounded"></a></div></div>')
    }

    i=0

    var humour = document.getElementById("comic")
    while (i < action.length) {
        i++;
        humour.innerHTML += ('afterend', '<div><div class="w-80"><a href="#"><img src="./Images/Netimages/Comedy/' + humor[Math.floor(Math.random() * humor.length)] + '" class="rounded"></a></div></div>')
    }

    $(function () {
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 120) {
                $("#bar").css("backgroundColor", "black");
            } else if ($(window).scrollTop() > 20){
                $("#bar").css("backgroundColor", "#181818");
            }
            else {
                $("# sbar").css("backgroundColor", "transparent");
            }
        });
    });

}


