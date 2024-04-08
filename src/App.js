import logo from './logo.svg';
import './App.css';
import AddBus from './components/AddBus';
import DeleteBus from './components/DeleteBus';
import SearchBus from './components/SearchBus';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div >
      <AppHeader/>
      <AddBus/>
      <DeleteBus/>
      <SearchBus/>
    </div>
  );
}

export default App;
