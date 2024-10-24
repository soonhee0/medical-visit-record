export const useUsers = () => {
  const fetchUsers = async () => {
    const response = await fetch("http://localhost:3000/api/users", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    console.log(data);
    return data.users;
  };
// fetchUsers をプロパティとして持つオブジェクトを返す　
  return { fetchUsers };
};
