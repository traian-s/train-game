import { LOG_MESSAGE } from 'store/types/log';

export const logMessage = message => ({ type: LOG_MESSAGE, payload: message });
