import Link from 'next/link'
export async function generateMetadata({params}){
    const {id,abilityId}=params
    return {
        title:`ability numer ${abilityId} pokemona pod id ${id}`,
        description:`ability numer ${abilityId} pokemona pod id ${id}`
    }
}
export default async function getPokemon({params}){
    const id=params.id
    const Abilityid=params.abilityId

    const url=`https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemon=await fetch(url).then(r=>r.json())

     console.log(pokemon.abilities[Abilityid])
    return(
        <section>
          <div>  <Link style={{color:'blue'}}  href={`/pokemon/${pokemon.id}`}>name: {pokemon.name}</Link></div>
            <ul>
                <li >abilty: {pokemon.abilities[Abilityid].ability.name}</li>
            </ul>

        </section>
    )
}