import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { CustomMessage } from './modules/customMessage.module';
import { ShapeModule } from './modules/shape.module';
import './styles.css';

const customMessage = new CustomMessage('custom_message', 'Вызвать сообщение');
const context = new ContextMenu('#menu');
context.add(customMessage);
