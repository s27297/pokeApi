import Image from 'next/image'
import Link from "next/link";

export async function generateMetadata({params}){
    const {id}=params
    return {
        title:`pokemon pod id ${id}`,
        description:` pokemon pod id ${id}`
    }
}
export default async function getPokemon({params}){
    const id=params.id
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemon=await fetch(url).then(r=>r.json()).catch(e=>'nie ma dannych'+e)
console.log(id)
    return(
        <section>
            <p>name: {pokemon.name}</p>
            <ul>
                <li>stats</li>
                {pokemon.stats.map(r => <li key={r.stat.name}>{r.stat.name} : {r.base_stat}</li>)}
            </ul>
            <ul>
                <li>abilities</li>

                {pokemon.abilities.map((abilit, index) =>
                    <li key={abilit.ability.name}><Link style={{color: 'blue'}}
                                                        href={`/pokemon/${id}/abilities/${index}`}
                                                        key={abilit.ability.name}>abilty: {abilit.ability.name}</Link>
                    </li>
                )}

            </ul>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>


                {id > 1  && id!=='10001' && (

                    <Link style={{color: 'red'}} href={`/pokemon/${eval(id - 1)}`}> Poprzedni pokemon</Link>
                )}

                {id==='10001' && (

                    <Link style={{color: 'red'}} href={`/pokemon/1025`}> Poprzedni pokemon</Link>
                )}
                {(id ==='1') && (

                    <p></p>
                )}
                <p><Link href={'/pokemon-list'} style={{color: 'red', justifyContent: 'center'}}>Przejdz do storny z
                    lista</Link></p>
                {id==='1025'&& (

                    <Link style={{color: 'red'}} href={`/pokemon/10001`}> Nastepny
                        pokemon</Link>

                )}
                {(id < 1025||(id>10000&&id<10277) )&& (

                    <Link style={{color: 'red'}} href={`/pokemon/${eval(id) + 1}`}> Nastepny
                        pokemon</Link>

                )}


            </div>

            {/*<Image*/}
            {/*    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}*/}

            {/*    objectFit='cover'*/}
            {/*    alt='pokemon'*/}
            {/*    width={500}*/}
            {/*    height={500}*/}

            {/*></Image>*/}
        </section>
    )
}