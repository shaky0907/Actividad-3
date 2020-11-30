import './App.css';
import './Starwarscharacter.css';
import React from 'react'
import * as ReactBootstrap from "react-bootstrap";


export default class Starwarscharacter extends React.Component {
    
    
    

    
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

        let data = this.props.data;
        return (
            <div>
                {this.props.loading || !data? ( 
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