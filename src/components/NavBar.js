import React, {useState} from 'react';

function NavBar({emitSearch}){

    const [search,setSearch] = useState('')

    const onSubmitShows = (e) => {
        e.preventDefault()
        console.log('Le dieron click en buscar')
        emitSearch(search, true)
    }

    return(
        <nav className='navbar'>
            <h1 className='title'>SERIES.com</h1>
            <h3 className='question'>¿Qué serie te gustaria buscar?</h3>
            <form className='form' onSubmit={onSubmitShows}>
                <input className='input' value = {search} onChange={(e) => {
                    setSearch(e.target.value)
                }}
                required
                placeholder='Buscar'
                
                ></input>
                <button className='Buscar' type="submit">Buscar</button>
            </form>
        </nav>
    ); 

}

export default NavBar;