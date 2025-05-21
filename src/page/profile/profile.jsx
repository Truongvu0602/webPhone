import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile } from "../../redux/proflie/profileThunk";
import Menu from "../../components/menu/menu";
import "./profile.css";

const Profile = () => {
  const dispatch = useDispatch();

  const profileData = useSelector((state) => state.profile.getProfileList);

  const [formData, setFormData] = useState({
    userName: "", // 🟢 dùng đúng key backend yêu cầu
    email: "",
  });

  useEffect(() => {
    if (profileData) {
      setFormData({
        userName: profileData.userName || "", // 🟢 sync đúng key
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

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateProfile(formData)) // 🟢 formData giờ có đúng `userName`
      .unwrap()
      .then(() => {
        alert("Cập nhật thông tin thành công!");
        dispatch(getProfile());
      })
      .catch((error) => {
        alert("Cập nhật thất bại: " + error);
      });
  };

  return (
    <div>
      <Menu />
      <div className="profile-container">
        <h2>Thông tin cá nhân</h2>
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="avatar-section">
            <img
              src="../../../public/img/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg"
              alt="ảnh"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <input type="file" accept="image/*" />
          </div>

          <label>Họ tên:</label>
          <input
            type="text"
            name="userName" // 🟢 key phải là "userName"
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
