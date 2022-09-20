
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ScreenTwo = () => {
    const history = useHistory(); 
    const name = useSelector(store => store.name); // getter
    const address = useSelector(store => store.address); // getter
    const city = useSelector(store => store.city); // getter
    const zip = useSelector(store => store.zip); // getter

    const dispatch = useDispatch();


    const handleName = (event) => {
        dispatch({ type: 'SET_NAME', payload: event.target.value});
    }
    const handleAddress = (event) => {
        dispatch({ type: 'SET_ADDRESS', payload: event.target.value});
    }
    const handleCity = (event) => {
        dispatch({ type: 'SET_CITY', payload: event.target.value});
    }
    const handleZip = (event) => {
        dispatch({ type: 'SET_ZIP', payload: event.target.value});
    }

    return (
        <>
            <h3>Step 2: Customer Information</h3>
            <div>
                {/* NAME INPUT */}
                <label htmlFor="nameInput">Name</label>
                <input value={name} onChange={handleName} className="input" id="nameInput" type="text" />

                {/* STREET ADDRESS INPUT */}
                <label htmlFor="addressInput">Street Address</label>
                <input value={address} onChange={handleAddress} className="input" id="addressInput" type="text" />

                {/* CITY INPUT */}
                <label htmlFor="cityInput">City</label>
                <input value={city} onChange={handleCity} className="input" id="cityInput" type="text" />

                {/* ZIPCODE INPUT */}
                <label htmlFor="zipInput">Zip</label>
                <input value={zip} onChange={handleZip} className="input" id="zipInput" type="number" />
                <button onClick={() => history.push('/screen/three')} className="button">Next</button>
            </div>
        </>
    );
}

export default ScreenTwo;