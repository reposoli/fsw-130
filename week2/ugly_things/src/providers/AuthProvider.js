import React, {Component} from 'react';

const AuthContext = React.createContext()

class AuthProvider extends Component {

    constructor(){
        super()
        this.state={
            imTestState : 'hi',
            userToken: null
        }
    }

    handleAuthLogin = () => {
        console.log('test fun ran')
        localStorage.setItem('isLoggedIn', true)
    }

    getToken = () => {
        console.log('ran getter')
        let token = localStorage.getItem('isLoggedIn')
        let parsedToken = JSON.parse(token)
        console.log(parsedToken)
        // this.setState({userToken: parsedToken})
    }

    handleUserLogout = () => {
        console.log('logut')
        localStorage.removeItem('isLoggedIn')
    }

    render(){
        return(
            <AuthContext.Provider
                value={{
                    ...this.state,
                    handleAuthLogin : this.handleAuthLogin,
                    getToken: this.getToken,
                    handleUserLogout: this.handleUserLogout
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthProvider;

export const withAuth = C => props => (
    <AuthContext.Consumer>
        { value => <C {...props} {...value} /> }
    </AuthContext.Consumer>
)