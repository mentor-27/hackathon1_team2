import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { CustomMessage } from './modules/customMessage.module';
import { ShapeModule } from './modules/shape.module';
import { Timer } from './modules/timer.module';
import './styles.css';

const customMessage = new CustomMessage('custom_message', 'Вызвать сообщение');
const randomBackground = new BackgroundModule(
	'random_background',
	'Поменять цвет'
);
const timer = new Timer('timer', 'Установить таймер');
const modules = [customMessage, randomBackground, timer];
const contextMenu = new ContextMenu('#menu');

modules.forEach(module => {
	contextMenu.add(module);
})

contextMenu.el.addEventListener('click', event => {
	const { type } = event.target.dataset;
	if (type) {
		const currentItem = modules.find(module => module.type === type);
		currentItem.trigger();
		contextMenu.close();
	}
});
