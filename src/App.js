import Todos from "./components/Todos";
import Todos2 from "./components/Todos2";
import AddTodo from "./components/AddTodo";
import AddTodo2 from "./components/AddTodo2";

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td>
              <AddTodo />
            </td>
            <td>
              <AddTodo2 />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Todos />
            </td>
            <td>
              <Todos2 />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
