export const UserDataRow = ({user, handleEditClick, handleDeleteClick }) => {
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.company.name}</td>
        <td>
          <button type="button" onClick={(event)=> handleEditClick(event, user)}> Edit </button>
          <button type="button" onClick={()=> handleDeleteClick(user.id)}> Delete </button>
        </td>
      </tr>
    );
  };
  