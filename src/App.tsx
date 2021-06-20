import React from 'react'; // , { useEffect }
import { BrowserRouter as Redirect, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CatalogPage from './components/CatalogPage';
import HomePage from './components/HomePage';


const App = () => { // props:Props
  // const { history } = props

  return (
    <Layout>
        <Switch>
            {/* {session && genRestWoLayoutRoutes(routerList.withOutLayout, readAccess)}
            {session && <RestLayoutRoutes
            readAccess={readAccess}
            layoutRoutes={routerList.withLayout}
            />}
            <Route component={NotFound} /> */}


            <Route path="/catalog" component={CatalogPage} />
            {/* <Route exact path="/" component={CatalogPage}/> */}
            <Route exact path="/" component={HomePage}/>


            {/* <Redirect from='' to='/'/> */}
        </Switch>
    </Layout>
  );
};
export default App;

// const mapStateToProps = (store:rootState) => {
//   const { session } = store.loginReducer;
//   return {
//     session,
//   };
// };

// export default connect(mapStateToProps)(App);
