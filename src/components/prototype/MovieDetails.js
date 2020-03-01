import React from "react";

export default class MovieDetails extends React.Component {
    componentDidMount() {
        const imdbID = this.props.match.params.imdbID
        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=4a249f8d`)
            .then(response => response.json())
            .then(movie => this.setState({
                movie: movie
            }))
    }

    state = {
        movie: {}
    }
    render() {
        console.log(this.state.movie)
        return(
            <div>
                <h1>Movie Details for: {this.state.movie.Title}</h1>
                <h2>Directed by: {this.state.movie.Director}</h2>
                <p>
                    {this.state.movie.Plot}
                </p>
                <h3>Actors</h3>
                {this.state.movie.Actors}
                <br/>
                <img src={this.state.movie.Poster}/>
            </div>
        )
    }
}
