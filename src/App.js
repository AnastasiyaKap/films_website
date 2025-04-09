import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Films from './components/Films';
import Cartoons from './components/Cartoons';
import Series from './components/Series';
import Home from './components/Home';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayout';
import SingleSeries from './components/SingleSeries';
import series from './data/series';
import cartoons from './data/cartoons';
import big_lies from './data/big_lies';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="films" element={<Films />} />
            <Route path="series" element={<Series />} />
            <Route path="cartoons" element={<Cartoons />} />
            <Route
              path="series/:slug"
              element={<SingleSeries items={series} elements={big_lies} />}
            />
            <Route
              path="cartoons/:slug"
              element={<SingleSeries items={cartoons} />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
