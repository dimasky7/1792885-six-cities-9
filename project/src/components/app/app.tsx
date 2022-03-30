import MainPage from '../main/main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

type AppScreenProps = {
  offersCount: number;
}

function App({offersCount}: AppScreenProps): JSX.Element {
  return ( 
  <BrowserRouter>
    <Routes>
      


    </Routes>
  </BrowserRouter>
  <MainPage offersCount = {offersCount} />;
  );
}

export default App;
