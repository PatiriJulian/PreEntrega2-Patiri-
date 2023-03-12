import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Sections/ItemListContainer';
import './components/Sections/ItemListContainer.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/Sections/ItemDetail';

 
function App() {

  return (
    <> 
      <BrowserRouter>
        <NavBar/>
        
          <section class="ItemListContainerWrapper ItemListContainerfont">
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/producto/:id' element={<ItemDetail/>}/>
              <Route path='/categoria/:category' element={<ItemListContainer/>}/>
            </Routes>
          </section>
        
      </BrowserRouter>
    </>
  )
}

export default App
