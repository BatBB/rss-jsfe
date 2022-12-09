import { IDrawNews, IDrawSources } from "../interfaces/interfacesAppView";
import validHTMLElement from "../view/validHTMLElement";
import AppController from "../controller/controller";
import { AppView } from "../view/appView";

class App {
  constructor(
    private controller = new AppController(),
    private view = new AppView()
  ) {}

  start() {
    validHTMLElement(document
      .querySelector(".sources"))
      .addEventListener("click", (e) =>
        this.controller.getNews(e, (data: IDrawNews) => this.view.drawNews(data))
      );
    this.controller.getSources((data: IDrawSources) => this.view.drawSources(data));
  }
}

export default App;
