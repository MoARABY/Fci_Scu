fetch("/js/texts.json")
  .then((response) => response.json())
  .then((data) => {
    main(data);
  });

let lang = localStorage.getItem("lang") || "ar";
const TransBtn = document.querySelector("#trans");
function main(data) {
  setPageLang();

  TransBtn.addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";

    setPageLang();
  });
  function setPageLang() {
    localStorage.setItem("lang", lang);
    TransBtn.innerHTML = lang === "ar" ? "EN" : "عربي";
    if (lang === "ar") {
      TransBtn.style.padding = "0 0.5rem 0 0";
      document.body.style.direction = "rtl";
    } else {
      document.body.style.direction = "ltr";
    }
    for (const key in data) {
      dfs(data[key]);
    }
  }

  function dfs(obj) {
    if (obj?.HTMLID) {
      let element = document.getElementById(obj.HTMLID);
      if (element) {
        element.innerHTML = obj[lang];
      }
    } else {
      // prevent looping through strings and nulls
      if ((typeof obj === "object" && obj !== null) || Array.isArray(obj))
        for (const k in obj) {
          dfs(obj[k]);
        }
    }
  }
}
