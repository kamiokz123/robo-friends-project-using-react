import React, {Component} from "react";
import Cardlist from "../components/Cardlist";
import Searchbar from "../components/Searchbar";
import "./App.css";
import Scroll from "../components/Scroll";
import { connect } from "react-redux";
import { onSearch , requestRobots } from "../actions/action";

const mapStateToProps = (state) => {
    return {
        searchField : state.onSearchChange.searchField,
        isPending: state.onRequestRobots.isPending,
        robots: state.onRequestRobots.robots,
        error: state.onRequestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        search_robos: (ev) => dispatch(onSearch(ev.target.value)),
        finalRequestRobots : () => requestRobots(dispatch)

    }

}




class App extends Component{
      

 componentDidMount(){
    this.props.finalRequestRobots();
}  


render(){
    const {searchField,search_robos, robots , isPending } = this.props;
    const filter_robo=robots.filter(
        robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        } 
    );

 
 return  isPending? <h1>loading</h1> :
        <div className="tc" >
            <h1 className="f1" >KAMRAN'S ROBO FRIENDS</h1>
            <Searchbar OnSearch={search_robos}/>
            <Scroll>
             <Cardlist
               robots={filter_robo} />
            </Scroll>
        </div>
}
}



export default connect(mapStateToProps,mapDispatchToProps)(App);