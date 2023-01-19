import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Counter from './pages/Counter/Counter';
import Home from './pages/Home/Home';
import './reset.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
