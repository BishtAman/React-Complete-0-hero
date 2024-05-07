import { CATEGORIES_ACTIONS_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategoriesMap = (categoriesArray) =>
  createAction(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES, categoriesArray);
