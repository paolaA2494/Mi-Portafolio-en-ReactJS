import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout'
import Content from '../components/Content';
import Contact from '../components/Contact'
import Hero from '../components/Hero';

const App = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Layout>
            <Route exact path="/" component={Hero} />
               <Route path="/content" component={Content} />
               <Route path="/contact" component={Contact} />
            </Layout>
         </Switch>
      </BrowserRouter>

   )

}

export default App;