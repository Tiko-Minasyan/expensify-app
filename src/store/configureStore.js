import { createStore, combineReducers } from "redux";
import expensesReduser from "../reducers/expenses";
import filtersReduser from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReduser,
      filters: filtersReduser,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
