import {useEffect} from "react";

const tg = window.Telegram.WebApp
function App() {

    useEffect(() => {
        tg.ready();
    },[]);

  return (
    <div className="App">
      WORKING

      <button onClick={onClose}> close</button>
    </div>
  );
}

export default App;
