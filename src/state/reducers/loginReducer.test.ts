import { LoginActionType } from "../action-types";
import reducers from ".";
describe("Reducers", () => {
  describe("login reducer", () => {
    it("should return the loading state", () => {
      const loadingState = {
        login: {
          data: undefined,
          error: "",
          loading: true,
        },
      };
      expect(
        reducers(undefined, { type: LoginActionType.LOGIN_LOADING })
      ).toEqual(loadingState);
    });
    it("should return the success state", () => {
      const successState = {
        login: {
          data: {
            authToken: "123abc",
            refreshToken: "456def",
          },
          error: "",
          loading: false,
        },
      };

      expect(
        reducers(undefined, {
          type: LoginActionType.LOGIN_SUCCESS,
          payload: { authToken: "123abc", refreshToken: "456def" },
        })
      ).toEqual(successState);
    });
    it("should return the error state", () => {
        const errorState = {
          login: {
            data: undefined,
            error: 'invalid username',
            loading: false,
          },
        };
  
        expect(
          reducers(undefined, {
            type: LoginActionType.LOGIN_ERROR,
            payload: 'invalid username' ,
          })
        ).toEqual(errorState);
      });
  });
});
