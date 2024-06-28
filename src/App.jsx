import logo from "./logo.svg";
import "./App.css";
import Pomodoro from "./features/pomodoro/Pomodoro";
import "./features/pomodoro/Pomodoro.css";
import Todo from "./features/todo/Todo";
import Quote from "./features/quote/Quote";

function App() {
  return (
    <div className="App">
      <Quote />
      <Pomodoro />
      <Todo />
    </div>
  );
}

export default App;
