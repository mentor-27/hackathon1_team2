import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';
import './styles.css';

// const modules = [BackgroundModule, ClicksModule, ShapeModule];
const context = new ContextMenu('#menu');

// modules.forEach(module => {
//   context.add(module);
// });
