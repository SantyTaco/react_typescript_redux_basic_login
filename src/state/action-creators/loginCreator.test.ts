import { LoginActionType } from "../action-types";
import { loginRemoteDataSource } from "./loginCreator";

describe("Login creator", () => {
  it("should return invalid username", async () => {
    const expected = [
      { type: LoginActionType.LOGIN_LOADING },
      {
        type: LoginActionType.LOGIN_SUCCESS,
        payload: { message: "Invalid User" },
      },
    ];

    const dispatch = jest.fn(); // mock dispatch
    await loginRemoteDataSource("test_user", "test_password")(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
  });

  it("should return valid username", async () => {
    const expected = [
      { type: LoginActionType.LOGIN_LOADING },
      {
        type: LoginActionType.LOGIN_SUCCESS,
        payload: { authToken: "123abc", refreshToken: "456def" },
      },
    ];

    const dispatch = jest.fn();
    await loginRemoteDataSource("santy", "test_password")(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
  });
});
