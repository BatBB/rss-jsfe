import createElement from '../../utils/createElement';

export default function renderMessage(): HTMLElement {
  const messageContainer = createElement('div', 'message');
  const template = `<p class='message-text'>
  <span class='message-car'></span> 
  won the race with the fastest time 
  <span class='message-time'></span> s</p>`;
  messageContainer.innerHTML = template;
  return messageContainer;
}
