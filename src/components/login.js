import React from 'react';

class Login extends React.Component {
    render(){
        <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <input
                    name='username'
                    placeholder='username'
                    type='text'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                {type !== 'login' ? emailJSX : undefined}
                <input
                    name='password'
                    placeholder='password'
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button type='submit'>{type}</button>
            </form>
            <Link to='/signup'> Sign up to our application</Link>
        </div>;
    }
}