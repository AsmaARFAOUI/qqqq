import "./styles.css";
import Card from "./components/card";
import { data } from "./components/data";
export default function App() {
  const showData = data.map((el) => (
    <Card urr={el.img} ti={el.title} de={el.des} />
  ));
  console.log(showData);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>{showData}</div>
    </div>
  );
}
