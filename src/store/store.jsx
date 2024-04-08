import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const state = {
  value: null,
  list: [],
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "ADD_LISTE": {
      const userData = [...currentState.list, action.payload];
      return {
        ...currentState,
        list: userData,
      };
    }
    default:
      return currentState;
  }
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const exportDefaultStore = () => {
  const store = configureStore({
    preloadedState: state,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  const persistor = persistStore(store);
  return { store, persistor };
};
