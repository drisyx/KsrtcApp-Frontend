import logo from './logo.svg';
import './App.css';
import AddBus from './components/AddBus';
import DeleteBus from './components/DeleteBus';
import SearchBus from './components/SearchBus';
import AppHeader from './components/AppHeader';
import ViewallBus from './components/ViewallBus';

function App() {
  return (
    <div >
      <AppHeader/>
      <ViewallBus/>
      <AddBus/>
      <DeleteBus/>
      <SearchBus/>
    </div>
  );
}

export default App;
