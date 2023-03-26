import React from "react";

//TODO: fix implementation to see every picture in this page

const images = importAll(require.context('../images/PhotoGallery', false, /\.(png|jpe?g|svg)$/))
const Photography = () => {
    return (
    <div>
        {/* <h3>My Photography</h3> */}
            {
                images.map((image, index) => <img key={index} src={image} alt="info"></img>)
            }
    </div>
    );
}

function importAll(r) {
    return r.keys().map(r);
}

export default Photography;