import React, { Component } from 'react';
import {Typography} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

class index extends Component {
    render() {
        return (
            <div>
            <Typography variant="h2">Điểm của bạn: {this.props.mark}</Typography>
            <Typography > {this.props.mark >= 4 ? <Typography variant="h2" >Chúc mừng "NHÉ"!</Typography>:<Typography variant="h4">Ròi xong rớt luôn Link học lại nè <NavLink to="/">Hoclai.com</NavLink></Typography>}</Typography> 
            </div>
        );
    }
}
const mapStateToProp = (state) => {
    return {
    mark: state.Answers.mark
    }
}
export default connect(mapStateToProp, null)(index);