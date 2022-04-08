import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Totals } from './components/Totals';
import { History } from './components/History';
import { AddTransaction } from './components/AddTransaction';
import { CarSpecs } from './components/Specifics';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <Totals />
        <CarSpecs />
        <History />
        <AddTransaction />
        
      </div>
    </GlobalProvider>
  );
}

export default App;