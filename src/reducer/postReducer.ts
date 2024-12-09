import { Post } from "../common/common.entity";

interface Action {
  type: string;
  payload: any;
}

const postReducer = (state: { posts: Post[] }, action: Action) => {

 switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload
      };
    case 'SET_SINGLE_POST':
      return {
        ...state,
        posts: action.payload
      };
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case 'REMOVE_POST':
      return {
        ...state,
        posts: state.posts.filter(posts => posts._id !== action.payload)
      };
    case 'TOGGLE_POST':
      return {
        ...state,
        posts: state.posts.map(posts =>
          posts._id === action.payload.id ? action.payload : posts
        )
      };
    default:
      return state;
  }
};

export default postReducer;