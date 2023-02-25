import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import profile from '../information/profile.json';

class Education extends React.Component {
    render() {
        return <Container>
            <Row>
                <Col>
                    {profile.education.map(function (edu, i) {
                        return <Media key={i}>
                            {/* <Media left top href={edu.url}>
                                <Media object src={edu.logo} alt={edu.institute} />
                            </Media> */}
                            <img src={edu.logo} alt=""/> {/*Add alt to this image*/}
                            <Media body>
                                <Media heading>
                                    <a href={edu.url}>{edu.institute}</a>
                                </Media>
                                {
                                    [
                                        {
                                            "key": "Title",
                                            "value": edu.title,
                                        },
                                        {
                                            "key": "Graduation Year",
                                            "value": edu.graduationYear
                                        },
                                        {
                                            "key": "Duration",
                                            "value": edu.durationInYears + " year(s)"
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

export default Education;