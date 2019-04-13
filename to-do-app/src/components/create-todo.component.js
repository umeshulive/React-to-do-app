import React, { Component } from 'react';

class CreateTodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            description: '',
            status: false
        }

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit= this.onSubmit.bind(this);        
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted`);
        console.log(`Descripion: ${this.state.description}`);
        console.log(`Status: ${this.state.status}`);

        this.setState({
            description: '',
            status: false
        })
    }

    render() {
        return(
            <div style={{marginTop: 10}}>
                <h3>Create New To Do</h3>
                <form onSubmit= {this.onSubmit}>
                    <div className="form-group">
                    <label>To DO</label>
                    <input type="text"
                    className= "form-control"
                    value= {this.state.description}
                    onChange= {this.onChangeDescription}
                    />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                        className="btn btn-primary"
                        value= "Create To Do"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateTodoList;