import './App.css';
import { useGetAllItemsQuery } from './Services/Services';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Signup from './Pages/Signup/Signup';
import Loader from './Pages/Loader/Loader';
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
        <Route path='/login' element={<Signup />}/> 
      </Routes>
     
    </div>
  );
}

export default App;

