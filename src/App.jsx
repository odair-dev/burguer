import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Cart } from './components/Cart/Cart.jsx';
import { Header } from './components/Header/Header.jsx'
import { ProductsList } from './components/ProductsList/ProductsList.jsx'
import { api } from './services/api.js';
import { GlobalStyle } from './styles/global.js'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const localStorageCartList = localStorage.getItem("@CARTLIST");
  const [menuList, setMenuList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState(localStorageCartList ? JSON.parse(localStorageCartList): []);
  const [showFiltered, setShowFiltered] = useState(false);
  const [found, setFound] = useState("");

  useEffect(() => {
    localStorage.setItem("@CARTLIST", JSON.stringify(currentSale));
  }, [currentSale]);

  const loadMenu = async ()=>{
    try {
      const response = await api.get("products");
      setMenuList(response.data);
    } catch (error) {
      toast(response);
    }
  };
  
  useEffect(()=>{
    loadMenu();
  }, []);
  
  useEffect(()=>{
    if(filteredProducts.length>0){
      setShowFiltered(true);
    }else{
      setShowFiltered(false);
    }
  },[filteredProducts]);

  return (
    <div className="App">
      <GlobalStyle />
      <Header found={found} setFound={setFound} setFilteredProducts={setFilteredProducts} menuList={menuList} setMenuList={setMenuList} />
      <main>
        {!showFiltered && <ProductsList setShowFiltered={setShowFiltered} showFiltered={showFiltered} menuList={menuList} currentSale={currentSale} setCurrentSale={setCurrentSale} />}
        {showFiltered && <ProductsList found={found} setFound={setFound} setShowFiltered={setShowFiltered} showFiltered={showFiltered} menuList={filteredProducts} currentSale={currentSale} setCurrentSale={setCurrentSale} />}
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </main>
      <ToastContainer position="bottom-right" />
    </div>
  )
}

export default App