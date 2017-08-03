import React, {Component} from "react";

class Modify extends Component{

    componentDidMount(){
            var information=this.props.oneUser;
            document.getElementById("userName").value=information.user_name;
            document.getElementById("name").value=information.name;
            document.getElementById("age").value=information.age;
            document.getElementById("sex").value=information.sex;
            document.getElementById("phone").value=information.phone;
            document.getElementById("email").value=information.email;
            document.getElementById("mark").value=information.mark;
        }

    render(){

        return <div>
            <div className="header">
                <h1>修改用户信息</h1>
            </div>
            <div>
                <div>
                    <input type="text" className="inputStyle" id="userName"placeholder="用户名"/>
                </div>
                <div>
                    <input type="text" className="inputStyle"  id="name"/>
                </div>
                <div>
                    <input type="text" className="inputStyle"  id="age"/>
                </div>
                <div>
                    <input type="text" className="inputStyle"  id="sex"/>
                </div>
                <div>
                    <input type="text" className="inputStyle"  id="phone"/>
                </div>
                <div>
                    <input type="text" className="inputStyle"  id="email"/>
                </div>
                <div>
                    <input type="text" className="inputStyle"  id="mark"/>
                </div>
                <dib>
                    <button className="btn btn-info btnStyle">提交信息</button>
                </dib>
            </div>
        </div>
    }
}

export default Modify;