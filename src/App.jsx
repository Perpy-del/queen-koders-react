/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './App.css';
import SearchAndAddNewItem from './SearchAddItem/SearchAndAddNewItem';
import CardContent from './Card/CardContent';

function App() {
  return (
    <div>
      <h1>Village Dictionary</h1>
      <SearchAndAddNewItem />
      <CardContent />
    </div>
  );
}


export default App;
