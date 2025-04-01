import React, {useState} from 'react'

export default function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    }

    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    }

    return (
        <>
            <div>
                <input value={name} onChange={handleNameChange} type="text" />
                <p>Name: {name}</p>
            </div>
            <div>
                <input value={quantity} onChange={handleQuantityChange} type="number" />
                <p>Quantity: {quantity}</p>
            </div>
            <div>
                <textarea value={comment} onChange={handleCommentChange} 
                placeholder='Enter delivery instructions.'></textarea>
                <p>Comment: {comment}</p>
            </div>
            <div>
                <select value={payment} onChange={handlePaymentChange}>
                    <option value={""}>Select payment</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <p>Payment: {payment}</p>
            </div>
            <div>
                <label htmlFor="delivery">
                    <input id='delivery' type="radio" value={"Delivery"} checked={shipping === "Delivery"} 
                    onChange={handleShippingChange} />
                    Delivery
                </label>
                <label htmlFor="pickup">
                    <input id='pickup' type="radio" value={"Pick up"} checked={shipping === "Pick up"} 
                    onChange={handleShippingChange} />
                    Pick up
                </label>
                <p>Shipping method: {shipping}</p>
            </div>
        </>
    );
}