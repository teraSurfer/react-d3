import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSearch(e) {
        e.preventDefault();
        this.setState({
            search: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        window.location.hash = `#${this.state.search}`;
    }


    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="field">
                    <div className="control">
                        <input className="input" list="charts" onChange={this.handleSearch} placeholder="Search Charts" type="text"></input>
                        <datalist id="charts">
                            <option value="PieChart"></option>
                            <option value="BarChart"></option>
                        </datalist>
                    </div>
                </div>
                <div className="buttons">
                  <button className="button is-primary" type="submit">Find Chart?</button>
                  <a href="https://github.com/teraSurfer/react-d3/blob/master/README.md" className="button is-link">Read Me</a>
                </div>
            </form>
        );
    }
}

export default Search;
