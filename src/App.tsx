import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Configuracao from './paginas/Configuracao';
import Sorteio from './paginas/Sorteio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path='/' element={<Configuracao />} />
            <Route path='/sorteio' element={<Sorteio />}/>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
