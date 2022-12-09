import { IDrawNews, IDrawSources } from "components/interfaces/interfacesAppView";
import News from "./news/news";
import Sources from "./sources/sources";

class AppView {
  constructor(
    private news: News = new News(),
    private sources: Sources = new Sources()
  ) {}

  drawNews(data: IDrawNews) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: IDrawSources) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
