import { ItemName } from "./Factory";
import ItemFactory from "./ItemFactory";

const factory = new ItemFactory();

const domOutput = document.querySelector("textarea");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    const itemName = (event.target as HTMLElement).innerHTML;

    const item = factory.create(itemName as ItemName);
    if (item) {
      domOutput.value += `\n${item.use()}`;
    } else {
      domOutput.value += `\n${itemName}을 사용할수가 없습니다! ㅠ_ㅠ`;
    }

    domOutput.scrollTop = domOutput.scrollHeight;
  })
);
