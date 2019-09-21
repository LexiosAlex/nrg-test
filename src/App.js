import React from "react";
import "./App.css";
import RedditLink from "./components/RedditLink";

const subReddits = ["reactjs", "frontend", "angular", "vuejs"];

function App() {
  const startTopCords = 40;
  let containerRef = React.createRef();

  return (
    <div className="App" ref={containerRef}>
      {subReddits.map((it, i) => (
        <RedditLink
          containerRef={containerRef}
          subRedditName={it}
          key={`subreddit-${i}`}
          cordsY={startTopCords * (i+1)}
        />
      ))}
    </div>
  );
}

export default App;
