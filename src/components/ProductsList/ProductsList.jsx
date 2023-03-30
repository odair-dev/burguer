import { Product } from "./Product/Product.jsx";
import { StyledUl } from "./ProductList";


export function ProductsList({menuList, currentSale, setCurrentSale}){
    return(
        <StyledUl>
            {menuList.map((element)=>{
                return(
                    <Product key={element.id} element={element} currentSale={currentSale} setCurrentSale={setCurrentSale}/>
                )
            })}
        </StyledUl>
    )
}