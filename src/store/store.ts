import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
 import users from './usersSlice'
import counter from './counterSlice'
import { useDispatch } from "react-redux";
const combinedReducer = combineReducers({
  counter,
  users,
});

// const masterReducer = (state, action) => {
//     if (action.type === HYDRATE) {
//         const nextState = {
//             ...state, // use previous state
//             counter: {
//                 count: state.counter.count + action.payload.counter.count,
//             },
//             users: {
//                 users: [...action.payload.users.users, ...state.users.users]
//             }
//         }
//         return nextState;
//     } else {
//     return combinedReducer(state, action)
//   }
// }

// export const makeStore = () =>
//   configureStore({
//     reducer: combinedReducer,
//   });

// export const store  = createWrapper(makeStore, { debug: true });
export const store = configureStore({
    reducer: combinedReducer,
  
   });
   export type RootState = ReturnType<typeof store.getState>;
   export type AppDispatch = typeof store.dispatch;
   export const useAppDispatch = () => useDispatch<AppDispatch>();
