import React from "react";
// import './Quantity.scss';

const Quantity = ({quantity, setQuantity}) => {

    const increment = () => {
        setQuantity(quantity+1)
    };

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1);
        }
    }
    console.log('qunatity ',quantity)

    return (
        <div style={{ marginRight: '-5%'}}>
            <button style={{ width: 33, heigh: 'auto', borderRadius: 5}} onClick={() => decrement()}>
                &mdash;
            </button>
            <input type="text" value={quantity} readonly style={{ width: '40%', textAlign: 'center', border: 'none'}} />
            <button style={{ width: 33, heigh: 'auto', borderRadius: 5}} onClick={() => increment()}>
                &#xff0b;
            </button>  
        </div>
    );
      
}

export default Quantity;