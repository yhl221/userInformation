import React, {Component} from "react";
import {browserHistory} from 'react-router';

class Modify extends Component {

    componentDidMount() {
        var information = this.props.oneUser;
        document.getElementById("userName").value = information.user_name;
        document.getElementById("name").value = information.name;
        document.getElementById("age").value = information.age;
        document.getElementById("sex").value = information.sex;
        document.getElementById("phone").value = information.phone;
        document.getElementById("email").value = information.email;
        document.getElementById("mark").value = information.mark;
    }


    submitModify() {
        let data = {};
        data.user_name = document.getElementById("userName").value;
        data.name = document.getElementById("name").value;
        data.age = document.getElementById("age").value;
        data.sex = document.getElementById("sex").value;
        data.phone = document.getElementById("phone").value;
        data.email = document.getElementById("email").value;
        data.mark = document.getElementById("mark").value;
        data.user_id = this.props.oneUser.user_id;
        this.props.onModify(data);
        browserHistory.push('/');
    }

    render() {

        return <div>
            <div className="header">
                <h1>修改用户信息</h1>
            </div>
            <div>
                <div>
                    <input type="text" className="addInputStyle" id="userName"/>
                </div>
                <div>
                    <input type="text" className="addInputStyle" id="name"/>
                </div>
                <div>
                    <input type="text" className="addInputStyle" id="age"/>
                </div>
                <div>
                    <input type="text" className="addInputStyle" id="sex"/>
                </div>
                <div>
                    <input type="text" className="addInputStyle" id="phone"/>
                </div>
                <div>
                    <input type="text" className="addInputStyle" id="email"/>
                </div>
                <div>
                    <input type="text" className="addInputStyle" id="mark"/>
                </div>
                <dib>
                    <button className="btn btn-info btnStyle" onClick={this.submitModify.bind(this)}>提交信息</button>
                </dib>
            </div>
        </div>
    }
}

export default Modify;