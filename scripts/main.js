import '../assets/style.css';
import '../assets/taskbar.css';
import '../assets/windowsMenu.css';
import '../assets/contentWindow.css';
await import ('./windowsMenu');
 import './folders';
await import ('./close');
import './maximize';
import './drag'
import { current_time } from "./showHour";