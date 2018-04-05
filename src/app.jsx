import React, { Component } from 'react';
import './app.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './profile';
import Gallery from './gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }

  search() {
    const BASE_URL = 'https://tangerine.ngrok.io/environmental_data_point/_design/openag/_view/by_timestamp?startkey=%5B%22environment_1%22,%7B%7D%5D&endkey=%5B%22environment_1%22%5D&limit=5000&descending=true&stale=update_after'
    // let FETCH_URL = `${BASE_URL}?q=${this.state.query}&type=artist&limit=1`;
    // let FETCH_URL = `${BASE_URL}`;
    const ALBUM_URL =  'https://api.spotify.com/v1/artists/'

    fetch(BASE_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);

      // const artist = json.artists.items[0];
      // this.setState({artist});
      //
      // FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`;
      // fetch(FETCH_URL, {
      //   method: 'GET'
      // })
      // .then(response => response.json())
      // .then(json => {
      //   const { tracks } = json;
      //   this.setState({tracks});
      // })
    });
  }

  render() {
    return (
      <div className="App">
        <div
          className="App-title">
            Music Master
        </div>
        <FormGroup>
          <InputGroup>
            <FormControl
              className="Input-field"
              type="text"
              placeholder="Search for an Artist"
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {
          this.state.artist != null
          ?
          <div>
            <Profile
              artist={this.state.artist}
            />
            <Gallery
              tracks={this.state.tracks}
            />
          </div>
          : <div></div>
        }

      </div>
    )
  }
}

export default App;
