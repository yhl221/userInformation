import React, {Component} from "react";

class Modify extends Component{

    componentWillMount(){
        console.log("ID++",this.props.location);
    }

    render(){
        return <div>
            <div className="header">
                <h1>修改用户信息</h1>
            </div>
            <div>
                <div>
                    <input type="text" className="inputStyle" placeholder="用户名" id="userName"/>
                </div>
                <div>
                    <input type="text" className="inputStyle" placeholder="姓名" id="name"/>
                </div>
                <div>
                    <input type="text" className="inputStyle" placeholder="年龄" id="age"/>
                </div>
                <div>
                    <input type="text" className="inputStyle" placeholder="性别" id="sex"/>
                </div>
                <div>
                    <input type="text" className="inputStyle" placeholder="移动电话" id="phone"/>
                </div>
                <div>
                    <input type="text" className="inputStyle" placeholder="电子邮件" id="email"/>
                </div>
                <div>
                    <input type="text" className="inputStyle" placeholder="备注" id="mark"/>
                </div>
                <dib>
                    <button className="btn btn-info btnStyle">提交信息</button>
                </dib>
            </div>
        </div>
    }
}

export default Modify;