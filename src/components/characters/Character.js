import React from 'react'
import { Card } from 'react-bootstrap'

const Character = ({item}) => {
    return (
        <Card>
            <div className="card-inner">
                <div className="card-front">
                    <Card.Img src={item.img} alt={item.name} className="img-fluid" />
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>

                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {item.portrayed}
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <strong>Nickname:</strong> {item.nickname}
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <strong>Birthday:</strong> {item.birthday}
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <strong>Occupation:</strong> {item.occupation.join(', ')}
                        </li>
                    </ul>
                </div>
            </div>
        </Card>
    )
}

export default Character
