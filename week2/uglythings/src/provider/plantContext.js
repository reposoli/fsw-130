import React, {Component} from 'react';
import plantData from "../plantData.json"


const {Provider, Consumer} = React.createContext();

class PlantContextProvider extends Component {

    state = {
        plants: plantData
    }
    
    addPlants = (e, plant) => {
        e.preventDefault()
        this.setState({
            plants: [...this.state.plants, plant]
            
        })
    }
        

    
    render() {

        return (
            <div>
            <Provider value=
                {{...this.state,
                addPlants: this.addPlants,
                handleDelete: this.handleDelete,
                handleEdit: this.handleEdit}}>
                {this.props.children}
            </Provider>
            </div>
        )
    }
}

export {PlantContextProvider, Consumer as PlantContextConsumer};