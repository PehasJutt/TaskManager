import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import themeSlice from './reducers/theme';
import sidebarHideSlice from './reducers/sidebarHide';
// import prodReducer from './reducers/product';
// import orderSlice from './reducers/orders';
// import notificationSlice from './reducers/notifications';

const reducers = combineReducers({
  theme: themeSlice,
  sidebar: sidebarHideSlice,
//   cart: cartSlice,
//   orders: orderSlice,
//   notifications: notificationSlice
});

const rootReducer = (state, action) => {
//   if (action.type === 'user/logout') {
//     state.cart = undefined;
//     state.user = undefined;
//   }
  return reducers(state, action);
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme', 'sidebar']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true
});

export default store;