function OutraLista({ itens }) {

    return (
        <>
            <h3>Lista de itens</h3>
            {itens.length > 0?(
            itens.map((item) => (
                <p>{item}</p>
            ))) :(
                <p>Não possui itens</p>
            )}
        </>
    )

}

export default OutraLista