import types from "./types";

const setStep = (state, step) => ({
  ...state,
  step: step,
});

export default function reducer(state, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        value: state.value - state.step,
      };

    case types.DECREMENT:
      return {
        ...state,
        value: state.value + state.step,
      };

    case types.SET_STEP:
      return setStep(state, action.payload);

    default:
      return state;
  }
}
