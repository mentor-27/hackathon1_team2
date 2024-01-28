import { Menu } from './core/menu';
import { CONTEXT_MENU, INPUT_CONTEXT_MENU } from '@/data/const';

export class ContextMenu extends Menu {
  #typeContextMenu;
  constructor(selector, typeContexMenu) {
    super(selector);
    this.init();
    this.#typeContextMenu = typeContexMenu;
  }

  init() {
    document.addEventListener('contextmenu', event => {
      switch (this.#typeContextMenu) {
        case CONTEXT_MENU:
          event.preventDefault();
          if (!event.target.closest('.text_input')) {
            this.open(event);
          }
          break;
        case INPUT_CONTEXT_MENU:
          event.preventDefault();
          if (event.target.closest('.text_input')) {
            this.open(event);
          }
          break;
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
    this.el.addEventListener('click', event => {
      const { type } = event.target.dataset;
      if (type === module.type) {
        module.trigger();
        this.close();
      }
    });
  }
}
