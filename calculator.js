let text = document.querySelector(".text");
let btns = document.querySelectorAll(".btn");

for (let btn of btns) {
  btn.addEventListener("click", btnpress);
}

text.addEventListener("keypress", function (event) {
  event.preventDefault();
  setTimeout(() => {
    text.value = "Use Buttons";
    text.style.fontSize = "2.5rem";
    text.classList.add("red");
  }, 200);
  setTimeout(() => {
    text.value = "";
    text.style.fontSize = "3rem";
    text.classList.remove("red");
  }, 1000);
});

function btnpress() {
  let BtnText = this.innerHTML;

  if (BtnText == "Ac") {
    text.value = "";
  } else if (BtnText == "Del") {
    text.value = text.value.slice(0, -1);
  } else if (BtnText == "=") {
    try {
      if (text.value) {
        text.value = eval(text.value);
        text.classList.add("green");
        setTimeout(() => {
          text.classList.remove("green");
        }, 800);
      }
    } catch (Error) {
      text.value = "Error";
      text.classList.add("red");
      setTimeout(() => {
        text.value = "";
        text.classList.remove("red");
      }, 500);
    }
  } else {
    let lastChar = text.value.slice(-1);
    if (
      ["+", "-", "", "/", "%"].includes(lastChar) &&
      ["+", "-", "", "/", "%"].includes(BtnText)
    ) {
      return;
    }

    text.value += BtnText;
  }
}
