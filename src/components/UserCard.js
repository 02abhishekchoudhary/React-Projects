const UserCard = (props) => {
  console.log(props);
  const { userData } = props;
  const { id, name, username, email, address, phone, website, company } =
    userData;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        {address?.street}
        {address?.suite} {address?.city}
      </td>
      <td>{phone}</td>
      <td>{website}</td>
      <td>{company?.name}</td>
    </tr>
  );
};

export default UserCard;
