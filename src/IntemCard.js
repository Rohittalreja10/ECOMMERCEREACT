import React from 'react';
import {useCart} from "react-use-cart";
const ItemCard = (props) => {
    const {addItem} = useCart();

    return (
        <div className='col-lg-3 mb-4'>
            <div class="card">
                <img src={props.img} class=""/>
                    <div class="card-body text-center">
                        <h5 class="">{props.title}</h5>
                        <h5 class="">{props.price}</h5>
                        <p class="">{props.desc}</p>
                        <button class="btn btn-success"
                        onClick={() =>addItem(props.item)}
                        >Add to Cart</button>
                    </div>
            </div>
        </div>
    );
};
export default ItemCard;