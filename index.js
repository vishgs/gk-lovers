function whatsapp() {

    window.location.href = "https://chat.whatsapp.com/CQBH32gFDmPBawxpLVjo6i"

}

function telegram() {

    window.location.href = "https://t.me/gklovers"

}

function youtube() {

    window.location.href = "https://www.youtube.com/channel/UCIEY3UStz9E_w8mSXVfV5pQ"

}

function blog() {

    window.location.href = "https://www.gklovers.com/"

}

function app() {

    window.location.href = "https://play.google.com/store/apps/details?id=com.dockode.rental.gklovers"

}

function changeColor() {

    document.getElementById("navbarSupportedContent").style.background = "white";
    document.getElementById("navbarSupportedContent").style.padding = "10px";
    
    window.onresize = function () {

        if (window.innerWidth > 992) {

            document.getElementById("navbarSupportedContent").style.background = "transparent";

        } else {

            document.getElementById("navbarSupportedContent").style.background = "white";
            document.getElementById("navbarSupportedContent").style.padding = "10px";

        }
    }
}