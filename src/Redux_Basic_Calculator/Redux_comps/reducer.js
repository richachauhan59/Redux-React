import actionConst from "./actionTypes";

const initState = { counter: 5 };
let count = 0;
const reducer = (state = initState, action) => {
  console.log(count++);
  switch (action.type) {
    case actionConst.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case actionConst.DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - action.payload
      };

    default:
      return state;
  }
};

export { reducer };
