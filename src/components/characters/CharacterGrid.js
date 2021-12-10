import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import Character from './Character'

const CharacterGrid = ({items,isLoading}) => {
    return isLoading? (<Spinner/>) : (
        <Row lg={4} md={2} xs={1} className="cards">
            {items.map((item) =>
                <Col key={item.char_id}>
                    <Character item={item} />
                </Col>
            )}
        </Row>
    )
}

export default CharacterGrid
