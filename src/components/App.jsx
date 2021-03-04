import React from "react";

function App() {
  let time = new Date().toLocaleTimeString().substring(0, 8);
  const [Time, updateTime] = React.useState(time);

  function refreshTime() {
    const newtime = new Date().toLocaleTimeString().substring(0, 8);
    updateTime(newtime);
    return Time;
  }
  setInterval(refreshTime, 1000);

  return (
    <div>
      <h1 className="container">{Time}</h1>
    </div>
  );
}

export default App;
