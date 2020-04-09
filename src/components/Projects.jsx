import React, { Component } from 'react'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="mt-5 text-center">
                <h1 className="text-primary">Mis proyectos</h1>
                <h4 className="text-dark mt-5">Aquí encontraras los proyectos que he realizado y el avance que he tenido de los mismos, espero sean de tu gusto.😃 </h4>
            </div>
        );
    }
}

export default Projects;