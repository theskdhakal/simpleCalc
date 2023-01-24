const display = document.querySelector(".display");
const btns = document.querySelectorAll(".button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "";

        break;

      case "C":
        display.innerText = display.innerText.slice(0, -1);
        break;

      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }

        break;

      case "0":
        if (display.innerText === "") {
          return;
        } else {
          display.innerText += e.target.innerText;
        }
        break;

      default:
        display.innerText += e.target.innerText;
    }
  });
});
