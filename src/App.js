import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Books from './components/Books';
import Navigation from './components/Navigation';
import Categories from './components/Categories';
import AddComment from './components/AddComment';
import UpdateBook from './components/UpdateBook';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/add-comment/:bookId" element={<AddComment />} />
        <Route path="/update-book/:bookId" element={<UpdateBook />} />
      </Routes>
    </Router>
  );
}

export default App;
