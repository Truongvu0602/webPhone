import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "../../redux/proflie/profileThunk";
import Menu from "../../components/menu/menu";
import "./profile.css";

const Profile = () => {
  const dispatch = useDispatch();

  const profileData = useSelector((state) => state.profile.getProfileList);

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
  });

  const [avatarFile, setAvatarFile] = useState(null); // ảnh đại diện

  useEffect(() => {
    if (profileData) {
      setFormData({
        userName: profileData.userName || "",
        email: profileData.email || "",
      });
    }
  }, [profileData]);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatarFile(file); // lưu ảnh vào state
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("userName", formData.userName);
    data.append("email", formData.email);
    if (avatarFile) {
      data.append("image", avatarFile); // tên này phải trùng với key backend nhận
    }

    dispatch(updateProfile(data))
      .unwrap()
      .then(() => {
        alert("Cập nhật thông tin thành công!");
        dispatch(getProfile());
      })
      .catch((error) => {
        alert("Cập nhật thất bại: " + error);
      });
  };

  // Tạo URL ảnh avatar hoặc dùng ảnh mặc định
  const avatarUrl = profileData?.avatar
    ? `http://localhost:3000/uploads/${profileData.avatar}`
    : "../../../public/img/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg";

  return (
    <div>
      <Menu />
      <div className="profile-container">
        <h2>Thông tin cá nhân</h2>
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="avatar-section">
            <img
              src={avatarUrl}
              alt="ảnh đại diện"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>

          <label>Họ tên:</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <button type="submit">Cập nhật</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
