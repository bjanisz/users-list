import "./App.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import { UserDataRow } from "./components/UserDataRow";
import { EditUserDataRow } from "./components/EditUserDataRow";
import { SearchInput } from "./components/SearchInput";

import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import {CreateNewUserForm} from "./components/CreateNewUserForm";
import { getSortedUsers } from "./utils/sort";
import {filterUserBySearchInputValue} from "./utils/filter";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    company: {
      name: ""
    },
  });
  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    company: {
      name: ""
    },
  });
  const [editUserId, setEditUserId] = useState(null);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [sort, setSort] = useState({
    fieldName: '', sortBy: '',
  })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAddNewUserSubmit = (event) => {
    event.preventDefault();

    setUsers((prevState) => [...prevState, { id: nanoid(), ...newUser }]);

    setNewUser({
      name: "",
      username: "",
      email: "",
      company: {
        name: ""
      },
    })
  };

  const handleEditUserSubmit = (event) => {
    event.preventDefault();

    const editedUser = {
      id: editFormData.id,
      name: editFormData.name,
      username: editFormData.username,
      email: editFormData.email,
      company: {
        name: editFormData.company.name
      },
    }

    const newUsers = [...users];
    const index = users.findIndex((user)=> user.id === editUserId);

    newUsers[index] = editedUser;
    setUsers(newUsers);
    setEditUserId(null);

  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    if (fieldName === 'company') {
  
      newFormData[fieldName].name = fieldValue;
    } else {
      newFormData[fieldName] = fieldValue;
    }
    
    setEditFormData(newFormData);
  }

  const handleEditClick = (event, user) => {
    event.preventDefault();
    setEditUserId(user.id)
    
    const formValues = {
      name: user.name,
      username: user.username,
      email: user.email,
      company: {
        name: user.company.name
      },
    }

    setEditFormData(formValues)
  }

  const handleDeleteClick = (userId) => {
    const newUsers = [...users];

    const index = users.findIndex((user) => user.id === userId)

    newUsers.splice(index, 1);

    setUsers(newUsers)
  }

  const handleSetSort = (fieldName) => {
    setSort({fieldName, sortBy: sort.sortBy === 'ASC' ? 'DESC' : 'ASC'})
  }

  return (
    <div className="App">
      <div className="table-header">
        <h1> Users list </h1>
        <SearchInput onChange={setSearchInputValue} />
      </div>
      <div className="table-container">
        {error && <p>{error}</p>}
        {users.length > 0 && !loading ? (
                <form onSubmit={handleEditUserSubmit}>
                  <table>
                    <thead>
                    <tr>
                      <th>
                        <button className="sort-button" onClick={() => handleSetSort('name')}>
                          Name {sort.fieldName === 'name' && (sort.sortBy === 'ASC' || sort.sortBy === '') ? <AiOutlineArrowUp /> : <AiOutlineArrowDown/> }
                        </button>
                      </th>
                      <th><button className="sort-button" onClick={() => handleSetSort('username')}>
                        Username {sort.fieldName === 'username' && (sort.sortBy === 'ASC' || sort.sortBy === '') ? <AiOutlineArrowUp /> : <AiOutlineArrowDown/> }
                      </button></th>
                      <th><button className="sort-button" onClick={() => handleSetSort('email')}>
                        Email {sort.fieldName === 'email' && (sort.sortBy === 'ASC' || sort.sortBy === '') ? <AiOutlineArrowUp /> : <AiOutlineArrowDown/> }
                      </button></th>
                      <th>
                        <button className="sort-button" onClick={() => handleSetSort('companyName')}>
                          Company name {sort.fieldName === 'companyName' && (sort.sortBy === 'ASC' || sort.sortBy === '') ? <AiOutlineArrowUp /> : <AiOutlineArrowDown/> }
                        </button>
                      </th>
                      <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {getSortedUsers(users, sort).filter(user => filterUserBySearchInputValue(user, searchInputValue)).map((user) =>
                      <>
                        { editUserId === user.id
                            ? <EditUserDataRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={() => setEditUserId(null)} />
                            : <UserDataRow user={user} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                        }
                      </>
                    )}
                    </tbody>
                  </table>
                </form>
        ) : <div id="no-data"> No data </div>
        }
      </div>
      <CreateNewUserForm onSubmit={handleAddNewUserSubmit} newUser={newUser} setNewUser={setNewUser} />
      
    </div>
  );
}

export default App;
