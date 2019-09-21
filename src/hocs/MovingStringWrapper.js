import React from "react";

function MovingStringWrapper(Component) {
  class WrappedComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        cordX: "0px",
        movingDirection: "right",
        isMoving: true
      };

      this.startMoving = this.startMoving.bind(this);
    }

    elementRef = React.createRef();
    stringInterval = 0;

    startMoving = () => {
      this.setState({
        isMoving: true
      });
      const { containerRef } = this.props;
      const leftBorder = 0;
      const moveSpeed = 1;
      const timeOutDelay = 10;

      this.stringInterval = setInterval(() => {
        const parent = containerRef.current.getBoundingClientRect();
        const element = this.elementRef.current.getBoundingClientRect();
        const rightBorder = parent.width - element.width;
        const elementCordX = element.left - parent.left;

        if (elementCordX >= rightBorder) {
          this.setState({
            movingDirection: "left"
          });
        } else if (elementCordX <= leftBorder) {
          this.setState({
            movingDirection: "right"
          });
        }

        if (this.state.movingDirection === "right") {
          this.setState({
            cordX: `${elementCordX + moveSpeed}px`
          });
        } else if (this.state.movingDirection === "left") {
          this.setState({
            cordX: `${elementCordX - moveSpeed}px`
          });
        }
      }, timeOutDelay);
    };

    stopMoving = () => {
      this.setState({
        isMoving: false
      });
      clearInterval(this.stringInterval);
    };


    render() {
      const {cordsY} = this.props;
      return (
        <div
          ref={this.elementRef}
          style={{
            position: "absolute",
            display: "inline",
            left: this.state.cordX,
            top: cordsY,
          }}
        >
          <Component
            {...this.props}
            isMoving={this.state.isMoving}
            onStartMoving={this.startMoving}
            onStopMoving={this.stopMoving}
          />
        </div>
      );
    }
  }
  return WrappedComponent;
}

export default MovingStringWrapper;
