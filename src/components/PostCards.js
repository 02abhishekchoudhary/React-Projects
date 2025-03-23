const PostCards = ({ postData }) => {
  const { id, body, title } = postData;
  return (
    <tr>
      <td>{id}</td>
      <td>{body}</td>
      <td>{title}</td>
    </tr>
  );
};

export default PostCards;
