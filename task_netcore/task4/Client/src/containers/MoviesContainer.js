import React from 'react';
import axios from 'axios'
import MoviesAll from '../views/MoviesAll';

class MoviesContainer extends React.Component{
    state = {
        movies: []
    }

    componentDidMount() {
        axios.get(`http://localhost:50834/movie/getmovies`)
          .then(response => {
            this.setState({ movies: response.data });
          })
      }

    eachMovie = i => {
		return (
			<MoviesAll
				name={i.name}
				picture={i.pictureUrl}
                id={i.id}
                country={i.country}
                rating={i.rating}
                genre={i.genre}
                year={i.year}
                description={i.description} />
		);
	};  
    
    render() {
        return (
            <div className='movieContainer'> 
            {this.state.movies.map(this.eachMovie)}
            </div>
        )
    }
    
}

export default MoviesContainer;