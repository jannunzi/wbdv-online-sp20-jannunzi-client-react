import React from "react";
import {Link} from "react-router-dom";

export default class Protype extends React.Component {
    componentDidMount() {
        let searchTitle = this.props.match.params.latestTitleSearch
        console.log(searchTitle)
        console.log(this.props.match.params)
        if(searchTitle === 0) {
            searchTitle = 'batman'
        }
        fetch(`http://www.omdbapi.com/?s=${searchTitle}&apikey=4a249f8d`)
            .then(response => response.json())
            .then(results => this.setState({
                movies: results.Search,
                titleSearch: searchTitle
            }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.latestTitleSearch != this.props.match.params.latestTitleSearch) {
            this.findMovieByTitle(this.props.match.params.latestTitleSearch)
        }
    }

    findMovieByTitle = (title) =>
        fetch(`http://www.omdbapi.com/?s=${title}&apikey=4a249f8d`)
            .then(response => response.json())
            .then(results => this.setState({
                movies: results.Search
            }))

    state = {
        movies: [],
        titleSearch: ''
    }
    render() {
        return(
            <div>
                <h1>OmdbAPI Client ({this.props.match.params.latestTitleSearch})</h1>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input
                            onChange={e => this.setState({
                                titleSearch: e.target.value
                            })}
                            value={this.state.titleSearch}
                            className={`form-control`}/>
                        <button
                            onClick={() => this.props.history.push(this.state.titleSearch)}
                            className={`btn btn-primary btn-block`}>
                            Search Movie
                        </button>
                    </li>
                    {
                        this.state.movies.map(movie =>
                            <li key={movie.imdbID}
                                className="list-group-item">
                                <Link to={`/prototype/movies/${movie.imdbID}`}>
                                    {movie.Title}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
