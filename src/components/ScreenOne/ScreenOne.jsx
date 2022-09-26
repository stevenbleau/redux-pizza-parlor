import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ScreenOne = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    let [pizzaList, setPizzaList] = useState([]);
    const order = useSelector(store => store.order)

    useEffect(() => {
        getPizza();
    }, []);
    
    const getPizza = () => {
        axios({
            method: 'GET',
            url: '/api/pizza'
        }).then((response) => {
            setPizzaList(response.data)
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <>
        <h1> Select Pizza</h1>
        <ul> 
            {
                pizzaList.map((pizza) => (
                    <li key={pizza.id}>
                         Name:{pizza.name} Description: {pizza.description}
                         Price: {pizza.price}
                    </li>
                ))
            }
        </ul>
        </>
    )
}

export default ScreenOne;