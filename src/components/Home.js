import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NavBar from './NavBar'
import Results from './Results'


function Home(){

    const [shows, setShows] = useState([])
    const [search, setSearch] = useState ('')
    const [status, setStatus] = useState (false)

    useEffect(() => {
        obtenerDatos()
    },[search])

    const obtenerDatos = () => {
        axios.get(`http://api.tvmaze.com/search/shows?q=${search}`)
            .then(({data}) => {
                
                setShows(data)
            })
    }

    const searchShow = (name, status) => {
        setSearch(name)
        setStatus(status)
    }    

   
   

    return(
        <div>
            <NavBar emitSearch={searchShow}/>
            {shows.length === 0 ? status === false ?
            <div class= 'gif'>
                <img src='https://media.giphy.com/media/26xBzXOrvZ8y5Wro4/giphy.gif' alt='gif'/>
            </div>
            :
            <h1 className= 'frase'>Oops! We don't found results</h1>
            : <Results results={shows}/> }
            
        </div>
    )



} 

export default Home;
