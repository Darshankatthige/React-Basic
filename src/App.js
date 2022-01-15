import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {UserProfile} from '../src/components/UserProfile'
import { Assignment03 } from '../src/components/Assignment/Assignment-03'
import {StringOperation} from '../src/components/Assignment/StringOperation'


function App() {
  return (
    <div className="app">
       {/* <UserProfile /> */}
       <div className="row p-4 ">
         <div className="col-md-6 border "> <Assignment03 /></div>
         <div className="col-md-6 border">  <StringOperation /></div>
       </div>
       <div>
       </div>  
    </div>
  );
}

export default App;
