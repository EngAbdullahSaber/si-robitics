const intialState = {
  lang: "en",
  otp: "",
};

export default function dataReducer(state = intialState, action) {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        lang: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
}
