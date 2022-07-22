import React, { useState } from "react";
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import rafPhoto from '../images/me.jpg'
import "../styles/blogs.css"
const Blogs = () => {

    // Modal open state
    const [modal, setModal] = React.useState(false);
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);

    return (
    <div>

        <h3>Daily Blogs</h3>
        <Container>
            And this is for the inbox for many updates on game development, studies, artistic process, and readings.
            <h1>
                Title: The Progress
            </h1>
            <p>
                As I am typing this, it is July 1st 1:59 AM, Volume 2 of Stranger Things will come out, my first driving lesson will take place soon. And I will be working soon. I am learning to do programing (Web Development specifically) as you all are reading this one day. 
            </p>
            <Button color="primary"
                onClick={toggle}>Add Blog
        </Button>
        <Modal isOpen={modal}
               toggle={toggle}
               modalTransition={{ timeout: 200 }}>
          <ModalBody>
            Here will be a photo and a login only for the website creator (me) to update the blogs.
            <img
            className="self_photo"
            src={rafPhoto}
            alt="no image"/>
          </ModalBody>
        </Modal>
        </Container>

    </div>

    );
}

export default Blogs;