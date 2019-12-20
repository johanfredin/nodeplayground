import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Members extends Component {
    state = { members: [] }

    // Runs automatically when the component is mounted
    componentDidMount() {
        fetch('/api/members/')
            .then(res => res.json())
            .then(members => this.setState({ members }))
    }

    render() {
        return (
            <div>
                <h2>Members</h2>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.members.map(member =>
                            <tr key={member._id}>
                                <td>{member.name}</td>
                                <td>{member.email}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Members;
