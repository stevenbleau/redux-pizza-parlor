// holly page 3 checkout 
//imports 
import {useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const checkout = () => {
    //call the previous data 
    const dispatch = useDispatch();
    const history = useHistory();
    // all prevous data goes here:
    const name = useSelector(store => store.name); // getter
    const address = useSelector(store => store.address); // getter
    const city = useSelector(store => store.city); // getter
    const zip = useSelector(store => store.zip); // getter

    // cost 
    // type of pizza
    //total

    const handleCheckout = () => {
        axios({
            method: 'POST',
            url: '/api/order',
            data: {
                    customer_name: customerName,
                    street_address: streetAddress,
                    city: city,
                    zip: zipCode,
                    type: getPizza,
                    total: totalCost,
                    pizzas: order,
            }
            
        }).then((response) => {
            alert('order placed! click button to star a new order')
            dispatch({type: 'CLEAR_ALL'});
            //history.push ('/')
        }).catch((error) => {
            console.log(error);
            alert('something is wrong on screen 3');
        })

    }
    return (
        <>
        <h3>Checkout</h3>
        <div>

        <button>Checkout</button>
        </div>
        </>
    )


}


export default checkout;