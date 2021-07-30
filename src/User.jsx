import { withRouter } from "react-router-dom";
const User = (props) => {
  console.log(props);
  return (
    <>
      <h1>User no {props.match.params.id}</h1>
      <h3>{props.match.params.name}</h3>
    </>
  );
};
export default withRouter(User);
