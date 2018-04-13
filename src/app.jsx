import React, { Component } from 'react';
import './app.css';
import {Button } from 'react-bootstrap';
import Reading from './reading';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      readings: []
    }
  }

  search() {
    console.log("search initiated");
    const BASE_URL = 'https://tangerine.ngrok.io/environmental_data_point/_design/openag/_view/by_timestamp?startkey=%5B%22environment_1%22,%7B%7D%5D&endkey=%5B%22environment_1%22%5D&limit=5000&descending=true&stale=update_after'
    // let FETCH_URL = `${BASE_URL}?q=${this.state.query}&type=artist&limit=1`;
    // let FETCH_URL = `${BASE_URL}`;
    // const ALBUM_URL =  'https://api.spotify.com/v1/artists/'

    fetch(BASE_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      console.log("values received");
      const readings = json.rows;
      this.setState({readings});

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
            Food Master
        </div>
            <Button
              className="Button"
              label="Merder"
              bsStyle="danger"
              onClick={() => { this.search() }}
            > MURDER CARMEN
            </Button>
        {
          this.state.reading != null
          ?
          <div>
            <Reading
              reading={this.state.reading}
            />

          </div>
          : <div></div>
        }

      </div>
    )
  }
}

export default App;
