import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import ResultsS1 from './Show_info1'

function ShowAbout() {
    const params = useParams()
    

    const [show1, setShow1] = useState([])
  

    useEffect(() => {
        obtenerDatos()
        
    },[])

    const obtenerDatos = () => {
        axios.get(`http://api.tvmaze.com/shows/${params.idShow}`)
            .then(({data}) => {
                
                setShow1(data)
                
                console.log('se ejecuto')
            })
    }




    return(
        <div class='info_show'>
    
        {show1.length === 0 ? <h1>Cargando...</h1>    
        : 
        <ResultsS1 info={show1}/> }

       
    </div>
    )

    

}

export default ShowAbout;