import PropTypes from 'prop-types'

import Item from "./Item"

function List(){

return(
<>
<h1>Minha lista</h1>
<ul>
    <Item marca = "Pegeout" anoLancamento={1985}/>
    <Item marca = "Kansas" anoLancamento={1964} />
</ul>

</>

)
}


export default List