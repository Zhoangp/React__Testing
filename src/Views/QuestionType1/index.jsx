import React, { Component } from "react";
import {
    FormControl,
    RadioGroup,
    Radio,
    FormControlLabel,
    FormLabel,
} from "@material-ui/core";
import {getAnswers} from '../../Store/action/question'
import {connect} from 'react-redux'
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: {
                exact: '',
                id: ''
            }
           
        }
    }
    getAnswer = (item, id) => {
        const {exact} = item
        this.setState({
            a: {
                exact: exact,
                id: id
            }
           
        }, () => {
        this.props.dispatch(getAnswers(this.state.a))
        })
    }
/* 
    handleAnswer = () => {
        this.props.dispatch("GET_ANSWERS", this.state.exact)
    } */
    render() {
        const { content, id, answers } = this.props.item;
        return (
            <div>
                <FormControl component="fieldset">
                    <FormLabel style={{ margin: 10 }} component="legend">
                        Câu {id}: {content}
                    </FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        name="gender1"
                    /*  value={value}
                    onChange={handleChange} */
                    >
                        {answers.map((item, index) => {
                            return (
                                <FormControlLabel
                                    key={index}
                                    onClick={() => this.getAnswer(item, id)}
                                    style={{ margin: 10 }}
                                    value={item.id}
                                    control={<Radio color="primary" />}
                                    label={item.content}
                                />
                            );
                        })}
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

export default connect()(index);
