import React from 'react';
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>
                    {igKey}
                </span>
                - {props.ingredients[igKey]}
            </li>;
        });

    return (
        <div>
            <h3>Your order is:</h3>
            <h3>A delicious burger with the following ingredients:</h3>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Total price: {props.totalPrice}</p>
            <p>Continue to Checkout?</p>
            <Button btnType="Success" clicked={props.continuePurchaseClicked}>CONTINUE</Button>
            <Button btnType="Danger" clicked={props.cancelPurchaseClicked}>CANCEL</Button>
        </div>
    );
};

export default orderSummary;