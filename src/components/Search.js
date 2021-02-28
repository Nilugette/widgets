import React, { useState } from 'react'

const Search = () => {
    const [term, setTerm] = useState('')
    return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        className="input"
                        type="text" 
                        value={term}
                        onChange ={e=> setTerm(e.target.value)}
                        placeholder="Search" />
                </div>
            </form>
        </div>
    )
}

export default Search