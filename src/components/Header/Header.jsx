import { toast } from 'react-toastify';
import Logo from '../../img/logo.png';
import { StyledDivHeader } from './Header';

export function Header({setFilteredProducts, menuList, found, setFound}){

    const submit = (event)=>{
        event.preventDefault();
        if(found.legth!=0&&found.trim()!=""){
            let newFound = [];
            menuList.forEach((element) => {
                if((element.name.toLowerCase().includes(found.trim().toLowerCase()))||(element.category.toLowerCase().includes(found.trim().toLowerCase()))){
                    newFound.push(element);
                }
            })
            if(newFound.legth!=0&&newFound!=""){
                setFilteredProducts(newFound);
            }else{
                toast.warning("Sua pesquisa não retornou nenhum resultado");
            }
        }else{
            toast.warning("Digite algo a ser pesquisado");
        }
    }

    return(
        <StyledDivHeader>
            <header>
                <img src={Logo} alt="Logotipo" />
                <form onSubmit={submit}>
                    <input value={found} onChange={(event)=>setFound(event.target.value)} type="text" placeholder='Digitar Pesquisa'/>
                    <button type='submit'onClick={()=>setFilteredProducts([])}>Pesquisar</button>
                </form>
            </header>
        </StyledDivHeader>
    )
}