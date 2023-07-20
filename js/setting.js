const color = [
  {
    name: "pink",
    color: "#fb8393",
    url: "css/responsive.css",
  },

  {
    name: "blue",
    color: "#3e99f4",
    url: "css/blue.css",
  },

  {
    name: "light green",
    color: "#0dcdbd",
    url: "css/light-green.css",
  },

  {
    name: "red",
    color: "#cc3b3b",
    url: "css/red.css",
  },

  {
    name: "yellow",
    color: "#ff9800",
    url: "css/yellow.css",
  },
];

$(document).ready(function () {
  setColors();
  function setColors() {
    for (let i = 0; i < color.length; i++) {
      const span = document.createElement("span");
      span.style.backgroundColor = color[i].color;
      $(".colors").append(span);
    }
  }

  $(".colors span").click(function () {
    const index = $(this).index();
    $(".alternate-style").attr("href", color[index].url);
  });

  // theme light dark mode
  $(".theme-mode").change(function () {
    if ($(this).val() == "light") {
      $("body").removeClass("dark");
    } else {
      $("body").addClass("dark");
    }
  });

  // toggle setting

  $(".s-toggle-btn").click(function () {
    $(".setting").toggleClass("open");
  });
});
