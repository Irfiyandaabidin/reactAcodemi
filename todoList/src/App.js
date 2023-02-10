import "./App.css";
import Todolist from "./component/Todolist";

function App() {
  return (
    <div className="card">
      <div className="card__heading">
        <h1>Todo</h1>
      </div>
      <div className="card__content">
        <Todolist />
      </div>
    </div>
  );
}

export default App;
