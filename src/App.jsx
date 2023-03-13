import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/Sections/ItemDetail';
import { CartContextProvider } from './context/cartContex';
import Cart from './components/Sections/Cart';
import CategoryContainer from './components/Sections/CategoryContainer';
import HomeContainer from './components/Sections/HomeContainer';

 
function App() {

  return (
    <> 
      <BrowserRouter>
      <CartContextProvider>
        <NavBar/>
        
          <section class="ItemListContainerWrapper ItemListContainerfont">
            <Routes>
              <Route path='/' element={<HomeContainer/>}/>
              <Route path='/producto/:id' element={<ItemDetail/>}/>
              <Route path='/categoria/:category' element={<CategoryContainer/>}/>
              <Route path='/carrito' element={<Cart/>}/>
            </Routes>
          </section>
          </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
