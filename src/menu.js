import { Menu } from './core/menu';

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
    document.addEventListener('contextmenu', event => {
      event.preventDefault();
      this.open(event);
    });
  }

  open({ clientX, clientY }) {
    const { height, width } = this.el.getBoundingClientRect();
    const x = clientX + width < innerWidth ? clientX : clientX - width;
    const y = clientY + height < innerHeight ? clientY : clientY - height;
    this.el.style.left = `${x}px`;
    this.el.style.top = `${y}px`;
    this.el.classList.add('open');
  }

  close() {
    this.el.classList.remove('open');
  }

  add(module) {
    this.el.insertAdjacentHTML('beforeend', module.toHTML());
  }
}
