
function ActionButtons({ onGreet, onShowInfo }) {
  return (
    <div className="buttons">
      {/* onClick uses the function passed from parent */}
      <button onClick={onGreet}>Greet</button>
      <button onClick={onShowInfo}>Show Info</button>
    </div>
  );
}

// Parent component that defines the logic and passes it down
function ActionButtonsDemo() {
  function handleGreet() {
    alert("Hello from parent!");
  }

  function handleShowInfo() {
    alert("Info button clicked");
  }

  return (
    <div className="demo">
      <h2>Action Buttons Demo</h2>

      {/* Pass functions as props to child */}
      <ActionButtons onGreet={handleGreet} onShowInfo={handleShowInfo} />
    </div>
  );
}

export default ActionButtonsDemo;