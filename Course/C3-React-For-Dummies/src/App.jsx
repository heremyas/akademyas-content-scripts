import logo from "./logo.svg";
import "./App.css";
import Pomodoro from "./features/pomodoro/Pomodoro";
import "./features/pomodoro/Pomodoro.css";
import Todo from "./features/todo/Todo";
import Quote from "./features/quote/Quote";
import { BsChatQuoteFill } from "react-icons/bs";
import { FaClock, FaTasks } from "react-icons/fa";
import Notes from "./features/notes/Notes";

function App() {
  return (
    <div className="App">
      <div
        style={{
          textAlign: "center",
          height: "100vh",
          display: "grid",
          placeItems: "center",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div>
          <h1>
            <b>Pro-ductivity</b>
          </h1>
          <div className="features">
            <a href="#quote">
              <div className="feature">
                <BsChatQuoteFill size="8em" className="feature-icon" />
                <b>Daily Quote</b>
              </div>
            </a>
            <a href="#pomodoro">
              <div className="feature">
                <FaClock size="8em" className="feature-icon" />
                <b>Pomodoro</b>
              </div>
            </a>
            <a href="#todo">
              <div className="feature">
                <FaTasks size="8em" className="feature-icon" />
                <b>Task Manager</b>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Quote id="quote" />
      <Pomodoro id="pomodoro" />
      <Todo id="todo" />
      <div
        style={{ position: "relative", height: "100vh", overflow: " hidden" }}
      >
        <Notes />
      </div>
    </div>
  );
}

export default App;
