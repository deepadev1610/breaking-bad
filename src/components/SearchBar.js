import React from 'react'
import { Form } from 'react-bootstrap'

const SearchBar = ({text,setText}) => {
    return (
        <section className="search">
            <Form.Control type="text" placeholder="Search characters" autoFocus
                value={text} onChange={e => setText(e.target.value)}/>
        </section>
    )
}

export default SearchBar
