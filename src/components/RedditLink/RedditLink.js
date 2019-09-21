import React from "react";
import "./RedditLink.css"

class SubRedditLink extends React.Component {
  render() {
    const { isLoading, activePost, isError, activeSubReddit } = this.props;

    if (isLoading) {
      return <a className="reddit-link">Loading...</a>;
    } else if (isError && activePost.data) {
      return <a className="reddit-link reddit-link--error">EROR WHILE LOADING...</a>;
    } else if (activePost.data) {
      return (
        <a  className="reddit-link" href={activePost.data.url}>
          {`${activeSubReddit}: ${activePost.data.title}`}
        </a>
      )
    } else {
      return null
    }

  }
}

export default SubRedditLink;
