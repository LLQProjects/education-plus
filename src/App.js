/**
 * @description 路由根组件
 * @author LLQ
 * 
 */

import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import React from 'react'; //Suspense
import Layout from './view/layout/index'
import Order from './view/order'
import Shopping from './view/shopping'
import Login from './view/user/login'
import Campus from './view/system/campus'
// const NotFound = React.lazy(() => import('./view/error/404'));
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login}></Route>
                <Route path="/campus" component={Campus}></Route>
                <Layout>
                    <Route path="/shopping" component={Shopping}></Route>
                    <Route path="/order" component={Order}></Route>
                </Layout>
                <Route path="*">
                    {/* <NotFound></NotFound> */}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
