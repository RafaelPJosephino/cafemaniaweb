import { useState } from "react"
import "./CardItem.css"
function CardItem(props) {
    const [food] = useState(props.food);

    return (
        <div key={food.id} className="content b my-2">
            <div className="c-image">
                <img src={food.imagem} alt="" />
            </div>
            <div className="t-n-p my-2">
                <div className="header">
                    <span className="title">{food.titulo}</span>
                    <span className="price">{food.valor}</span>
                </div>
                <div className="des my-3 ">
                    <p>"tse"</p>
                </div>
            </div>
            <div>
                <button onClick={() => { props.addCarrinho(food) }}>Adicionar no carrinho</button>
                <button onClick={() => { props.delCarrinho(food) }}>remover do carrinho</button>
            </div>
        </div>
    );

}

export default CardItem;
