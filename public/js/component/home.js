import React, {Component} from "react";
import {browserHistory} from 'react-router';

class Home extends Component{


    componentWillMount(){
        this.props.getAllUser();
    }

    onModify(data){
        this.props.onModify(data);
        browserHistory.push('/modify');
    }

    onRemove(userID){
        this.props.onRemove(userID);
    }

    render(){
        return <div>
            <div className="header">
                <h1 className="theme">用户信息管理</h1>
            </div>
            <div classID="display" className="tablePosition">
                <table className="table table-bordered textStyle">
                    <tbody className="tableStyle">
                    <tr className="active">
                        <th className="textStyle">ID</th>
                        <th className="textStyle">用户名</th>
                        <th className="textStyle">姓名</th>
                        <th className="textStyle">年龄</th>
                        <th className="textStyle">性别</th>
                        <th className="textStyle">移动电话</th>
                        <th className="textStyle">电子邮件</th>
                        <th className="textStyle">备注</th>
                        <th className="textStyle" colSpan="2">操作</th>
                    </tr>
                    {
                        this.props.user.map((element)=>{
                            return <tr>
                                <td className="textStyle">{element.user_id}</td>
                                <td className="textStyle">{element.user_name}</td>
                                <td className="textStyle">{element.name}</td>
                                <td className="textStyle">{element.age}</td>
                                <td className="textStyle">{element.sex}</td>
                                <td className="textStyle">{element.phone}</td>
                                <td className="textStyle">{element.email}</td>
                                <td className="textStyle">{element.mark}</td>
                                <td><input type="button" value="修改"
                                           className="infoButton  btn btn-default" onClick={this.onModify.bind(this,element)}/></td>
                                <td><button type="button" className="dangerButton  btn btn-default" onClick={this.onRemove.bind(this,element)}>
                                    删除</button>
                                </td>
                            </tr>
                        })
                    }
                    </tbody>

                </table>
            </div>
        </div>
    }
}

export default Home;