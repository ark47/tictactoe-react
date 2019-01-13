import React, {Component} from 'react';

class Square extends Component {

    render() {

        let squareClass = 'square empty';
        if (this.props.value === 'X') {
            squareClass = 'square x';
        } else if (this.props.value === 'O') {
            squareClass = 'square o';
        }

        return (
            <button className={squareClass} onClick={this.props.onClick} >
                {this.props.value}
            </button>
        );
    }

}

export default Square;