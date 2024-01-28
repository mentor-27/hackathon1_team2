import { Menu } from './core/menu';
import {CONTEXT_MENU, INPUT_CONTEXT_MENU} from "@/data/const";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }

  init(modules, typeContextMenu) {
    document.addEventListener('contextmenu', event => {
      switch (typeContextMenu)
      {
        case CONTEXT_MENU:
          event.preventDefault();
          if(!event.target.closest('.text_input'))
          {
            this.open(event);
          }
          break;
        case INPUT_CONTEXT_MENU:
          event.preventDefault();
          if(event.target.closest('.text_input'))
          {
            this.open(event);
          }
          break;
        default:
          break;
      }
    });

    this.el.addEventListener('click', event => {
      const { type } = event.target.dataset;
      if (type) {
        const currentItem = modules.find(module => module.type === type);
        currentItem.trigger();
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
