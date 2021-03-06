import { Switch, Route } from "react-router-dom";
import MemberList from "./MemberList";
import MemberDetail from "./MemberDetail";

function Member({ match }) {
  // console.log(match);
  return (
    <section style={{ margin: "0 90px" }}>
      <Switch>
        <Route exact path={match.path} component={MemberList}></Route>
        <Route path={`${match.path}/:id`} component={MemberDetail}></Route>
      </Switch>
    </section>
  );
}

export default Member;
