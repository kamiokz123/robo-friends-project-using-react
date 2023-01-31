import React, {Component} from "react";
import Cardlist from "../components/Cardlist";
import Searchbar from "../components/Searchbar";
import "./App.css";
import Scroll from "../components/Scroll";




class App extends Component{
        constructor(){
            super()
        this.state={
            robots:[],
            searchfield:''
        };
    }

 componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(users=>this.setState({
        robots:users
    }))
}  

 OnSearchRobo=(event)=>{
    this.setState({
        searchfield:event.target.value
    });
 }

render(){
    const {robots,searchfield}= this.state;
    const filter_robo=robots.filter(
        robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        }
    );

 
 return  !robots.length? <h1>loading</h1> :
        <div className="tc" >
            <h1 className="f1" >ALL ROBO FRIENDS</h1>
            <Searchbar OnSearch={this.OnSearchRobo}/>
            <Scroll>
             <Cardlist
               robots={filter_robo}/>
            </Scroll>
        </div>
}
}



export default App;