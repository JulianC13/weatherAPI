import React, { useState, useEffect }  from 'react';
import './App.css'
import Card from './components/Card';
import HeadC from './components/HeadC';
import Footer from './components/Footer';

const App = () => {
const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataT, setDataT] = useState([]);
      useEffect(() => {
        fetch("http://127.0.0.1:5000/search")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    // console.log(data)
                    setDataT(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])


if (error) {
        return <div><h2>Error while fetching the data, please try later</h2></div>;
    } else if (!isLoaded) {
        return <div><h1>Loading...</h1></div>;
    } else {
      return (
        <>
          <HeadC/>
          <div className='cards'>
            {dataT.map(da => (
            <Card key={da.Date} data={da}/>
            ))}
          </div>
          <Footer/>

        </>
    );
    }
}
export default App

