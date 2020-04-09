import React, { Component } from 'react'

class Contact extends Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return ( 
           

    <div className=" mt-4 pl-5 pr-5">
      <h3 className="mb-3 text-center text-primary">Si te interesa mi trabajo, ingresa los siguientes datos y pronto me comunicaré contigo</h3>
      <h5 className="mb-3 text-center">Los campos maracados con <span class="obligate text-primary">*</span> son obligatorios</h5>
      <form className="needs-validation mt-4" novalidate="">
          <div className="mx-auto col-6">
            <label for="firstName">Nombre completo: <span class="obligate text-primary">*</span></label>
            <input type="text" className="form-control" id="firstName"placeholder="Ingrese su nombre completo" value="" required=""/>
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

        <div className="mx-auto col-6 mt-4">
          <label for="email">Email: <span class="obligate text-primary">*</span></label>
          <input type="tel" className="form-control" id="email" placeholder="you@example.com"/>
          <div className="invalid-feedback">
              Valid first name is required.
          </div>
        </div>
        
        <div className="mx-auto col-6 mt-4">
          <label for="cellphone">Teléfono de Contacto: <span class="obligate text-primary">*</span></label>
          <input type="cellphone" className="form-control" id="cellphone" pattern="[0-12]{12}" placeholder="Ingrese su número de contacto"/>
          <div className="invalid-feedback">
              Valid first name is required.
          </div>
        </div>

    
          <div className="mx-auto col-6 mt-4">
            <label for="country">País: <span class="obligate text-primary">*</span></label>
            <select className="custom-select d-block w-100" id="country" required="">
              <option value="">Seleccione...</option>
              <option>United States</option>
              <option>Colombia</option>
              <option>España</option>
              <option>Francia</option>
              <option>Brasil</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
          <div className="mx-auto col-6 mt-4">
            <label for="state">Ciudad: <span class="obligate text-primary">*</span></label>
            <select className="custom-select d-block w-100" id="state" required="">
              <option value="">Seleccione...</option>
              <option>Austin</option>
              <option>New York</option>
              <option>Medellín</option>
              <option>Bogotá</option>
              <option>Madrid</option>
              <option>Paris</option>
              <option>Sao Paulo</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div className="mx-auto col-6 mt-4">
            <label for="zip">Código Postal:</label>
            <input type="text" className="form-control" id="zip" placeholder="" required=""/>
            <div className="invalid-feedback">
              Zip code required.
            </div>
          </div>
        

        <div className="mx-auto col-6 mt-4">
          <label for="cellphone">Mensaje: <span class="obligate text-primary">*</span></label>
          <textarea id="comments" className="input-textarea col-12 d-block" name="comment" placeholder="Ingrese su mensaje aquí"></textarea>
          <div className="invalid-feedback">
              Valid first name is required.
          </div>
        </div>
        
        <button className="btn btn-primary btn-lg btn-block mx-auto col-4 mt-4" type="submit">Enviar</button>
      </form>
    </div>
        

         );
    }
}
 
export default Contact;