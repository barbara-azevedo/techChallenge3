import { Autor } from "../common/common.entity";

interface Action {
  type: string;
  payload: any;
}

const autorReducer = (state: { autor: Autor[] }, action: Action) => {

  switch (action.type) {
    case 'SET_AUTORS':
      return {
        ...state,
        autor: action.payload
      };
    case 'SET_SINGLE_AUTOR':
      return {
        ...state,
        autor: action.payload
      };
    case 'ADD_AUTOR':
      return {
        ...state,
        autor: [...state.autor, action.payload]
      };
    case 'REMOVE_AUTOR':
      return {
        ...state,
        autor: state.autor.filter(autor => autor._id !== action.payload)
      };
    case 'TOGGLE_AUTOR':
      return {
        ...state,
        posts: state.autor.map(autor =>
          autor._id === action.payload._id ? action.payload : autor
        )
      };
    default:
      return state;
  }
};

export default autorReducer;