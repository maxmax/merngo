import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import classNames from 'classnames/bind';
//import TopicTextInput from '../components/TopicTextInput';
import styles from '../css/components/entrybox';

const cx = classNames.bind(styles);

// Takes callback functions from props and passes it down to TopicTextInput
// Essentially this is passing the callback function two levels down from parent
// to grandchild. To make it cleaner, you could consider:
// 1. moving `connect` down to this component so you could mapStateToProps and dispatch
// 2. Move TopicTextInput up to EntryBox so it's less confusing
//const EntryBox = ({onEntryChange, onEntrySave, topic}) => {
export default class EntryBox extends Component {
  //console.log("this:", topic);
  //console.log("this2:", EntryBox.propTypes);
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSave() {
    const { onEntrySave, topic } = this.props;
    onEntrySave(topic);
  }

  /*
   * Invokes the callback passed in as onSave, allowing this component to be
   * used in different ways. I personally think this makes it more reusable.
   */
  onChange(event) {
    const { onEntryChange } = this.props;
    onEntryChange(event.target.value);
  }

  handleSubmit(event) {
    this.onSave();
    event.preventDefault();
    console.log("handleSubmit");
  }

  render() {
    const { topic } = this.props;
    console.log("this.props:", this.props);
    console.log("this.props.topic:", topic);

    return (
      <div className={cx('entrybox')}>
        <h1 className={cx('header')}>Vote for your top hack idea</h1>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>Idea</ControlLabel>
            <FormControl
              type="text"
              value={topic}
              className={cx('input')}
              placeholder="😎 Suggest a hackday idea . . ."
              onChange={this.onChange}
              autoFocus
            />
          </FormGroup>
          <Button type="submit" value="Submit" bsStyle="primary">Submit</Button>
        </form>
      </div>
    );
  }
}


EntryBox.propTypes = {
  topic: PropTypes.string,
  onEntryChange: PropTypes.func.isRequired,
  onEntrySave: PropTypes.func.isRequired
};

//export default EntryBox;
