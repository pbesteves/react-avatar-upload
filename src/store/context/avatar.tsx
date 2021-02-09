import React, { createContext, Dispatch, Reducer, useReducer } from "react";
import reducer, { Action } from "../reducers/avatar";

type AvatarProviderProps = {
  children: React.ReactNode;
};

export type State = {
  /**
   * A string representing the base64 data of the image.
   */
  avatarData: string;
};

const initialState: State = {
  avatarData: "",
};

const defaultDispatch: Dispatch<Action> = () => initialState;

const AvatarContext = createContext({
  state: initialState,
  dispatch: defaultDispatch,
});

const AvatarProvider = ({ children }: AvatarProviderProps) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  );
  return (
    <AvatarContext.Provider value={{ state, dispatch }}>
      {children}
    </AvatarContext.Provider>
  );
};

export { AvatarContext, AvatarProvider };
