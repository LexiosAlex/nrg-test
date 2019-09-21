import { connect } from "react-redux";
import App from "../components/App/App.js";
import {
  asyncFetchPosts,
  selectSubreddit,
  deSelectSubreddit
} from "../actions/AppActions";

const mapStateToProps = state => {
  return {
    redditApiStore: state.redditApiReducer
  };
};

const mapDispatchToProps = dispatch => ({
  onGetPosts: subreddit => {
    dispatch(selectSubreddit(subreddit));
    dispatch(asyncFetchPosts(subreddit));
  },

  onDeSelectSubreddit: () => {
    dispatch(deSelectSubreddit());
  }
  //
  // onGetProducts: (categoryId, page) => {
  //   dispatch(asyncGetProducts(categoryId, page));
  // },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
