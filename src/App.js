import './App.css';
import TestComponent from './components/TestComponent';

function App() {
  return (
    //This example requires Tailwind CSS v2.0+
    <div className="bg-red-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-blueDark">Ready to dive in?</span>
          <span className="block text-primary">Start your free trial today.</span>
        </h2>
      </div>
      
      <TestComponent/>
      
    </div>
  );
}

export default App;
