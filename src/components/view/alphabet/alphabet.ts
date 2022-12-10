import "./alphabet.css";
import validHTMLElement from "../validHTMLElement";

class Alphabet {
  draw(){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    const fragment = document.createDocumentFragment();
    const letterItemTemp = <HTMLTemplateElement>document.querySelector("#alphabetItemTemp");
    
    alphabet.split('').forEach((letter) => {
      const letterClone = <HTMLElement>letterItemTemp.content.cloneNode(true);
    
      validHTMLElement(letterClone.querySelector(".letter")).textContent = letter;
      fragment.append(letterClone);
    })
    
    validHTMLElement(document.querySelector(".alphabet")).append(fragment);}
    
  }

export default Alphabet;