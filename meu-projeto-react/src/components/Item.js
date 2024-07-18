function Item(marca, anoLancamento) {
    return (
        <>
            <li>{marca} - {anoLancamento}</li>

        </>
    )

}



//Informa que tipo de item é (string, number)
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number,
}


//DefaultProps susbstitui o espaço em branco da entrada
Item.defaultProps = {
    marca:'faltou a marca',
    anoLancamento: 0,
}

export default Item