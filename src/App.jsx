import { useEffect, useState } from 'react'
import { Cart } from './components/Cart/Cart.jsx';
import { Header } from './components/Header/Header.jsx'
import { ProductsList } from './components/ProductsList/ProductsList.jsx'
import { api } from './services/api.js';
import { GlobalStyle } from './styles/global.js'

function App() {
  const [menuList, setMenuList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0)

  const loadMenu = async ()=>{
    try {
      const response = await api.get("products");
      setMenuList(response.data);
    } catch (error) {
      console.log(response);
    }
  };
  //Montagem
  useEffect(()=>{
    loadMenu();
  }, []);
  //Atualização
//   useEffect(()=>{
//     if(currentSale.length>0){
//         console.log(currentSale);
//     }
// },[currentSale]);

  return (
    <div className="App">
      <GlobalStyle />
      <Header filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} menuList={menuList} setCurrentSale={setCurrentSale} />
      <main>
        <ProductsList menuList={menuList} currentSale={currentSale} setCurrentSale={setCurrentSale} />
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </main>
    </div>
  )
}

export default App
