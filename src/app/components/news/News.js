import React, {Component} from 'react';
import { connect } from 'react-redux';
import {booksAdd} from "../../redux/actions";
import style from './style.css';

class News extends Component {

    render() {
        return (
            <div className={style.news}>
                Title for news component

                <div className="store">
                    <div className="store__title">
                        {this.props.books}
                    </div>
                    <div className="store__flex">
                        <button onClick={ () => this.props.booksAdd() }>
                            + 1
                        </button>
                    </div>
                </div>


            </div>
        );
    }
}

export default connect(
    state => ({
        books: state.book.books
    }),
    {booksAdd}
)(News);

