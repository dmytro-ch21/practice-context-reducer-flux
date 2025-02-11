import { createContext, useState } from 'react';
import Logo from './components/Logo';
import ParentComponent from './components/contextPractice/ParentComponent';

// First we need to create a context
// It is outfide of the component function (ideally in a separate file)
export const SomeContext = createContext();

function App() {
  const [someData, setSomeData] = useState(2025);

  return (
    <div className="p-3 border border-4 border-danger">
      <h5>App Component - state is here {someData}</h5>

      <SomeContext.Provider value={{someData, setSomeData}}> 
        <ParentComponent />
      </SomeContext.Provider>
    </div>
  );
}

export default App;
