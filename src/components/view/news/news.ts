import "./news.css";
import validHTMLElement from "../validHTMLElement";

interface NewsData {
  urlToImage: string;
  author: string;
  publishedAt: string;
  title: string;
  description: string;
  url: string;
  source: {name: string}
}

class News {
  draw(data: NewsData[]) {
    const news =
      data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

    news.forEach((item, idx) => {
      const newsClone = <HTMLElement>newsItemTemp.content.cloneNode(true);

      if (idx % 2) validHTMLElement(newsClone.querySelector(".news__item")).classList.add("alt");

      validHTMLElement(newsClone.querySelector(
        ".news__meta-photo"
      )).style.backgroundImage = `url(${
        item.urlToImage || "img/news_placeholder.jpg"
      })`;
      validHTMLElement(newsClone.querySelector(".news__meta-author")).textContent =
        item.author || item.source.name;
      validHTMLElement(newsClone.querySelector(
        ".news__meta-date"
      )).textContent = item.publishedAt
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("-");

      validHTMLElement(newsClone.querySelector(".news__description-title")).textContent =
        item.title;
      validHTMLElement(newsClone.querySelector(".news__description-source")).textContent =
        item.source.name;
      validHTMLElement(newsClone.querySelector(".news__description-content")).textContent =
        item.description;
      validHTMLElement(newsClone
        .querySelector(".news__read-more a"))
        .setAttribute("href", item.url);

      fragment.append(newsClone);
    });

    validHTMLElement(document.querySelector(".news")).innerHTML = "";
    validHTMLElement(document.querySelector(".news")).appendChild(fragment);
  }
}

export default News;
