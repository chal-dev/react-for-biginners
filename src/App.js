import Button from "./Button"
import styles from "./App.module.css";


function App() {
  return (
    <div>
      <h1 className={styles.title}>환영합니다!</h1>
      <Button text={"continue"}/>
    </div>
  );
}

export default App;
