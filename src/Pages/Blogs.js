import {Container, Button, Modal, ModalBody} from "reactstrap";
import { getInfo, getTopTracks } from "../services/authorization.js";
import { SPOTIFY_CLIENT } from "../services/credentials.js";
import {useState, useEffect} from "react";
import rafPhoto from '../images/me.jpg'
import "../styles/blogs.css"


const Blogs = () => {
    // Modal open state
    const [modal, setModal] = useState(false);
    const [tracks, setTracks] = useState(undefined);
    const [profile, setProfile] = useState({});

    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    useEffect(() => {
        async function fetchData() {
            const profile = await getInfo(code, process.env.SPOTIFY_CLIENT);
            setProfile(profile);

            const topTracks = await getTopTracks();
            setTracks(topTracks?.items || []);
        }

        fetchData();
    }, [code]);
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);


    return (
        <div>
            <h3>Daily Blogs</h3>
            <Container>
                And this is for the inbox for many updates on game development, studies, artistic process, and readings.
                <h1>Title: The Progress</h1>
                <p>
                    As I am typing this, it is July 1st 1:59 AM, Volume 2 of Stranger Things will come out, my first driving lesson will take place soon. And I will be working soon. I am learning to do programming (Web Development specifically) as you all are reading this one day.
                </p>
                <Button color="primary" onClick={toggle}>Add Blog</Button>
                <Modal isOpen={modal} toggle={toggle} modalTransition={{ timeout: 200 }}>
                    <ModalBody>
                        Here will be a photo and a login only for the website creator (me) to update the blogs.
                        <img className="self_photo" src={rafPhoto} alt="Myself" />
                    </ModalBody>
                </Modal>
                <h1>My Playlist</h1>
                <p>{profile.email}</p>
                <ul>
                    {tracks.map(track => (
                        <li key={track.id}>{track.name} by {track.artists[0].name}</li>
                    ))}
                </ul>
            </Container>
        </div>
    );
}

export default Blogs;