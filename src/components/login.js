import React from 'react';

class Login extends React.Component {
    render(){
        <div>
            <h1>Login</h1>
            <form onSubmit="{this.handleSubmit}">
                <p><input
                    name='username'
                    placeholder='username'
                    type='text'
                    value='{this.state.username}'
                    onChange='{this.handleChange}'
                /></p>
                <p><input
                    name='password'
                    placeholder='password'
                    type='password'
                    value='{this.state.password}'
                    onChange='{this.handleChange}'
                />
                </p>
                <p><button type='submit'>Login</button></p>
            </form>
        </div>
    }
}