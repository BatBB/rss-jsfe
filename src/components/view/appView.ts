import { IDrawNews, IDrawSources } from "components/interfaces/interfacesAppView";
import Alphabet from "./alphabet/alphabet";
import News from "./news/news";
import Sources from "./sources/sources";

class AppView {
  
  constructor(
    private news: News = new News(),
    private sources: Sources = new Sources(),
    private alphabet: Alphabet = new Alphabet()
    ) {}
    
  drawNews(data: IDrawNews) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }
  
  drawSources(data: IDrawSources, letter: string) {
    const filterData = data.sources.filter((value) => value.name[0].toLocaleUpperCase() === letter);
    this.sources.draw(filterData);
  }
  
  drawAlphabet() {
    this.alphabet.draw();
  }
}

export default AppView;
