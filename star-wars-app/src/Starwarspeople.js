import './App.css';
import './Starwarscharacter.css';
import React from 'react'
import Starwarscharacter from './Starwarscharacter';

export default class Starwarspeople extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            characters: null
        }
    }

    
    async componentDidMount(){
        const url = "https://swapi.dev/api/people/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({loading: false ,characters: data.results})
    }

    render(){


        return(
            
            <div>
                {this.state.loading || !this.state.characters? (
                    <div>loading...</div>
            ):(
                   
                    <div> 
                        <Starwarscharacter data={this.state.characters}></Starwarscharacter>
                    </div>
                )}
            </div>

        );
    }
}