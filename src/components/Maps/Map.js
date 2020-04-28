import React from 'react';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
// import MyGreatPlace from './my_great_place.jsx';
const K_WIDTH = 40;
const K_HEIGHT = 40;

function SimpleMapPage() {
    // static defaultProps = {
    //     center: [59.938043, 30.337157],
    //     zoom: 9,
    //     greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
    // };
    return (
        <>
            <div class="map" style={style}>
                <GoogleMap
                    // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
                    center={[59.938043, 30.337157]}
                    zoom={9} />
            </div>
        </>

    );

}

const style = {
    // initially any map object has left top corner at lat lng coordinates
    // it's on you to set object origin to 0,0 coordinates
    position: 'absolute',
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2,

    border: '5px solid #f44336',
    borderRadius: K_HEIGHT,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4
};
export default SimpleMapPage;