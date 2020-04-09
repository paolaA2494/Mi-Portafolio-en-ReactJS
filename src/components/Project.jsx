import React, { Component } from 'react';



class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div className="mt-5 text-center">
                {this.props.data.map((item, index) => {
                   return(

                    <div className="container marketing">
                    <hr className="featurette-divider mt-5 mb-5" />
                    <div key={`${index.id}`} className="row featurette">
                        <div className="col-md-7">
                        <img className="img-project mx-auto" width="300" height="200" src={item.image} alt="image"></img> 
                        </div>
                        <div className="col-md-5">
                             <h4 className="featurette-heading mt-3 text-info">{item.name}</h4>
                            <p className="lead">{item.description}</p>
                            <a href={item.ref}target="_blank"><button class="main__btn btn-primary">Ver Proyecto</button></a>
                           
                        </div>
                    </div>
                </div>



                   )

                })}
                
            </div>
        )
    }
}

export default Project;