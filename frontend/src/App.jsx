import './App.css';
import io from 'socket.io-client';

function App() {
  const connectSocket = () => {
    io('http://localhost:4000');
  };
  return (
    <div className="App">
      <button onClick={connectSocket}>Connect</button>
    </div>
  );
}

export default App;
