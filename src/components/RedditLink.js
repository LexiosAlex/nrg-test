import React from "react";
import "./RedditLink.css";
import ModalWindowWrapper from "../hocs/MovingStringWrapper";

class RedditLink extends React.Component {

  componentDidMount() {
    const {onStartMoving} = this.props;
    onStartMoving();
  }


  render() {
    const { onStartMoving, onStopMoving, isMoving, subRedditName } = this.props;

    return (
      <a
        className={`${isMoving ? "": "reddit-link--active"} reddit-link`}
        href="#"
        onClick={() => {
          isMoving ? onStopMoving() : onStartMoving();
        }}
      >
        {subRedditName}
      </a>
    );
  }
}

export default ModalWindowWrapper(RedditLink);

// constructor(props) {
//   super(props);
//
//   this.state = {
//     coordX: "0px",
//     coordY: "0px",
//     movingDirection: "right",
//     isMoving: true
//   };
//
//   this.startMoving = this.startMoving.bind(this);
// }
//
// elementRef = React.createRef();
// stringInterval = 0;
//
// startMoving = () => {
//   this.setState({
//     isMoving: true
//   });
//   const { containerRef } = this.props;
//   this.stringInterval = setInterval(() => {
//     const parent = containerRef.current.getBoundingClientRect();
//     const element = this.elementRef.current.getBoundingClientRect();
//
//     const rightBorder = parent.width - element.width;
//     const leftBorder = 0;
//
//     const coordX = element.left - parent.left;
//
//     if (coordX >= rightBorder) {
//       this.setState({
//         movingDirection: "left"
//       });
//     } else if (coordX <= leftBorder) {
//       this.setState({
//         movingDirection: "right"
//       });
//     }
//
//     if (this.state.movingDirection === "right") {
//       this.setState({
//         coordX: `${coordX + 1}px`
//       });
//     } else if (this.state.movingDirection === "left") {
//       this.setState({
//         coordX: `${coordX - 1}px`
//       });
//     }
//   }, 10);
// };
//
// stopMoving = () => {
//   this.setState({
//     isMoving: false
//   });
//   clearInterval(this.stringInterval);
// };
//
// componentDidMount() {
//   this.startMoving();
// }
//
// render() {
//   return (
//     <div
//       className="moving-string"
//       ref={this.elementRef}
//       onClick={() => {
//         this.state.isMoving
//           ? this.stopMoving()
//           : this.startMoving();
//       }}
//       style={{
//         left: this.state.coordX,
//         top: this.state.coordY
//       }}
//     >
//       <p>frontEnd</p>
//     </div>
//   );
// }
