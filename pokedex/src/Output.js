function Output(props) {
    console.log(props)
    return (
        (props.cardColour.length === 0) ? (
            <div className="pokeCard" style={{backgroundColor: `${props.cardColour[0]}`}}>
                <h1>{props.cardName}</h1>
            </div>
           ) : 
        (props.cardColour.length === 1) ? (
            <div className="pokeCard" style={{background: `linear-gradient(135deg, ${props.cardColour[0]}, ${props.cardColour[1]})`}}>
                <h1>{props.cardName}</h1>
                <h2></h2>
            </div>
        ): null 
    )
}

export default Output