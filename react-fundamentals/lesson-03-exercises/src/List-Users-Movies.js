import React, {Component} from 'react';

class ListUsersMovies extends Component {
    render () {
        return (
        <div> 
        <h2>Favorite Movies</h2>
		<ol>
            {this.props.profiles.map( item => (
            <li key={this.props.userID}>{this.props.users[item.userID].name} favorite movie is {this.props.movies[item.favoriteMovieID].name}</li>
            ) ) }
        </ol>
        </div> 
        );
    }
}

export default ListUsersMovies;