import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NavBar from './NavBar'
import Results from './Results'


function Home(){

    const [shows, setShows] = useState([])
    const [search, setSearch] = useState ('')

    useEffect(() => {
        obtenerDatos()
    },[search])

    const obtenerDatos = () => {
        axios.get(`http://api.tvmaze.com/search/shows?q=${search}`)
            .then(({data}) => {
               
                setShows(data)
            })
    }

    const searchShow = (name) => {
        setSearch(name)
    }    

   
   

    return(
        <div>
            <NavBar emitSearch={searchShow}/>
            {shows.length === 0 ? <h1 className='frase'>Encuentra la serie que quieras:)</h1> : <Results results={shows}/> }
            
            
        </div>
    )

    


}

export default Home;
