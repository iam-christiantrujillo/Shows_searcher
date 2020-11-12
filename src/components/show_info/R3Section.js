import React from 'react';

function ResultsS3({cast}){

    const renderCast = () => {

        const render = cast.map(pInfo => {

            return(
                <div className='cardPerson'>
                    
                    <div className='imagePerson'>
                        {
                            pInfo.character.image === null ?
                            <img src={pInfo.person.image.medium} alt='imagePerson' />
                            :
                            <img src={pInfo.character.image.medium} alt='imagePerson' />
                        }
                        
                    </div>

                    <div className='infoPerson'>
                        <h3>{pInfo.person.name}</h3>
                        <p>{`as ${pInfo.character.name}`}</p>
                    </div>

                </div>
            )
        })

        return render
    }

    return(
        <div class='Section3'>
            <h1>Cast</h1>
            <div className='persons'>
                {renderCast()}
            </div>
        </div>
    )

}



export default ResultsS3;