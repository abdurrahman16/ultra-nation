import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
const [countries, setCountries]= useState([]);
const [cart, setCart] = useState([]);
useEffect(()=> {
fetch ('https://restcountries.eu/rest/v2/all')
.then (res => res.json())
.then(data=> {
  setCountries(data);
  const names= data.map(country => country.name)
  console.log(names);
})
.catch (error => console.log(error))

}, [])


const handleAddCountry = (country) => {

  const newCart = [...cart, country];
  setCart (newCart);
}


  return (
    <div className="App">
      <h1>Country loaded: {countries.length}</h1>
      <h2>Country Added: {cart.length}</h2>
      <Cart cart ={cart}></Cart>
      <ul>
        {
          countries.map(country => <Country country ={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country> )
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>
    </div>
  );
}

export default App;
