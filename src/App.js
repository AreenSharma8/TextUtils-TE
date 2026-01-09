import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <h3>Leave your suggestion in the below Textbox</h3>
        <TextForm/>
      </div>
    </>
  );
}

export default App;
