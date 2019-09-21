import subReddits from "../mocks/subRedditsList";

const redditReducer = (
  state = {
    list: subReddits,
    activeSubReddit: "",
    activePost: "",
    isLoading: false,
    isError: false
  },
  action
) => {
  switch (action.type) {
    case "LOADING_SUBREDDIT_POSTS" :
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case "SUBREDDIT_POSTS_LOADED_SUCCESS" :
      return {
        ...state,
        activePost: action.activePost,
        isLoading: false,
        isError: false,
      };

    case "SUBREDDIT_POSTS_LOADING_ERROR" :
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case "SELECT_SUBREDDIT" :
      return {
        ...state,
        activeSubReddit: action.subReddit,
      };

    case "DESELECT_SUBREDDIT" :
      return {
        ...state,
        activeSubReddit: "",
        activePost: "",
      };

    default:
      return state;
  }
};

export default redditReducer;
