import "./App.css";
import Counter from "./Counter"
import Friends from "./Friends";
import Team from "./team";
import Users from "./Users";

const handleBtn = () => {
  alert("btn-1 click hoyase");
};
const handleBtn3 = (num) => {
  alert(num + 5);
};

function App() {
  return (
    <>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Friends></Friends>
      <h1>Core concept of react</h1>
      <button onClick={handleBtn}>button-1</button>
      <button onClick={() => alert("btn2 click hoyase")}>Button-2</button>
      <button onClick={() => handleBtn3(7)}>Button-3</button>
    </>
  );
}

export default App;
