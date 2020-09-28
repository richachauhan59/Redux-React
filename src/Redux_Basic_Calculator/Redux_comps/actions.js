import actionConst from "./actionTypes";

const incrementCounter = (payload) => {
  return {
    type: actionConst.INCREMENT_COUNTER,
    payload
  };
};

const decrementCounter = (payload) => {
  return {
    type: actionConst.DECREMENT_COUNTER,
    payload
  };
};

export { incrementCounter, decrementCounter };
