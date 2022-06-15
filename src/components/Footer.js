import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
    render() {
        return(
        <footer>
            <hr/>
            <Container>
                <a href="https://www.instagram.com/towering_manifesto.py/"><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="https://github.com/RRodriguez26"><FontAwesomeIcon icon={faGithub}/></a>
                <a href="https://www.linkedin.com/in/rafael-perez-2a442b195/"><FontAwesomeIcon icon={faLinkedin}/></a>
            </Container>
        </footer>
        )
    }
}

export default Footer;