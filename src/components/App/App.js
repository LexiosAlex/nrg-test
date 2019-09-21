import React from "react";
import "./App.css";
import SubRedditTitle from "../SubRedditTitle/SubRedditTitle";
import RedditLink from "../RedditLink/RedditLink";

class App extends React.Component {
   containerRef = React.createRef();

  render() {
    const {redditApiStore, onGetPosts, onDeSelectSubreddit} = this.props;
    const startTopCords = 40;

    return (
      <div>
        <div className="App" ref={this.containerRef}>
          {redditApiStore.list.map((it, i) => (
            <SubRedditTitle
              activeSubReddit={redditApiStore.activeSubReddit}
              onDeSelectSubreddit={onDeSelectSubreddit}
              onGetPosts={onGetPosts}
              containerRef={this.containerRef}
              subRedditName={it}
              key={`subreddit-${i}`}
              cordsY={startTopCords * (i+1)}
            />
          ))}
        </div>
        <RedditLink
          isLoading = {redditApiStore.isLoading}
          activePost = {redditApiStore.activePost}
          isError = {redditApiStore.isError}
          activeSubReddit = {redditApiStore.activeSubReddit}
        />
      </div>
    );
  }

}

export default App;
