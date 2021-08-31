import React, {useEffect, useState} from "react";
import './style.css'
import Output from './Output'
// import Autosuggest from 'react-autosuggest';

//{poke.map(poke =>poke.species.name)}



const colours =[ {
    type: 'normal',
    colour: '#A8A77AFF'},
    {type: 'fire',
    colour: '#EE8130FF'},
    {type: 'water',
    colour: '#6390F0FF'},
    {type: 'electric',
    colour: '#F7D02CFF'},
    {type: 'grass',
    colour: '#7AC74CFF'},
    {type: 'ice',
    colour: '#96D9D6FF'},
    {type: 'fighting',
    colour: '#C22E28FF'},
    {type: 'poison',
    colour: '#A33EA1FF'},
    {type: 'ground',
    colour: '#E2BF65FF'},
    {type: 'flying',
    colour: '#A98FF3FF'},
    {type: 'psychic',
    colour: '#F95587FF'},
    {type: 'bug',
    colour: '#A6B91AFF'},
    {type: 'rock',
    colour: '#B6A136FF'},
    {type: 'ghost',
    colour: '#735797FF'},
    {type: 'dragon',
    colour: '#6F35FCFF'},
    {type: 'dark',
    colour: '#705746FF'},
    {type: 'steel',
    colour: '#B7B7CEFF'},
    {type: 'fairy',
    colour: '#D685ADFF'}
]





export default function SearchPoke(){

    const [query, setQuery] = useState('')
    const [poke, setPoke] = useState({species: '', sprites: '', types: '', stats: '', base_stat: '', type: ''})
    const [pokeTypes, setPoketype] = useState([])

    const [dataLoaded, setData] = useState(false)

    const [newState, setState] = useState([])

    let newArr = []
function findPokeColor() {
    for (let i = 0; i<colours.length; i++) {
        if(colours[i].type.includes(pokeTypes[0])) {
          newArr.push(colours[i].color)
          console.log(newArr)
        //   setState(newArr)
        }
    }
}

function findPokeColors() {
    for (let i = 0; i<colours.length; i++) {
        if(colours[i].type.includes(pokeTypes[0]) || (colours[i].type.includes(pokeTypes[1]))) {
        newArr.push(colours[i].colour)
        console.log(newArr)
        // console.log(newArr[0])
        setState(newArr)
        
    }
}}

    const searchPoke = async (e) => {
        e.preventDefault(); //Stopper siden fra å refreshe


        // const query = "pikachu";

        const url = `https://pokeapi.co/api/v2/pokemon/${query}`;

        try {
        const res = await fetch(url);
        const data  = await res.json();
        console.log(data)
        setPoke(data);
        // console.log(poke)
        setPokeStats(poke.stats)
        
        // console.log(poke.stats)
        setData(true)
        

        setPoketype(data.types.map((i) => i.type.name))
        }catch(err){
            console.log("shit")
        }
    }

    const [pokeStats, setPokeStats] = useState([''])






      
    //   findPokeColor()

    /*map alle pokemonene for autocomplete, autocomplete paste på w3schools*/ 

    // (poke.species.name.includes("pikachu")) ? style.backgsroundColor = "lightblue" : null

    useEffect(() => {
        pokeTypes.length === 1 ? findPokeColor(): findPokeColors()

    }, [pokeTypes])


    
    
    

    return (
        <div>
            
        <form className="form" onSubmit={searchPoke}>
            <label className="label" htmlFor="query">Pokemon:</label>
                <input className="input" type="text" name="query"
                    placeholder="Name or ID"
                        value = {query} onChange = {(e) => setQuery(e.target.value)} />
                    <button className="button" type="submit">Search</button>
        </form>
        <div className = "card" style={{background: `linear-gradient(0deg, ${newState[0]} 0%, ${newState[1]} 35%)`}}>
            <div className = "sprite">
                <h1>{poke.species.name} (ID: {poke.id})</h1>
                <img src = {poke.sprites.front_default} alt = ""></img>
                <img src = {poke.sprites.back_default} alt = ""></img>
        </div>
            <div className = "sprite_2">
                <h3>Shiny version:</h3>
                <img src = {poke.sprites.front_shiny} alt = ""></img>
                <img src = {poke.sprites.back_shiny} alt = ""></img>
        </div>
            <div className = "type">
                {/* {dataLoaded ? <h3 style={{backgroundColor: `${newState[0]}`}}>Type: {poke['types'][0]['type']['name']}</h3>: null} */}
                {dataLoaded ? <h3>Type: {poke['types'][0]['type']['name']}</h3>: null}
                {/* {poke.types.length == 1 } */}
            </div>
                <div className = "stats">
            {dataLoaded ? <h4>Health: {poke['stats'][0]['base_stat']}</h4>: null}
            {dataLoaded ? <h4>Attack: {poke['stats'][1]['base_stat']}</h4>: null}
            {dataLoaded ? <h4>Defense: {poke['stats'][2]['base_stat']}</h4>: null}
            {dataLoaded ? <h4>SP Attack: {poke['stats'][3]['base_stat']}</h4>: null}
            {dataLoaded ? <h4>SP defense: {poke['stats'][4]['base_stat']}</h4>: null}
            {dataLoaded ? <h4>speed: {poke['stats'][5]['base_stat']}</h4>: null}

        </div>
        </div>

        </div>

        

    )
}