'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import Loading from './components/Loading'
import { useState, useEffect } from 'react'

type PokemonData = {
  name: string;
  id: number;
  sprites: {
    front_default: string;
  }
  types: PokemonTypes[];
}

type PokemonTypes = {
  slot : string;
  type : {
    name: string;
    url: string;
  }
}


const Home = () => {
  const [pokemonList, setPokemonList] = useState<PokemonData[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchPokemonList = async () => {
      try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        if(!response.ok) {
          throw new Error('gagal fetch data pokemon')
        }
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon: any) => {
            const response = await fetch(pokemon.url);
            if(!response.ok){
              throw new Error('gagal fetch data detail pokemon')
            }
            return response.json();
          })
        );
        setPokemonList(pokemonDetails);
      } catch (error) {
        console.error('error fetching pokemon list', error);
      } finally {
        setLoading(false)
      }
    };
    fetchPokemonList();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="pokemon-list">
            {pokemonList.map((pokemon) => (
                <Hero 
                  name={pokemon.name} 
                  id={pokemon.id} 
                  img={pokemon.sprites.front_default}
                  types={pokemon.types}
                />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Home
