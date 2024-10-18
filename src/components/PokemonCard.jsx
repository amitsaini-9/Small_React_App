const PokemonCard = ({ pokemon }) => {
  return (
    <div className="container">
      <div className="card cardContainer" style={{ width: "18rem" }}>
        <div key={pokemon.id} className="pokemon-card cardHolder">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{pokemon.name}</h5>
            <p className="card-text">ID: {pokemon.id}</p>
            <p className="card-text">Height: {pokemon.height}</p>
            <p className="card-text">Weight: {pokemon.weight}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
