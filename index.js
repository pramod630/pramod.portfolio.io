var btn = document.querySelector('.toggle');
var btnst = true;
btn.onclick = function () {
  if (btnst == true) {
    document.querySelector('.toggle span').classList.add('toggle');
    document.getElementById('sidebar2').classList.add('sidebar2show');
    btnst = false;
  } else if (btnst == false) {
    document.querySelector('.toggle span').classList.remove('toggle');
    document.getElementById('sidebar2').classList.remove('sidebar2show');
    btnst = true;
  }
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {

    tablink.classList.remove("active-links");
  }
  for (tabcontent of tabcontents) {

    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");

}


