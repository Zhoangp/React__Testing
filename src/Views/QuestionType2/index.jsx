import React, { Component } from 'react';
import {TextField} from '@material-ui/core'
import {connect} from 'react-redux'
import { getAnswers } from '../../Store/action/question';
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            a: {
                exact: "",
                id: ""
            }
        }
    }
    handleChange = (event) => {
        const {answers} = this.props.item
        let exact = false
        answers.map((item) => {
            if(item.content === event.target.value) {
                exact = true
            }
        this.setState({
            a: {
                exact: exact,
                id: item.id,
            }
        },
        () => {
            this.props.dispatch(getAnswers(this.state.a))
            console.log(this.state.a.id)
            console.log(this.state.a.exact)
        })
        })
    }
    render() {
        const {content, id} = this.props.item
        return (
            <div style={{width: "50%"}}>
               <TextField 
          id="standard-full-width"
          onChange={this.handleChange}
          name={id}
          label={content}
          style={{ margin: 10 }}
          fullWidth
          margin="normal"
        />
            </div>
        );
    }
}

export default connect()(index);