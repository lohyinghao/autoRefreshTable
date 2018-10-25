import React, { Component } from 'react';
import TableItem from './TableItem';

class Table extends Component {
    render() {
        let tableItems;
        if(this.props.someRandomArr){
            tableItems = this.props.someRandomArr.map(data => {
                return (
                    <TableItem data={data} />
                );
            });
        }

        return (
            <div>
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Value</th>
                            <th scope="col">x2</th>
                            <th scope="col">x3</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;