import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class ArsenalContextProvider extends Component {
    state = {
        menuList: [
            { 
              title: "SoulAmmo",
              description: "Our Signature Flavorless Elderberry Infused Seamoss Gel"
            },
      
            { 
              title: "Applia",
              description: "ALL Natural Apple & Elderberry Infused Sea Moss Gel"
            },
            { 
              title: "Maxberry",
              description: "BERRY BOOST - Elder, Black, Straw & Blue Berry Infused Sea Moss Gel!"
            },
            { 
              title: "Strawbanie",
              description: "The Name Says It All.. Strawberries and Elderberries.. YUMMY!"
            },
      
            { 
              title: "Bluezberry",
              description: "Blueberry Infused Sea Moss Gel.. Great Way To Start Your Day"
            }  
          ],          
        
          title: "",
          description: ""
      }
  
      handleChange=(event) => {
          event.preventDefault()
          const {name, value} = event.target
          this.setState({ 
            [name]: value
          })
        }
      
        menuListUpdate=(event) => {
          event.preventDefault()
          this.setState({
            menuList: this.state.menuList.concat
            ({
              title: this.state.title, 
              description: this.state.description
            }),
            
            title: "",
            description: ""
          })
        }
  
        menuEdit=(index) => {
            console.log("edit", index)
            console.log(document.getElementById(index).children)
            var value1=(document.getElementById(index).children[2]).value
            var value2=(document.getElementById(index).children[3]).value
            var array=this.state.menuList
            Object.assign(array[index], {title: value1, description: value2})
            console.log(array)
            this.setState({menuList: array})
        }
  
        menuDelete=(index) => {
            console.log("edit", index)
            console.log(document.getElementById(index))
            var array=this.state.menuList
            array.splice(index, 1)
            console.log(array)
            this.setState({menuList: array})
        }  
  
  
      render() {
          return (
              <Provider            
                  value={{
                      menuList: this.state.menuList,
                      title: this.state.title, 
                      description: this.state.description,
                      handleChange: this.handleChange,
                      menuListUpdate: this.menuListUpdate,
                      menuEdit: this.menuEdit,
                      menuDelete: this.menuDelete
                  }}>
                      {this.props.children}
              </Provider>
          )
      }
  }

export {ArsenalContextProvider, Consumer as ArsenalContextConsumer}