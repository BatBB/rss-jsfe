export default function validHTMLElement(element: HTMLElement | null): HTMLElement  {
  if (!element) throw Error('Is not HTMLElement');
  return element;
}