import NewsData from "components/interfaces/INewsData";
import ISources from "components/interfaces/ISources";
import News from "./news/news";
import Sources from "./sources/sources";

interface IDrawNews {
  articles: NewsData[];
}
interface IDrawSources{
  sources: ISources[];
}

export class AppView {
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
