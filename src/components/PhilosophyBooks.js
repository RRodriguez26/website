import React from 'react';
import {Container, Row, Col, Media} from 'reactstrap';
import reading from '../information/reading-list.json';

// TODO: Fix the body to display a list of books based on categories

class PhilosophyBooks extends React.Component {    
    render() {
        return <Container>
            <Row>
                <Col>
                {reading.genre.map(function (book, i) {
                    return <Media key={i}>
                        <Media body>
                            {
                                [
                                    {
                                        "key": "Title",
                                        "value": book.title,
                                    },
                                    {
                                        "key": "Author",
                                        "value": book.author,
                                      },
                                      {
                                        "key": "Year",
                                        "value": book.year,
                                      },
                                      {
                                        "key": "Publisher",
                                        "value": book.publisher,
                                      }
                                ].map(function (object) {
                                    return <div>
                                            <Row>
                                                <Col className="formLabel">{object.key}:</Col>
                                            </Row>
                                            <Row>
                                                <Col>{object.value}</Col>
                                            </Row>
                                            </div>
                                })
                            }
                        </Media>
                    </Media>
                })}
                </Col>
            </Row>
        </Container>
    }
}

export default PhilosophyBooks;