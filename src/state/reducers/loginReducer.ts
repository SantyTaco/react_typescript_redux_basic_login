import { LoginValidInterface, LoginAction, LoginInvalidInterface } from "../actions";
import { LoginActionType } from "../action-types"

interface LoginState {
    loading: boolean;
    error: string;
    data: LoginValidInterface | LoginInvalidInterface | undefined;
}

const initialState = {
    loading: false,
    error: '',
    data: undefined,
}


const reducer = (state: LoginState = initialState, action: LoginAction): LoginState => {
    console.log('action', action);
    switch (action?.type) {
        case LoginActionType.LOGIN_LOADING:
            return {
                loading: true,
                error: '',
                data: undefined
            };
        case LoginActionType.LOGIN_SUCCESS:
            return {
                loading: false,
                error: '',
                data: action?.payload,
            };
        case LoginActionType.LOGIN_ERROR:
            return {
                loading: false,
                error: action?.payload,
                data: undefined,
            };
        default:
            return state;
    }
}

export default reducer;