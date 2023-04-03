import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CardCart } from "./CardCart/CardCardt";
import { StyledDivCart } from "./Cart";

export function Cart({currentSale, setCurrentSale}){
    const [showMessage, setShowMessage] = useState(true);

    useEffect(()=>{
        if(currentSale.length>0){
            setShowMessage(false);
        }else{
            setShowMessage(true);
        }
    },[currentSale]);

    return(
        <StyledDivCart>
            <div className="containerCart">
                <header>
                    <h2>Carrinho de compras</h2>
                </header>
                <ul>
                    {showMessage && <h4>Sua sacola está vazia</h4>}
                    {showMessage && <h5>Adicione itens</h5>}
                    {
                        currentSale.map((element)=>{
                            return(
                                <CardCart key={element.id} element={element} currentSale={currentSale} setCurrentSale={setCurrentSale}/>
                            )
                        })      
                    }
                </ul>
                {!showMessage && <div className="divTotal">
                    <h3>Total</h3>
                    <p>{currentSale.reduce((previousValue, value)=>{return previousValue+value.price;}, 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                </div>}
                {!showMessage && <button onClick={()=>{setCurrentSale([]); toast.success("Itens removidos com sucesso")}} className="btnRemoveAll">Remover todos</button>}
            </div>
        </StyledDivCart>
    )
}