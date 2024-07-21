import {useEffect} from "react";
import {useTelegram} from "/hooks/useTelegram";

function App() {
    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    },[]);

  return (
    <div className="App">
      WORKING

      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
