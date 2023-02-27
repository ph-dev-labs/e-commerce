import './App.css';
import { useGetAllItemsQuery } from './Services/Services';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Signup from './Pages/Signup/Signup';
import Loader from './Pages/Loader/Loader';
import Signin from './Pages/Sign-in/Signin';
import { Route, Routes } from 'react-router-dom';

function App() {
  const { data, isLoading, error } = useGetAllItemsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home data={data} />} />
        <Route path='/signup' element={<Signup />}/> 
        <Route path='/signin' element={<Signin />} />
      </Routes>
     
    </div>
  );
}

export default App;

