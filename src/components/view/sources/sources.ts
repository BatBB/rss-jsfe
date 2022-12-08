import "./sources.css";
import validHTMLElement from "../validHTMLElement";

interface ISources {
  name: string;
  id: string;
}

class Sources {
  draw(data: ISources[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = <HTMLTemplateElement>document.querySelector("#sourceItemTemp");

    data.forEach((item) => {
      const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true);

      validHTMLElement(sourceClone.querySelector(".source__item-name")).textContent = item.name;
      validHTMLElement(sourceClone
        .querySelector(".source__item"))
        .setAttribute("data-source-id", item.id);

      fragment.append(sourceClone);
    });

    validHTMLElement(document.querySelector(".sources")).append(fragment);
  }
}

export default Sources;
