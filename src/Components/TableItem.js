import React, { Component } from 'react';

class TableItem extends Component {

    calculate() {
        this.timesTwo = this.props.data.value * 2;
        this.timesThree = this.props.data.value * 3;
    }

    render() {
        this.calculate();
        return (
            <tr>
                <th>{this.props.data.name}</th>
                <td>{this.props.data.value}</td>
                <td>{this.timesTwo}</td>
                <td>{this.timesThree}</td>
            </tr>
        )
    }
}

export default TableItem;