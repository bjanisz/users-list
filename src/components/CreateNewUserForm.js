export const CreateNewUserForm = ({ onSubmit, newUser, setNewUser }) => {

    return (
        <div className="table-form">
        <h2>New user</h2>
        <div id="new-user-form">
        <form onSubmit={onSubmit}>
            <div> 
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Enter a name"
                    value={newUser.name}
                    onChange={(event) =>
                        setNewUser((prevState) => ({
                            ...prevState,
                            name: event.target.value,
                        }))
                    }
                />
            </div>

            <div>
                <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    placeholder="Enter a username"
                    value={newUser.username}
                    onChange={(event) =>
                        setNewUser((prevState) => ({
                            ...prevState,
                            username: event.target.value,
                        }))
                    }
                />
            </div>

            <div>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter an email"
                    value={newUser.email}
                    onChange={(event) =>
                        setNewUser((prevState) => ({
                            ...prevState,
                            email: event.target.value,
                        }))
                    }
                />
            </div>

            <div>
                <input
                    type="text"
                    name="companyname"
                    id="companyname"
                    required
                    placeholder="Enter a company name"
                    value={newUser.company.name}
                    onChange={(event) =>
                        setNewUser((prevState) => ({
                            ...prevState,
                            company: {
                                ...prevState.company,
                                name: event.target.value,
                            },
                        }))
                    }
                />
            </div>

            <button type="submit">
                Add new user
            </button>
        </form>
        </div>
        </div>
    )
}