import { Dispatch } from "redux";
import { LoginActionType } from "../action-types";
import { LoginAction } from "../actions";

export const loginRemoteDataSource = (userName: string, password: string) => {
  return async (dispatch: Dispatch<LoginAction>) => {
    console.log('loginRemote', userName);
    dispatch({
      type: LoginActionType.LOGIN_LOADING,
    });

    try {
      const response =
        userName === "santy"
          ? { authToken: "123abc", refreshToken: "456def" }
          : {message: "Invalid User"};
      dispatch({
        type: LoginActionType.LOGIN_SUCCESS,
        payload: response,
      });
    } catch (e) {
      dispatch({
        type: LoginActionType.LOGIN_ERROR,
        payload: "error",
      });
    }
  };
};
