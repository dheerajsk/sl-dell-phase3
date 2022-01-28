
import NavBar from '../../shared/nav-bar/NavBar';
import './Login.css';

// Component must return one parent.

function Login() {

    function submitLoginData(event)
    {
        event.preventDefault();
      //const ele = event.target.elements;
      //console.log(ele);
      const email  = event.target.elements[0];
      const password  = event.target.elements[1];
      fetch("http://localhost:56622/api/User/login",{ method: 'POST', body: JSON.stringify({
        email: email.value,
        password: password.value,
    }) }).then(res => res.json()).then(res => {
            sessionStorage.setItem('user', JSON.stringify(res));
            // history.replace('/home');
        });
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="row">
                    <div className="col-md-9"></div>
                    <div className="col-md-3">
                        <form onSubmit={submitLoginData}>
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