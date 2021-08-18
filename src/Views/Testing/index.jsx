import React, { Component } from 'react';
import { connect} from 'react-redux'
import QuestionType1 from '../QuestionType1/index'
import QuestionType2 from '../QuestionType2/index'
class index extends Component {
    render() {
        const {questionType} = this.props.item
        return (
            <div>
                 <div>
                    {questionType === 1 ? 
                        <QuestionType1 item = {this.props.item} /> :
                        <QuestionType2 item = {this.props.item}  />
                }
                 </div>
                 
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        questionList: state.ListQuestion.listquestion
    }
}
export default connect(mapStateToProps)(index);