import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';


const HomeDetails = (props) => {
    const { name, price, imageURL, _id } = props.detail;
    const history = useHistory();
    const details = () => {
        const url = `orders/${_id}`;
        history.push(url);
    }
    
    return (
        <div style={{margin: "50px"}} className="col-md-3">
            <img style={{width: "300px", height: "250px"}} src={imageURL} alt=""/>
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
            <br/>
            <Button onClick={() => details()}>Buy Now</Button>
        </div>
    );
};

export default HomeDetails;