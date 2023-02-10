import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <nav className="navbar">
        <p>Todos</p>
      </nav>
      <section>
        <TodoList />
      </section>
    </div>
  );
}

export default App;
