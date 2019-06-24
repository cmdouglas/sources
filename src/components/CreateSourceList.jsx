import React from 'react';
import CreateSource from './CreateSource';

export default class CreateSourceList extends React.Component
{
    render()
    {
        return <table>
            <thead>
            <tr>
                <th> </th>
                <th>
                    Publication
                </th>
                <th>
                    Title
                </th>
                <th>
                    Date
                </th>
                <th>
                    URL
                </th>
                <th>

                </th>
            </tr>
            </thead>
            <tbody>
            {this.props.sources.map((source, index) =>
                <CreateSource
                    source={source}
                    key={index}
                    index={index}
                    updateSource={(event) => this.props.updateSource(index, event.target.name, event.target.value)}
                    updateDate={(event) => this.props.updateDate(index, new Date(event.target.value))}
                    deleteSource={(event => this.props.deleteSource(index))}
                />
            )}
            <tr>
                <td> </td>
                <td><button onClick={this.props.createSource}>Add a source</button></td>
                <td colSpan="3"> </td>
            </tr>
            </tbody>
        </table>
    }
}