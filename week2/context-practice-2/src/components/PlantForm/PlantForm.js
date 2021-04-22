import React from "react";
import {PlantContextConsumer} from "../../provider/plantContext";


class PlantForm extends React.Component {
    
    state = {
        name: "",
        location: "",
        imgUrl: ""
    }


    handleChange = (e) => { 
        const { name, value } = e.target
        this.setState({ [name] : value})
    }

    clearField = (e) => {
        this.setState({
            name: "",
            location: "",
            imgUrl: ""
        })
    }
    

    render() {    
     
        return (
                <PlantContextConsumer> 
                    {({addPlants}) => (
                        <div className = "plantForm">  
                            <form>
                                
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Plant Name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Location"
                                    value={this.state.location}
                                    onChange={this.handleChange}
                                />
                                <input
                                    type="text"
                                    name="imgUrl"
                                    placeholder="Image Url"
                                    value={this.state.imgUrl}
                                    onChange={this.handleChange}
                                />
                                <button 
                                onClick={(e) => {addPlants(e, this.state); this.clearField()}}
                                type="submit"
                                >Add Plant</button>
                                <p>
                                    How Many Endangered Plants Can You List?
                                </p>
                            </form>
                        </div> 
                    )}
                </PlantContextConsumer>
        )
    }
}

export default PlantForm;