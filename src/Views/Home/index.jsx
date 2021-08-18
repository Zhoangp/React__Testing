import React, { Component } from 'react';
import { fetchQuestion } from '../../Store/action/question';
import Testing from '../Testing/index'
import { connect } from 'react-redux'
import {Button, Typography, withStyles} from '@material-ui/core'
import style from '../../Style/Style'
import { getResult } from '../../Store/action/question';
import {NavLink} from 'react-router-dom'
class Home extends Component {
    getResult = () => {
        this.props.dispatch(getResult)
    }
    render() {
     
        const {classes} = this.props
        return (
            <div>
                 <Typography className={classes.mg} align="center" variant="h1">Testing Online</Typography>
                 <div>
                {this.props.questionList.map((item, index) => {
                    return (
                        <Testing key={index} item={item} />
                    )
                })}
                </div>
    <Button onClick={this.getResult} color="primary" className={classes.btnStyle} variant="contained"> 
    <NavLink className={classes.coulor} to="/result"> 
    Complete
    </NavLink> 
     </Button>

            </div>
        );
    } 
    componentDidMount() {
        this.props.dispatch(fetchQuestion)
    }
}

const mapStateToProps = (state) => ({
    questionList: state.ListQuestion.listQuestion,
})
export default connect(mapStateToProps)(withStyles(style)(Home));