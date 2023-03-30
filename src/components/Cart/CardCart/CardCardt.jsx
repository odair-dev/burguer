import Imagem from "../../../img/hamburguer.png"
import { StyledDivCardCart } from "./CardCart"

export function CardCart({element, currentSale, setCurrentSale}){ 

    function removeOneProduct(){
        const newListSale = currentSale.filter(item=>item.id!==element.id);
        setCurrentSale(newListSale);
    }

    return(
        <StyledDivCardCart>
            <figure>
                <img src={element.img} alt="" />
            </figure>
            <div>
                <h3>{element.name}</h3>
                <p>{element.category}</p>
            </div>
            <button onClick={()=>removeOneProduct()}>Remover</button>
        </StyledDivCardCart>
    )
    
}