import React, { useState } from 'react'
import { Pagination } from 'react-bootstrap'

const PaginationComponent = ({ setOffset }) => {
    const [active, setActive] = useState(1);
    const PageItems = []
    for (let number = 1; number <= 7; number++) {
        PageItems.push(
            <Pagination.Item key={number} active={number === active} onClick={() => { setActive(number); setOffset(10 * (number - 1)); }}>
                {number}
            </Pagination.Item>
        );  
    }
    return (
        <div>
            <Pagination>{PageItems}</Pagination>
        </div>
    )
}
export default PaginationComponent;
