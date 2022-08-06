import './App.css';
// import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todos from './Todos';
import OneTodo from './OneTodo';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/todos" element={<Todos />} />
            <Route exact path="/onetodo/:id" element={<OneTodo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
