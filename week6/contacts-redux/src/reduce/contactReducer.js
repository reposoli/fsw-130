import * as actionTypes from '../act/actions';
// eslint-disable-next-line 
export default (state = [], action) => {
    switch (action.type){
      case actionTypes.CREATE_NEW_CONTACT:
      return [
        ...state,
        Object.assign({}, action.contact)
      ];
      case actionTypes.REMOVE_CONTACT:
      return state.filter((data, i) => i !== action.id);
      default:
            return state;
    }
};