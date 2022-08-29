import {LoginActionType} from "../action-types"

export interface LoginValidInterface {
    authToken: string;
    refreshToken: string;
}

export interface LoginInvalidInterface {
    message: string;
}

interface LoginLoadingAction {
    type: LoginActionType.LOGIN_LOADING | undefined;
}

interface LoginSuccessAction {
    type: LoginActionType.LOGIN_SUCCESS;
    payload: LoginValidInterface | LoginInvalidInterface;
}

interface LoginErrorAction {
    type: LoginActionType.LOGIN_ERROR;
    payload: string;
}

export type LoginAction = LoginLoadingAction | LoginSuccessAction | LoginErrorAction;
