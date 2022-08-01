import { blankScreen } from './lib/blankScreen';
import {injectJsError} from './lib/jsError';
import {injectXHR} from './lib/xhr';
import {timing} from './lib/timing';


injectJsError();
injectXHR();
blankScreen();
timing();