import { Menu } from './core/menu';

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    this.init();
  }

  init() {
    document.addEventListener('contextmenu', event => {
      event.preventDefault();
      this.open(event);
    });
  }

  addListener(module) {
    this.el.addEventListener('click', event => {
      const { type } = event.target.dataset;
      if (type === module.type) {
        module.trigger();
        this.close();
      }
    });
  }

  open({ clientX, clientY }) {
    this.el.classList.add('open');
    const { height, width } = this.el.getBoundingClientRect();
    const x = clientX + width < innerWidth ? clientX : clientX - width;
    const y = clientY + height < innerHeight ? clientY : clientY - height;
    this.el.style.left = `${x}px`;
    this.el.style.top = `${y}px`;
  }

  close() {
    this.el.classList.remove('open');
    this.el.removeAttribute('style');
  }

  add(module) {
    this.el.insertAdjacentHTML('beforeend', module.toHTML());
  }
}
