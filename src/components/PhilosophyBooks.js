import React from 'react';
import {Container, Row, Col, Media} from 'reactstrap';
import reading from '../information/reading-list.json';

// TODO: Fix the body to display a list of books based on categories, in this case it's Philosophy [ ]

class PhilosophyBooks extends React.Component {    
    render() {
        return <Container>
            <Row>
                <Col>
                    {reading.genre.map(function (books, i) {
                        return (
                            <div key={i}>
                                <Media>
                                    <Media body>
                                        {/* {books.Philosophy.map(function (book, j){
                                                return (
                                                <div key={j}>
                                                    {
                                                    [
                                                        {
                                                            "key": "Title",
                                                            "value": book.Title,
                                                        },
                                                        {
                                                            "key": "Author",
                                                            "value": book.Author,
                                                          },
                                                          {
                                                            "key": "Year",
                                                            "value": book.Year,
                                                          },
                                                          {
                                                            "key": "Publisher",
                                                            "value": book.Publisher,
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
                                                </div>
                        );
                    })   
                                        } */}
                                    </Media>
                                </Media>
                            </div>
                            )})}
                </Col>
            </Row>
        </Container>
    }
}

export default PhilosophyBooks;