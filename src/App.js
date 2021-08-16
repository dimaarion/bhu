import React, { useEffect, useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom'
import ArticlesAll from './pages/ArticlesAll';
import Pages from './pages/Pages';





function App() {


  return (
    <div className="container-fluid">
      <Pages />
      <Switch>
        <Route path="/">
          <ArticlesAll />
        </Route>
      </Switch>
    </div>

  );
}



export default App;
