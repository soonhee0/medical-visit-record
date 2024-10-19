import UserList from "./UserList";

const ParentComponent = (props: { users: { id: number; name: string }[] }) => {
  return (
    <div>
      {/* データをUserListコンポーネントに渡す */}
      <UserList users={props.users} />
    </div>
  );
};
export default ParentComponent;
