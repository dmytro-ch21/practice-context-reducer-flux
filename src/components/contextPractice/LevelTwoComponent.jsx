import { useContext } from "react"
import { SomeContext } from "../../App"

function LevelTwoComponent() {

// there a hook called useContext(Specify the context) - that will return whatevever you have provided as value
   const {someData, setSomeData} = useContext(SomeContext);

  return (
    <div className="border border-2 border-warning m-2 rounded-2 p-2">
      <h5>Level Two Component</h5>
      <p>I need to access here the state from App.jsx</p>
      <h5>{someData}</h5>
      <button onClick={ () => setSomeData(prev => prev + 1)} className="btn btn-primary">Increment</button>
    </div>
  )
}

export default LevelTwoComponent
