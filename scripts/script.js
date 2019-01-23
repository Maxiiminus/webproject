function test()  {
    alert("test");
}

var demo = document.getElementById('demo');

demo.addEventListener('click', changerCouleur());

function changerCouleur() {
    if (demo.style.color == "red") demo.style.color = "green";
    else demo.style.color = "red";
}