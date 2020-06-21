import { UserActionType } from "./user.types";

const INITIAL_STATE = {
  //this is the initial state
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  //the reducer is takes state and action as props
  //we are setting default value of state to INITIAL_STATE
  //if nothing is passed, not even NULL, the state will assume
  //INITIAL_STATE as it's default value
  switch (
    action.type //putting switch on action type
  ) {
    case UserActionType.SET_CURRENT_USER: // if the action type is 'SET_CURRENT_USER
      return {
        ...state, //we dont only want to return currentUSer, we would like to return the whole state
        currentUser: action.payload, //setting the currentUser to payload of action
      };
    default:
      return state; //if nothing matches, return the passed in state
  }
};

export default userReducer;
