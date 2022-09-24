import { useState } from 'react';
import Modal from './Modal';
import './App.css';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(!open)}>Open Modal</button>

      <Modal open={open} />
    </div>
  );
}

export default App;
