import Article from "./Article";
import EditableDisplayArticle from "./EditableDisplayArticle";
import SimpleDisplayArticle from "./SimpleDisplayAricle";

const article = new Article(
  "디자인패턴",
  ["프론트엔드 개발", "퍼블리싱", "리액트", "타입스크립트", "넥스트제이에스"],
  "FRONT DEVELOPER"
);

const display = new SimpleDisplayArticle(article);
document.querySelector(".content").innerHTML = display.displayHtml();

document.querySelector(".edit-mode").addEventListener("change", (e) => {
  let display;

  if ((<HTMLInputElement>e.target).checked) {
    display = new EditableDisplayArticle(article);
  } else {
    display = new SimpleDisplayArticle(article);
  }

  document.querySelector(".content").innerHTML = display.displayHtml();
});
