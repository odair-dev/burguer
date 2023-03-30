import { useState } from 'react'
import Logo from '../../img/logo.png'
import { StyledDivHeader } from './Header'

export function Header({filteredProducts, setFilteredProducts, menuList, setCurrentSale}){
    const submit = (event)=>{
        event.preventDefault();
        //console.log(filteredProducts);
        menuList.forEach((element) => {
            console.log(element);
        });

        // const formData = {descriptionInp, valueInp, typeInp}
        // addValuesToValuesList(formData);
        
        // setTextFilter(""); 
    }
    return(
        <StyledDivHeader>
            <header>
                <img src={Logo} alt="Logotipo" />
                <form onSubmit={submit}>
                    <input onChange={(event)=>setFilteredProducts(event.target.value)} type="text" placeholder='Digitar Pesquisa'/>
                    <button type='submit'>Pesquisar</button>
                </form>
            </header>
        </StyledDivHeader>
    )
}