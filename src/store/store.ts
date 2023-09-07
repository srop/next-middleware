import { combineReducers, configureStore, AnyAction } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import users from './usersSlice'
import counter from './counterSlice'
import { useDispatch } from "react-redux";
const combinedReducer = combineReducers({
  counter,
  users,
});

const masterReducer  = (state:any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};


export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });


  type Store = ReturnType<typeof makeStore>;
// export const store  = createWrapper(makeStore, { debug: true });

// export type RootState = ReturnType<Store['getState']>;
// export type AppDispatch = Store['dispatch'];
// 
// export const wrapper = createWrapper(makeStore, { debug: true });

export type RootState = ReturnType<Store['getState']>;
export type AppDispatch =  Store['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const store = configureStore({
  reducer: combinedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
