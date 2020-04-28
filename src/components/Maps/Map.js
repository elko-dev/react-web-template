import React from 'react';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import Location from './Location';

function SimpleMapPage() {
    // static defaultProps = {
    //     center: [59.938043, 30.337157],
    //     zoom: 9,
    //     greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
    // };
    return (
        <>
            {/* <div className="section"> */}

            {/* <Container> */}

            <div className="map" style={style}>
                <GoogleMap
                    // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
                    center={[44.976400, -93.268548]}
                    zoom={9} >
                    <Location lat={44.976402} lng={-93.268549} text={'A'}/>
                    <Location lat={45.076422} lng={-93.36958} text={'B'}/>

                </GoogleMap>

                {/* </GoogleMap> */}
            </div>
            {/* </Container> */}
            {/* </div> */}
        </>

    );

}

const style = {
    // initially any map object has left top corner at lat lng coordinates
    // it's on you to set object origin to 0,0 coordinates
    // position: 'absolute',
    width: '100%',
    height: 600,
    // left: -K_WIDTH / 2,
    // top: -K_HEIGHT / 2,

    // border: '5px solid #f44336',
    // borderRadius: K_HEIGHT,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 50
    // padding: 4
};
export default SimpleMapPage;