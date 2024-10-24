import {console} from "next/dist/compiled/@edge-runtime/primitives";
import Link from "next/link";
import {off} from "next/dist/client/components/react-dev-overlay/pages/bus";


var qwertry=[]

export  default  async function sort({searchParams}) {
    let i=0
    const type =searchParams.type || 'any'
    const sort = searchParams.sort || 'start'
    const offset = searchParams.offset || '0'

    console.log(type)
    // qwertry=['cat']
    console.log(sort)
    const url = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`
    const pokemon = await fetch(url).then(r => r.json())
    await console.log (pokemon.results[0].url.split('/')[(pokemon.results[0].url.split('/').length)-2])
    // const z=q.url.split('/')
    // console.log(z[z.length-1])
    // console.log(type);
    if (type === 'any' && sort === "start") {
        return (<div>
            <ul>
                <li>pokemons:</li>
                {pokemon.results.map(q =>

                    (

                        <li key={q.name}><Link href={`/pokemon/${q.url.split('/')[q.url.split('/').length-2]}`}>{q.name}</Link></li>))}
            </ul>
            <p><Link href={'/pokemon/1'} style={{color: 'red'}}>Przejdz do pierwszego
                pokemona</Link></p>

        </div>)
    }

    if (type === 'any' && sort === "end") {
        return (<div>
            <ul>
                <li>pokemons:</li>
                {pokemon.results.reverse().map(q => <li key={q.name}><Link href={`/pokemon/${q.url.split('/')[q.url.split('/').length-2]}`}>{q.name}</Link></li>)}
            </ul>
            <p><Link href={'/pokemon/1'} style={{color: 'red', textAligin: 'center'}}>Przejdz do pierwszego
                pokemona</Link></p>

        </div>)
    }

    const qwe = await handle(pokemon.results, type)
    // await console.log(qwe)
    // qwertry.map(async q => await console.log(q.name))
    //   let array
    //   array=[]
    //  await cat.then(q=>array.push(q))
    // await  console.log(array)
    //  console.log(qwertry[1])
    return(<div>
            <ul>
                <li>pokemons</li>

                {/*{cat.then(q=><li key={q}>{q}</li>)}*/}
                {qwertry.map(q => <li key={++i}><Link href={`/pokemon/${q.id}`}>{q.name}</Link></li>)}
            </ul>
            <p><Link href={'/pokemon/1'} style={{color: 'red', textAligin: 'center'}}>Przejdz do pierwszego pokemona</Link></p>

        </div>
    )
    // return (<ul><Handle cat={pokemon.results} search={type} /></ul>)
    // console.log(qwertry)
    // const cat=pokemon.results.filter(q=>(q.name===type))
    // // console.log(pokemon.results.types)
    // console.log(qwertry.length)
    // return (<div>
    //     <ul>
    //         <li>pokemons:</li>
    //         {qwertry.map(q=><li key={q}>{q}</li>)}
    //     </ul>
    // </div>)
}

async function  handle(cat,search){
    var qwer=[]
    const searchType={
        name:`type: ${search}`,
        id:1,

    }
    qwertry.push(searchType)
    cat.map(async q => {
        const url = q.url
        const pokemon = await fetch(url).then(r => r.json()).catch(e=>console.log("nie udalo"))
        pokemon.types.map(async ty => {
            if (ty.type.name === search) {
                // await console.log(pokemon.name)
                await qwertry.push(pokemon)
                await qwer.push(pokemon.name)


            }
        })})
    return qwer


    // console.log(search)
    // pokemon.types.map(async q => {
    //     await console.log(q)
    /*      if(search === q.type.name)
          console.log(pokemon.name)*/
    // return(<li key={pokemon.name}>pokemon.name</li>)
    //s// })
    //


}