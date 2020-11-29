import './App.css';
import './Starwarscharacter.css';
import React from 'react'
import * as ReactBootstrap from "react-bootstrap";

export default class Starwarscharacter extends React.Component {
    
    state ={
        loading:true,
        characters: null,
       
    }

    
    async componentDidMount(){
        const url = "https://swapi.dev/api/people/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({loading: false ,characters: data.results})
    }
    

    
    renderData(character, index){
        return (
            <tr key={index}>
                <td>{character.name}</td>
                <td>{character.height}</td>
                <td>{character.mass}</td>
                <td>{character.hair_color}</td>
                <td>{character.eye_color}</td>
                <td>{character.birth_year}</td>
                <td>{character.gender}</td>
            </tr>
        );

    }

    
    render() {

        let data = this.state.characters;

        return (
            <div>
                {this.state.loading || !this.state.characters? (
                    <div>loading...</div>
            ):(
                    <div>
                        <ReactBootstrap.Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Height</th>
                                    <th>Mass</th>
                                    <th>Hair Color</th>
                                    <th>Eye Color</th>
                                    <th>Birth Year</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(this.renderData)}    
                            </tbody>
                        </ReactBootstrap.Table>
                    </div>
                )}
            </div>
        );
    }

    
}