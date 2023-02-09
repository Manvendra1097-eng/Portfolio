const dynamic_text = document.getElementById("dynamic-text");

const paraes = ["Software Engineer...", "Developer...", "Programmer..."];

const m_btn = document.querySelector(".m-btn");
const c_btn = document.querySelector(".c-btn");
const m_nav = document.querySelector(".m-nav");

// pointer to track para character
let paraLength = 0;

// pointer to tract index of para from paraes array
let paraIndex = 0;

// function to print para character by character
const printPara = (para) => {
  if (paraLength < para.length) {
    dynamic_text.textContent += para.charAt(paraLength);
    paraLength++;
    setTimeout(() => {
      printPara(para);
    }, 150);
  } else {
    clearPara(para);
  }
};

// function to clear para character by character
const clearPara = (para) => {
  if (paraLength > -1) {
    let newPara = "";
    for (let idx = 0; idx < paraLength - 1; idx++) {
      newPara += para.charAt(idx);
    }
    dynamic_text.textContent = newPara;
    paraLength--;
    setTimeout(() => {
      clearPara(para);
    }, 75);
  } else {
    paraIndex = ++paraIndex % paraes.length;
    printPara(paraes[paraIndex]);
  }
};

// invocking print para function
printPara(paraes[paraIndex]);

// close menu

const closeMenu = () => {
  m_nav.classList.remove("block");
  m_nav.classList.add("hidden");
  m_btn.classList.remove("hidden");
  c_btn.classList.add("hidden");
};
const m_navs = Array.from(m_nav.children);
m_navs.forEach((nav) => nav.addEventListener("click", closeMenu));

m_btn.addEventListener("click", () => {
  m_nav.classList.remove("hidden");
  m_nav.classList.add("block");
  m_btn.classList.add("hidden");
  c_btn.classList.remove("hidden");
});

c_btn.addEventListener("click", () => {
  m_nav.classList.add("hidden");
  m_nav.classList.remove("block");
  m_btn.classList.remove("hidden");
  c_btn.classList.add("hidden");
});
