import Facade from "./Facade";

const domInput = document.querySelector("input");
const domButton = document.querySelector("button");
const domResult = document.querySelector(".result");

const facade = new Facade();

domButton.addEventListener("click", () => {
  const name = domInput.value;

  facade.queryName(
    name,
    () => {
      domInput.value = "(조회 중...)";
      domButton.disabled = true;
    },
    () => {
      domInput.value = name;
      domButton.disabled = false;
    },
    domResult
  );
});
