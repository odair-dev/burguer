import { Product } from "./Product/Product.jsx";
import { StyledDivContainer } from "./productContainer.js";

export function ProductsList({menuList, currentSale, setCurrentSale, showFiltered, setShowFiltered, found, setFound}){
    return(
        <StyledDivContainer>
            {showFiltered && 
                <div className="divFiltered">
                    <p className="textSeach">Resultado para: <span>{found}</span></p>
                    <button className="btnCleanFilter" onClick={()=>{setShowFiltered(false); setFound("")}}>Limpar busca</button>
                </div>
            } 
            <ul>
                {menuList.map((element)=>{
                    return(
                        <Product key={element.id} element={element} currentSale={currentSale} setCurrentSale={setCurrentSale}/>
                    )
                })}
            </ul>
        </StyledDivContainer>
    )
}