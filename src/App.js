import Header from './components/Header/Header';
import './App.scss';
import Clients from './components/Clients/Clients';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Clients />
      </main>
    </div>
  );
};

export default App;
