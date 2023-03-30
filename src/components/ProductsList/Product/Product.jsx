import { StyledLi } from './Product'

export function Product({element, currentSale, setCurrentSale}){

    return(
        <StyledLi>
            <div>
                <img src={element.img} alt="" />
            </div>
            <h2>{element.name}</h2>
            <p>{element.category}</p>
            <h3>{element.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h3>
            <button onClick={()=>{
                    if(!currentSale.some(repeated=>repeated.id===element.id)){
                        setCurrentSale([...currentSale, element])
                    }else{
                        console.log("Já Existe!");
                    }
                }} 
            >Adicionar</button>
        </StyledLi>
    )
}