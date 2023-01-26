import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './layouts/header';
import AddStudent from './pages/add-student';
import DetailsPage from './pages/detailsPage';
import HomePage from './pages/home';
import WishList from './pages/wishList';


function App() {
  const [wishList, setWishList] = useState([])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage wishList={wishList} setWishList={setWishList}/>} />
        <Route path='/add-courses' element={<AddStudent />} />
        <Route path='/wish-list' element={<WishList wishList={wishList} setWishList={setWishList} />} />
        <Route path='/home/:_id' element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
