import { toast } from 'react-toastify';
import { StyledLi } from './Product'

export function Product({element, currentSale, setCurrentSale}){

    return(
        <StyledLi>
            <div>
                <img src={element.img} alt={element.name} />
            </div>
            <h2>{element.name}</h2>
            <p>{element.category}</p>
            <h3>{element.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h3>
            <button onClick={()=>{
                    if(!currentSale.some(repeated=>repeated.id===element.id)){
                        setCurrentSale([...currentSale, element])
                    }else{
                        toast.error("Este produto já está na sacola!", {
                            autoClose: 2000,
                        });
                    }
                }} 
            >Adicionar</button>
        </StyledLi>
    )
}