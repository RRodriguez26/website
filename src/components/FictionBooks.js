import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import reading from '../information/reading-list.json';

// TODO: Fix the body to display a list of books based on categories, in this case it's Philosophy [X]

class FictionBooks extends React.Component {
    render() {
        return <Container>
          {reading["genre"][1]["Fiction"].map(function (book, i) {
            return (
              <div key={i}>
                <Media>
                  <Media body>
                    
                    <Media heading>
                    <h1>{book.Title}</h1>
                    </Media>   
                    
                    {
                                [
                                    {
                                        "key": "Author",
                                        "value": book.Author
                                      },
                                      {
                                        "key": "Publisher",
                                        "value": book.Publisher
                                      },
                                      {
                                        "key": "Year",
                                        "value": book.Year
                                      }
                                ].map(function (object) {
                                    return <div>
                                            <Row>
                                                <Col className="formLabel">{object.key}: {object.value}</Col>
                                            </Row>
                                            
                                            </div>
                                })
                            }

                  </Media>
                </Media>
              </div>
            );
          })}
    </Container>
    }
}

export default FictionBooks;