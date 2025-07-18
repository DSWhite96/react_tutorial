//Good practice to put components in separate folder from main app, keeps things less cluttered

function MovieCard({movie}) {

    function onFavoriteClick() {
        alert("clicked");
    }

    return (
        //We use className instead of class in JSX because class is a reserved word in JS
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>♥</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}
//Make your component available as a default import, that way you don't have to have it in braces
export default MovieCard