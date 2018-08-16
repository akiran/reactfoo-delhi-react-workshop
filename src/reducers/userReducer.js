const initialState = {
  firstName: "",
  lastName: "",
  email: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
