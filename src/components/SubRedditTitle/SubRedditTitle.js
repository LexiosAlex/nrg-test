import React from "react";
import "./subRedditTitle.css";
import ModalWindowWrapper from "../../hocs/MovingStringWrapper";

class SubRedditTitle extends React.Component {
  componentDidMount() {
    const { onStartMoving } = this.props;
    onStartMoving();
  }

  onLinkClick = () => {
    const {
      onStartMoving,
      onStopMoving,
      onGetPosts,
      isMoving,
      subRedditName,
      onDeSelectSubreddit
    } = this.props;

    const onActivateLink = () => {
      onStopMoving();
      onGetPosts(subRedditName);
    };

    const onDeActivateLink = () => {
      onDeSelectSubreddit();
      onStartMoving()
    };

    isMoving ? onActivateLink() : onDeActivateLink();
  };


  render() {
    const { isMoving, subRedditName} = this.props;



    return (
      <a
        className={`${isMoving  ? "" : "subreddit-title--active"} subreddit-title`}
        href="#"
        onClick={() => {
          this.onLinkClick();
        }}
      >
        {subRedditName}
      </a>
    );
  }
}

export default ModalWindowWrapper(SubRedditTitle);
