import {useEffect} from "react";


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
