import logo from "./logo.svg";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const [count, setCount] = useState(100);
  const { value, dispatch } = useContext(UserContext);
  const { user } = value;
  console.log(user);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (count > 0) {
  //       setCount(count - 1);
  //     }
  //   }, 20);
  //   return () => clearInterval(interval);
  // }, [count]);
  const handleSetNewData = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.new_name.value;
    const age = form.new_age.value;
    dispatch({ type: "SET_USER", newData: { name: name, age: age } });
    form.reset();
  };
  return (
    <div className="App">
      <h2>{count}</h2>
      <div>
        <h2>{user?.name}</h2>
        <h4>{user?.age}</h4>
      </div>
      <form onSubmit={handleSetNewData}>
        <input
          type="text"
          placeholder="Type name"
          style={{
            width: "300px",
            display: "block",
            marginBottom: "20px",
            padding: "10px 20px",
          }}
          name="new_name"
        />
        <input
          type="number"
          placeholder="Type age"
          style={{
            width: "300px",
            display: "block",
            marginBottom: "20px",
            padding: "10px 20px",
          }}
          name="new_age"
        />
        <button type="submit">Set New Data</button>
      </form>
    </div>
  );
}

export default App;
