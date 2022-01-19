
import NavBar from '../../shared/nav-bar/NavBar';
import './Login.css';

// Component must return one parent.

function Login() {
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="row">
                    <div className="col-md-9"></div>
                    <div className="col-md-3">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary float-end">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;