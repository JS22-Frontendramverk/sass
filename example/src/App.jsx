import './App.scss'

import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <main className='products'>
        <h1 className='products__heading'>Products</h1>
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  )
}

export default App
