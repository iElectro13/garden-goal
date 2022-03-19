import { Navbar } from "./components/Navbar/Navbar";
import TestComponent from "./components/TestComponent";

function App() {
  return (
    <div>
      <Navbar />
      <div className="testdiv px-4 md:px-10">
        <TestComponent/>
      </div>
    </div>
  );
}
export default App;
