import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Community from './components/Community/Community';
import Join from './components/Join/Join';
import Lecture from './components/Lecture/Lecture';
import Main from './components/Main/Main';
import Auth from '../../hoc/auth';

const ContentsRouter = () => {
    return(
        <Switch>
            <Route exact path="/"><Main/></Route>
            <Route exact path="/lecture"><Lecture/></Route>
            <Route exact path="/join"><Join/></Route>
            <Route exact path="/community"><Community/></Route>
        </Switch>
    )
}

export default ContentsRouter;