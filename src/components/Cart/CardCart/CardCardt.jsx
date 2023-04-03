import { toast } from "react-toastify";
import { StyledDivCardCart } from "./CardCart"

export function CardCart({element, currentSale, setCurrentSale}){ 

    function removeOneProduct(){
        const newListSale = currentSale.filter(item=>item.id!==element.id);
        setCurrentSale(newListSale);
        toast.success("Item removido com sucesso");
    }

    let sizeText = false;
    if(element.name.length>14){
        sizeText=true;
    }

    return(
        <StyledDivCardCart>
            <figure>
                <img src={element.img} alt={element.name} />
            </figure>
            <div>
                {sizeText && <h3>{element.name.substring(0, 14) + "..."}</h3>}
                {!sizeText && <h3>{element.name}</h3>}
                <p>{element.category}</p>
            </div>
            <button onClick={()=>removeOneProduct()}>Remover</button>
        </StyledDivCardCart>
    )
}