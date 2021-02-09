import { State } from "../context/avatar";

export type Action = { type: string; payload: string };

const reducer: (state: State, action: Action) => State = (state, action) => {
  switch (action.type) {
    case "SET_AVATAR_DATA":
      return { ...state, avatarData: action.payload };
    case "CLEAR_AVATAR_DATA":
      return { ...state, avatarData: action.payload };
    default:
      throw new Error();
  }
};

export default reducer;
