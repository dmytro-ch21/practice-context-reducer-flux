import LevelOneComponent from "./LevelOneComponent"

function ParentComponent() {
  return (
    <div className="border border-2 border-dark rounded-2 p-2">
      <h5>Parent Component</h5>
      <LevelOneComponent />
    </div>
  )
}

export default ParentComponent
