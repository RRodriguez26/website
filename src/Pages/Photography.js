import React from "react";
import Gallery from "react-photo-gallery";


// TODO: Implement photo gallery, the initial issue was that the directory was wrong
// TODO: Find a way to store photos in the 'database' instead stored from the computer.
const images = importAll(require.context('../images/PhotoGallery', false, /\.(png|jpe?g|svg)$/));
const BasicRows = () => <Gallery photos={images} />;
const Photography = () => {
    return (
    <div id="photography">
        <h3>My Photography</h3>
            {
                images.map((image, index) => <img key={index} src={image} alt="info"></img>)
            }
            <BasicRows />
    </div>
    );
}

function importAll(r) {
    return r.keys().map(r);
}

export default Photography;