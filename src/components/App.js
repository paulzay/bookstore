import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from '../containers/BookList/BookList';
import BooksForm from '../containers/BooksForm/BooksForm';

function App() {
  return (
    <div className="App">
      <BookList />
      <BooksForm />
    </div>
  );
}

export default App;
