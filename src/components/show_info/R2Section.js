import React from 'react';

function ResultsS2({info, info2}){

    const renderEpisodes = () => {
        const renderSeasons = info.map(Season => {
            
            return(
                <div className='cardSeason'>
                    <div class='season'>

                        <h1 className='number'>{`Season ${Season.number}`}</h1>
                        <h3 className ='start'>{`Premiere Date: ${Season.premiereDate}`}</h3>
                        <h3 className='end' >{`End Date: ${Season.endDate}`}</h3>
                        
                        <h1 className='subEpisode'>Episodes</h1>

                        {info2.map((episode) => {

                            if(Season.number === episode.season){
                                return(

                                <div className='episode'>

                                    <div className='episodeInfo1'>
                                        <h3>{`${episode.number}. ${episode.name}`}</h3>
                                        
                                        {
                                            episode.image === null ? null
                                            :
                                            <img src= {episode.image.medium} alt='imageEpisode'/>
                                        
                                        }
                                    </div>

                                    <div className ='episodeInfo2'>
                                        <h4 class="subSummary">Summary:</h4> 
                                        <p dangerouslySetInnerHTML={{
                                            __html: episode.summary
                                        }}>
                                        
                                        </p>
                                    </div>

                                </div>

                                

                                
                                )
                                
                            }
                            
                        })

                        }

                    </div>
                    
                </div>
            )
        })

        return renderSeasons
    }
    
    return(
        <div className='Section2'>
            <h1>Seasons</h1>
            {renderEpisodes()}
        </div>
    )



}

export default ResultsS2;