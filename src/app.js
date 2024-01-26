import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';
import './styles.css';

const randomBackground = new BackgroundModule(
  'random_background',
  'Поменять цвет'
);
const context = new ContextMenu('#menu');
context.add(randomBackground);
randomBackground.trigger();
