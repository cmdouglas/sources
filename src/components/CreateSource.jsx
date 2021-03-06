import React from 'react';
import DatePicker from 'react-datepicker';

export default class CreateSource extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            sourceDate: props.source.date
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(date) {
        this.setState({
            sourceDate: date
        });
    }

    render() {


        return <tr>
            <td className="index">
                {this.props.index + 1}.
            </td>
            <td className="input">
                <input
                    type="text"
                    name="publication_name"
                    defaultValue={this.props.source.publication_name}
                    onChange={this.props.updateSource}
                    placeholder="Publication"
                />
            </td>
            <td className="input">
                <input
                    type="text"
                    name="title"
                    defaultValue={this.props.source.title}
                    onChange={this.props.updateSource}
                    placeholder="Title"
                />
            </td>
            <td className="input">
                <DatePicker
                    name="date"
                    selected={this.state.sourceDate}
                    onChange={this.handleChange}
                    onBlur={this.props.updateDate}
                />
            </td>
            <td className="input">
                <input
                    type="text"
                    name="url"
                    defaultValue={this.props.source.url}
                    onChange={this.props.updateSource}
                    placeholder="http://www.example.com"
                />
            </td>
            <td className="actions">
                <button onClick={this.props.deleteSource}>Delete</button>
            </td>
        </tr>;
    }
}