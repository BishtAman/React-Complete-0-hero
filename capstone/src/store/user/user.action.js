import { createAction } from "../../utils/reducer/reducer.utils";

const USER_ACTIONS_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

export const setCurrentUser = (user) =>
  createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user);
