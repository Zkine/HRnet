import { configureStore } from "@reduxjs/toolkit";

let state = {
  value: null,
  list: [],
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "ADD_LISTE": {
      const userData = [...currentState.list, action.payload];
      console.log(userData[0]);
      console.log(state.list);
      return {
        ...currentState,
        list: userData,
      };
    }
    default:
      return currentState;
  }
};

export const store = configureStore({
  preloadedState: state,
  reducer,
});
