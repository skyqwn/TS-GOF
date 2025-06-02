import Image from "./Image";

export default class RealImage implements Image {
  private domLayout: HTMLDivElement = null;
  private domTitle: HTMLDivElement = null;
  private domImage: HTMLDivElement = null;
  private domLoading: HTMLDivElement = null;

  constructor(
    private title: string,
    private url: string,
    private parent: Element
  ) {
    this.domLayout = document.createElement("div");
    this.domLayout.classList.add("layout");
    this.parent.append(this.domLayout);

    this.domTitle = document.createElement("div");
    this.domTitle.classList.add("title");
    this.domTitle.innerText = this.title;
    this.domLayout.append(this.domTitle);

    this.domLoading = document.createElement("div");
    this.domLoading.classList.add("loading");
    this.domLoading.innerText = "Loading...";
  }

  append() {
    if (this.domImage) return;
    this.domImage = new Image();

    this.domLayout.append(this.domLoading);
    //@ts-ignore
    this.domImage.src = this.url;

    this.domImage.onload = () => {
      setTimeout(() => {
        this.domLayout.removeChild(this.domLoading);
        this.domLayout.append(this.domImage);
      }, Math.random() * 5000 + 3000);
    };
  }
}
