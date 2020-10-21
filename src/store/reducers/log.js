import { LOG_MESSAGE } from 'store/types/log';

const initialState = {
  messages: ['Welcome!']
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_MESSAGE:
      return { messages: [...state.messages, payload] };
    default:
      return state;
  }
};
