import React, { useState } from 'react';
import './ProductDetails.css';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';


const HomeDetails = (props) => {
    const { name, price, imageURL, _id } = props.detail;
    const [ orderDate, setOrderDate ] = useState(new Date)

    const history = useHistory();
    const details = () => {
        const url = `/checkout/${_id}`;
        history.push(url);
        setOrderDate()
    }

    return (
        <div className="col-md-4 mt-5">
            <div className="card mt-3" id="card">
                <div className="porduct-1 align-items-center p-2 text-center">
                    <img src={imageURL} alt="" className="rounded" style={{ width: "160px", height: "160px" }} />
                    <h5 style={{ height: "20px", marginTop: "10px"}}> {name}</h5>
                    <div className="cost mt-3 text-dark">
                        <p>Price: ${price}</p>
                        <div className="star mt-3 text-dark">
                            <FontAwesomeIcon className="star" icon={faStar} />
                            <FontAwesomeIcon className="star" icon={faStar} />
                            <FontAwesomeIcon className="star" icon={faStar} />
                            <FontAwesomeIcon className="star" icon={faStar} />
                            <FontAwesomeIcon className="star" icon={faStar} />
                        </div>
                        <button className="btn btn-outline-primary mt-3 mb-3" onClick={() => details()}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;

