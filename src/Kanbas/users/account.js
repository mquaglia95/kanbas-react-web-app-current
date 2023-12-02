import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const findUserById = async (id) => {
      const user = await client.findUserById(id);
      setAccount(user);
    };  
    const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/kanbas/signin");
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
    fetchAccount();
    }
  }, []);
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div className="wd-account-form-layout">
          <p>Username:</p>
          <input className="form-control" value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          <p>First Name:</p>
          <input className="form-control" value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          <p>Last Name:</p>
          <input className="form-control" value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          <p>Date of Birth:</p>
          <input className="form-control" value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/>
          <p>E-mail:</p>
          <input className="form-control" value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          <p>Role:</p>
          <select className="form-control" onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button type="button" className="btn btn-success w-100" onClick={save}>
            Save
          </button>
          <button type="button" className="btn btn-danger w-100" onClick={signout}>
            Signout
          </button>
          <Link to="/kanbas/admin/users" className="btn btn-warning w-100">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;