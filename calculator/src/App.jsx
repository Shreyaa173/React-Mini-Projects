import style from "./App.module.css";
import Display from "./components/Display";
import Button from "./components/Button";
function App() {
  return (
    <div className={style.main}>
      <div className={style.calculator}>
        <Display />
        <Button />
      </div>
    </div>
  );
}

export default App;
