import images from "../../../assets/users/images"
import "./style.scss"

function Card(props) {
    return ( 
        <div className="card">
            <img src={props.url} alt="" />
            <div className="intro">
                <h1>{props.name}</h1>
                <div className="card__item">
                    <p>{props.description}</p>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
     );
}

export default Card;