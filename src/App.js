import './App.css';
import Form from './components/Form/Form';

export default function App() {
  document.title = 'Title form';

  return (
    <div className="App">
      <dialog id="modal" open>
        <Form />
      </dialog>
    </div>
  );
}