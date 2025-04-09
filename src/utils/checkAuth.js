export const checkAuth = (navigate) => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Vui lòng đăng nhập trước khi thực hiện thao tác này.");
    navigate("/login");
    return false;
  }

  return true;
};
