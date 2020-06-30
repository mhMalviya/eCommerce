import ShopActionsTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined, //as we would like to store error
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionsTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
        //will simply set the value to true
      };
    case ShopActionsTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
        //in case of success
      };
    case ShopActionsTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state; //this is only returning the state. Nothing more
  }
};

export default shopReducer;
