import React, {Component} from "react";
import {browserHistory} from 'react-router';


class AddUser extends Component {

    componentDidUpdate() {
        var isSaved = this.props.isSaved;
        if (isSaved) {
            alert("添加成功");
            browserHistory.push('/');
            this.props.reset(false);
        } else {
            alert("添加失败");
        }
    }



    onSubmit() {
        var userName = document.getElementById("userName").value;
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var sex = document.getElementById("sex").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var mark = document.getElementById("mark").value;
        if (userName === "" || name === "" || age === "" || sex === "" || phone === "" || email === "" || mark === "") {
            alert("请补全信息");
        } else {
            this.props.onSubmit({userName, name, age, sex, phone, email, mark});
        }
    }



    render() {
        return <div>
            <div className="header">
                <h1>添加用户信息</h1>
            </div>
            <div>
                <div>
                    <input type="text" className="addInputStyle" placeholder="用户名" id="userName"/>
                </div>
                <div>
                    <input type="text" className="addInputStyle" placeholder="姓名" id="name"/>
                </div>
                <div>
                    <input type="text" className="addInputStyle" placeholder="年龄" id="age"/>
                </div>
                <div>
                    <input type="text" className="addInputStyle" placeholder="性别" id="sex"/>
                </div>
                <div>
                    <input type="text" className="addInputStyle" placeholder="移动电话" id="phone"/>
                </div>
                <div>
                    <input type="text" className="addInputStyle" placeholder="电子邮件" id="email"/>
                </div>
                <div>
                    <input type="text" className="addInputStyle" placeholder="备注" id="mark"/>
                </div>
                <dib>
                    <button className="btn btn-info btnStyle" onClick={this.onSubmit.bind(this)}>提交信息</button>
                </dib>
            </div>
        </div>
    }
}



export default AddUser;