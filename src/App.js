// import Button from "./Button"
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  const iRunOnlyOnce = () =>{
    console.log("i run only one time")
  };
  useEffect(()=>{
    console.log('one')
  },[]);
  useEffect(()=>{
    console.log('search for ', keyword)
  },[keyword]);
  console.log("search fo r",keyword);
  return (
    <div>
      <input type="text" onChange={onChange} value={keyword} />
      <h1 className={styles.title}>{counter}!</h1>
      <button onClick={onClick} text={"continue"}>click me</button>
    </div>
  );
}

export default App;
