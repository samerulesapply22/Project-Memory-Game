import Cards from "./cards";

export default function Game() {
  return (
    <>
      <div id="header">
        <h1>Memory game</h1>
        <button
          className="btnNewGame"
          onClick={() => {
            window.location.reload(false);
          }}
        >
          New Game
        </button>
      </div>
      <div id="container">
        <Cards />
      </div>
    </>
  );
}
