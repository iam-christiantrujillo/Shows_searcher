import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import ResultsS1 from './R1Section'
import ResultsS2 from './R2Section';
import ResultsS3 from './R3Section';

function ShowAbout() {
    const params = useParams()
    

    const [show1, setShow1] = useState([])
    const [seasons, setSeasons] = useState([])
    const [episodes, setEpisodes] = useState([])
    const [cast, setCast] = useState([])
  

    useEffect(() => {

        axios.get(`http://api.tvmaze.com/shows/${params.idShow}`)
            .then(({data}) => {
                
                setShow1(data)
                
                console.log('se ejecuto')
            })
        
        axios.get(`http://api.tvmaze.com/shows/${params.idShow}/seasons`)
            .then(({data}) => {
                setSeasons(data)
                console.log('se ejecuto 2')
            })
        
        axios.get(`http://api.tvmaze.com/shows/${params.idShow}/episodes`)
            .then(({data}) => {
                setEpisodes(data)
                console.log('se ejecuto 3')
            })

        axios.get(`http://api.tvmaze.com/shows/${params.idShow}/cast`)
            .then(({data}) => {
                setCast(data)
                console.log('se ejecuto 4')
            })

        
    },[])

    




    return(
        <div class='info_show'>
    
        {show1.length === 0 ? <h1>Loading...</h1>    
        : 
        <ResultsS1 info={show1}/> }

        {seasons.length === 0 ? <h1>Loading...</h1>    
        : 
        <ResultsS2 info={seasons} info2={episodes}/> }

        {cast.length === 0 ? null  
        : 
        <ResultsS3 cast={cast}/> }

       
    </div>
    )

    

}

export default ShowAbout;