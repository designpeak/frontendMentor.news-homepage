function openMenu() {
    $("#sideMenu").css("width", "100%").css("display", "flex");

}

function closeMenu() {
    $("#sideMenu").css("width", "0%").css("display", "none");

}


$(document).ready(function () {
    $("#menuOpen").click(function () {
        openMenu();
    });
    $("#menuClose").click(function () {
        closeMenu();
    });
}); 