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

    // name 
    //street
    // cost 
    // type of pizza
    //total

    const handleCheckout = () => {
        axios({
            method: 'POST',
            data: {
                //insert data here
            }
        }).then((response) => {
            //
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