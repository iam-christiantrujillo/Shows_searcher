import React from 'react';

function Results({results}) {

    const renderShows = () => {
        const render = results.map(show => {
            return(
                
                    <div className='card'>
                        {
                        show.show.image === null ? 
                        <div className='cardInfo'>
                        <h3>{show.show.name}</h3>

                        {
                            show.show.genres.length === 0 ? <p>Type: {show.show.type}</p> 
                            : 
                            <p>Genre: {show.show.genres[0]}</p>
                        }    

                        <p>Score: {show.score.toFixed(1)}</p>
                        </div>

                        : 
                        
                        <div className='cardInfo'>
                        <img src={show.show.image.medium} alt='image_serie'/>
                        <h3>{show.show.name}</h3>

                        {
                            show.show.genres.length === 0 ? <p>Type: {show.show.type}</p>
                            :
                            <p>Genre: {show.show.genres[0]}</p>
                        }  

                        <p>Score: {show.score.toFixed(1)}</p>
                        </div>

                        }
                        
                    </div>
               
            )
        })

        return render 
    }


    return(
        <div className='cards'>
            {renderShows()}
        </div>
    )

    
    
}

export default Results;