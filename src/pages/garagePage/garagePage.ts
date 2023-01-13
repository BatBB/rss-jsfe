import Component from '../../components/component';

class GaragePage extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  render(): HTMLElement {
    return this.container;
  }
}
