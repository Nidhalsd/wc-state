import React, { Component } from 'react';
import './App.css'; 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Nidhal Saidi',
        bio: 'A full stack developer in GOMYCODE',
        imgSrc: 'https://c4.wallpaperflare.com/wallpaper/56/368/958/anime-lufy-one-piece-wallpaper-preview.jpg',
        profession: 'Software Engineer',
      },
      shows: false,
      timeInterval: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, timeInterval } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <p><strong>Profession:</strong> {person.profession}</p>
            <p><strong>Time Since Mount:</strong> {timeInterval} seconds</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
