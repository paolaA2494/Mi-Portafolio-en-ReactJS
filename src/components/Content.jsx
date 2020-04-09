import React, { Component } from 'react';
import Projects from './Projects';
import Project from './Project';
import { data } from '../utils/mocks/data';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="mt-5 text-center">
                <Projects />
                <Project data = {data.projects}
                />
            </div>
        );
    }
}

export default Content;