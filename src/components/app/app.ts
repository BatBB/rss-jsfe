import { IDrawNews, IDrawSources } from "../interfaces/interfacesAppView";
import validHTMLElement from "../view/validHTMLElement";
import AppController from "../controller/controller";
import AppView from "../view/appView";

class App {
  constructor(
    private controller = new AppController(),
    private view = new AppView()
  ) {}
  
  start() {

    this.view.drawAlphabet();

    validHTMLElement(document.querySelector(".alphabet"))
      .addEventListener("click", (e: Event) => {
        const target = <HTMLElement>e.target;

        if (target.classList.contains('letter')) {
          const letter = <string>target.textContent?.trim();
          this.controller.getSources((data: IDrawSources) => this.view.drawSources(data, letter));
        }
      }
      );

    validHTMLElement(document.querySelector(".sources"))
      .addEventListener("click", (e) =>
        this.controller.getNews(e, (data: IDrawNews) => this.view.drawNews(data))
      );
  }
}

export default App;
