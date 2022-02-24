"use strict";

//=====SLIDER=====
//.events
$(document).ready(function () {
  $(".events").slick({
    //!!!!!!!!!!!!!!!!!!!!
    //variableWidth: true,
    slidesToShow: 3,
    //slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    adaptiveHeight: true,
    //!!!!!!!!!!!!!!!!!!!!!!
    initialSlide: 1,
    speed: 1100,
    arrows: true,
    //infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    draggable: true,
    //touchMove: false,
    //waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1111,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

//================
//PLAYER_CONST
const tracks_music_list = document.querySelector(".tracks_music_list");
const music_list_item_link = document.querySelector(
  ".tracks_music_list_item_link"
);
const tracks_array = [
  "http://rocknation.su/upload/mp3/Deftones/2012%20%20-%20%20Koi%20No%20Yokan/10.%20Goon%20Squad.mp3",
  "http://rocknation.su/upload/mp3/Deftones/2012%20%20-%20%20Koi%20No%20Yokan/05.%20Entombed.mp3",
  "http://rocknation.su/upload/mp3/Deftones/2012%20%20-%20%20Koi%20No%20Yokan/08.%20Gauze.mp3",
  "http://rocknation.su/upload/mp3/Deftones/2000%20-%20White%20Pony/10.%20Change%20(In%20The%20House%20Of%20Flies).mp3",
  "http://rocknation.su/upload/mp3/Deftones/2010%20-%20Diamond%20Eyes/01.%20Diamond%20Eyes.mp3",
  "http://rocknation.su/upload/mp3/Deftones/2010%20-%20Diamond%20Eyes/08.%20Sextape.mp3",
];
//VOLUME
const audio = document.querySelectorAll("audio");
for (let i = 0; i < audio.length; i++) {
  audio[i].volume = 0.25;
  audio[i].addEventListener("play", musicStop);
}

function musicStop(event) {
  if (event.target == audio[0]) {
    audio[1].pause();
  } else {
    audio[0].pause();
  }
}

//PLAYER
tracks_music_list.addEventListener("click", musicChange);
function musicChange(event) {
  event.preventDefault();
  if (event.target.closest(".tracks_music_list_item_link")) {
    let list_item = document.querySelectorAll(".tracks_music_list_item_link");
    let track = event.target;
    for (let i = 0; i < list_item.length; i++) {
      if (track == list_item[i]) {
        let preaudio = document.querySelector(".header-track");
        preaudio.pause();
        let audio = document.querySelector(".tracks_music_track");
        if (!list_item[i].classList.contains("color_main")) {
          audio.src = tracks_array[i];
          audio.play();
          list_item[i].classList.add("color_main");
          list_item[i].classList.remove("textt");
        } else {
          //audio.pause();
        }
      } else {
        if (list_item[i].classList.contains("color_main")) {
          list_item[i].classList.remove("color_main");
          list_item[i].classList.add("textt");
        }
      }
    }
  } else {
    //console.log("not track list targeting");
  }
}

//SCROLLUP
$(function () {
  // при нажатии на кнопку scrollup
  $(".scrollup").click(function () {
    // переместиться в верхнюю часть страницы
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      10
    );
  });
});
// при прокрутке окна (window)
$(window).scroll(function () {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop() > 400) {
    // то сделать кнопку scrollup видимой
    $(".scrollup").fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $(".scrollup").fadeOut();
  }
});
