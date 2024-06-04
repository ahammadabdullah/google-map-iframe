import React from 'react';
import PropTypes from 'prop-types';

const GoogleMapIframe = ({ height, address, zoom, businessName }) => {
    const src = `https://maps.google.com/maps?width=100%25&height=${height}&hl=en&q=${encodeURIComponent(address)}(${encodeURIComponent(businessName)})&t=&z=${zoom}&ie=UTF8&iwloc=B&output=embed`;

    return (
        <div style={{ width: '100%' }}>
            <iframe
                width="100%"
                height={height}
                src={src}
            ></iframe>
        </div>
    );
};

GoogleMapIframe.propTypes = {
    height: PropTypes.string,
    address: PropTypes.string.isRequired,
    zoom: PropTypes.number,
    businessName: PropTypes.string.isRequired,
};

GoogleMapIframe.defaultProps = {
    height: '600',
    zoom: 13,
};

export default GoogleMapIframe;
