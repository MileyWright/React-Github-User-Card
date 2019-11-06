import React from 'react';

import './App.css';
import MyCard from './MyCard';
import Followers from './Followers';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: [],
      followers: []
    }
  }
  
  componentDidMount(){
    fetch('https://api.github.com/users/Mileywright')
      .then(res => res.json())
      .then(res => {
        this.setState({
          user: res
        })
        console.log(res)
        
      })
      .catch(err=>{
        console.log('error',err)
      })

    fetch('https://api.github.com/users/Mileywright/followers')
      .then(res => res.json())
      .then(res =>{
        this.setState({
          followers: res
        })
        console.log(res)
      })
  }


  render() {
    console.log('me',this.state.user.name)
    return (
      <div className="App">
      hello 
        <MyCard user={this.state.user} followers={this.state.followers} />
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
