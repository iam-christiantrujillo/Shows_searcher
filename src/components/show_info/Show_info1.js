import React from 'react'

function ResultsS1 ({info}){

    
   console.log(info)
    return(
        <div class='Section1'>
            {
                info.image === null ?
                <div class='Section1Info'>
                    <div className='generalInfo'>
                        <h1>{info.name}</h1>
                        {
                            info.genres.length === 0 ? <h3>Type: {info.type}</h3> 
                            : 
                            <h3>Genre: {info.genres[0]}</h3>
                        }
                        <h3>Lenguage: {info.language}</h3>
                        {
                            info.network === null ? <h3>WebChannel: {info.webChannel.name} </h3>
                            :
                            <h3>Network: {info.network.name} </h3>
                        }
                    </div>
                    <div class='sumary'>
                        {info.summary}
                    </div>
                </div>
                :
                <div class='Section1Info'>
                    <div class='generalInfo'>
                        <div class='Image'>
                            <img src={info.image.medium} alt='image_serie'/>
                        </div>
                        <div class='principalInfo'>
                            <h1>{info.name}</h1>
                            {
                                info.genres.length === 0 ? <h3>Type: {info.type}</h3> 
                                : 
                                <h3>Genre: {info.genres[0]}</h3>
                            }
                            <h3>Lenguage: {info.language}</h3>
                            {
                            info.network === null ? <h3>WebChannel: {info.webChannel.name} </h3>
                            :
                            <h3>Network: {info.network.name} </h3>
                            }
                        </div>
                    </div>
                    <div class='sumary'>
                        <h3>Summary:</h3>
                        {info.summary}
                    </div>
                </div>
            }
            

        </div>
    )

}

export default ResultsS1;