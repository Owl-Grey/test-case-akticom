selector.addEventListener("click", function () {
  if(selector_items.classList.contains("disable") && !select_img.classList.contains("rotator")){
    selector_items.classList.remove("disable");
    select_img.classList.add("rotator");
  }
  else{
    selector_items.classList.add("disable");
    select_img.classList.remove("rotator");
  }
})



var li = document.querySelectorAll('#ul li');
var city='';
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener('click', select);
}
function select() {
  for (var i = 0; i < li.length; i++) {
    li[i].classList.remove("selected");
  }
  this.classList.add("selected")
  city = this.innerHTML;
  open_card(city);
}


function open_card(ct) {

  if(info_card.classList.contains("disable_card")){
    info_card.classList.remove("disable_card");
  }
  console.log(ct != document.getElementById("title"))
  if(ct != document.getElementById("title")){
    info_card.classList.add("disable_card");
    setTimeout(() => info_card.classList.remove("disable_card"), 300);
  }
  setTimeout(change_contains, 200, ct);
  info_card.scrollIntoView({block: "center", behavior: "smooth"});
}

function change_contains(ct){
  document.getElementById("title").innerHTML=ct;
  document.getElementById("select_field").innerHTML=ct;
  switch (ct) {
    case "Самара":
    document.getElementById("sec_title").innerHTML="Самара картинка"
    document.getElementById("text").innerHTML="Здесь будет краткое описание того что изображено на картинке ... САМ"
    // document.getElementById("img").src=""
    break;
    case "Чапаевск":
    document.getElementById("sec_title").innerHTML="Чапаевск картинка"
    document.getElementById("text").innerHTML="Здесь будет краткое описание того что изображено на картинке ... ЧАП"
    // document.getElementById("img").src=""
    break;
    case "Нефтегорск":
    document.getElementById("sec_title").innerHTML="Нефтегорск картинка"
    document.getElementById("text").innerHTML="Здесь будет краткое описание того что изображено на картинке ... НФТ"
    // document.getElementById("img").src=""
    break;
  }
}

let open=false;
video.addEventListener("click", function () {
  console.log('click')
  popup.classList.remove("disable_popup");
  setTimeout(() => open=true, 300);
});

document.addEventListener('click', function (event) {
    if(!(popup.classList.contains("disable_popup")) && open==true){
      console.log(open)
      popup.classList.add("disable_popup");
      open=false;
    }
});



card_anchor.addEventListener("click", function () {
  selector.scrollIntoView({block: "center", behavior: "smooth"});
});
col_hov.addEventListener("click", function () {
  selector.scrollIntoView({block: "center", behavior: "smooth"});
});

info_anchor.addEventListener("click", function () {
  top_page.scrollIntoView({block: "center", behavior: "smooth"});
});
