import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots  } from './robots';
import Scroll from '../components/Scroll.js'
import './App.css';

class App extends Component {
    constructor()
    {
        super()
        this.state= {
            robots: [],
            searchfield: ''
        }
     //   console.log('consructor');
    }


    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> this.setState({robots: users}))
        //console.log('check');
        
       // console.log('componentdidmuont');
    }


    onSearchChange =(event) =>
    {
        this.setState({searchfield: event.target.value})
        
            
    }

    render(){
        const { robots , searchfield}= this.state;
        const filteredRobots= robots.filter(robot=> 
            {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase());
            })
            return !robots.length?
                 <h1 className>Loading</h1>
            :
            (
            //  console.log('render');
                <div className='tc'>
                    <h1 className = 'f1' >RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>

            );
    }
}



export default App;