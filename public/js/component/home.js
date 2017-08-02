import React, {Component} from "react";

class Home extends Component{
    

    componentWillMount(){
        this.props.getAllUser();
    }


    render(){
        return <div>
            <div className="header">
                <h1>用户信息管理</h1>
            </div>
        </div>
    }
}

export default Home;