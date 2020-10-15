import { LOG_MESSAGE } from 'store/types/log';

const initialState = {
  messages: ['Game Started!']
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_MESSAGE:
      return { ...state.messages, payload };
    default:
      return state;
  }
};
