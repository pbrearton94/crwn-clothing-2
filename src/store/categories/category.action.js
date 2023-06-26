import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategories = (categories) => {
  return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
};

// export const setCurrentUser = (user) => {
//     return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
//   };
