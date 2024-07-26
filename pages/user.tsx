import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { User } from '../types';

const UserInfoPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    photoConsent: false,
    roleHistory: new Map<string, number>(),
    speechHistory: [],
  });
  const [passwordData, setPasswordData] = useState({
    oldPassword: '',
    newPassword: '',
  });
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/user');
        if (response.status === 401) {
          router.push('/signin');
        } else if (response.ok) {
          const userData: User = await response.json();
          setUser(userData);
          setFormData({
            name: userData.name,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            photoConsent: userData.photoConsent,
            roleHistory: userData.roleHistory,
            speechHistory: userData.speechHistory,
          });
        } else {
          throw new Error('Unexpected response status: ' + response.status);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setError(error.message); // Or a more user-friendly error message
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/updateUser', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      const updatedUser: User = await response.json();
      setUser(updatedUser);
      setIsEditing(false);
      alert('User information updated successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
      setError(error.message); // Or a more user-friendly error message
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/changePassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(passwordData),
      });

      if (!response.ok) {
        throw new Error('Failed to change password');
      }

      alert('Password changed successfully!');
      setIsChangingPassword(false);
    } catch (error) {
      console.error('Error changing password:', error);
      setError(error.message); // Or a more user-friendly error message
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch('/api/deleteUser', {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete account');
      }

      alert('Account deleted successfully!');
      router.push('/signin');
    } catch (error) {
      console.error('Error deleting account:', error);
      setError(error.message); // Or a more user-friendly error message
    }
  };

  return (
    <div>
      <h1>User Info</h1>
      {isLoading ? (
        <p>Loading user data...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : isEditing ? (
        <form onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Photo Consent:
            <input
              type="checkbox"
              name="photoConsent"
              checked={formData.photoConsent}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : isChangingPassword ? (
        <form onSubmit={handlePasswordSubmit}>
          <label>
            Old Password:
            <input
              type="password"
              name="oldPassword"
              value={passwordData.oldPassword}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <label>
            New Password:
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <button type="submit">Change Password</button>
          <button type="button" onClick={() => setIsChangingPassword(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
          <p><strong>Photo Consent:</strong> {user.photoConsent ? 'Yes' : 'No'}</p>
          {user.meetingHistory && typeof user.meetingHistory === 'object' && (
            <pre>{JSON.stringify(user.meetingHistory, null, 2)}</pre>
          )}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => setIsChangingPassword(true)}>Change Password</button>
          <button onClick={handleDeleteAccount}>Delete Account</button>
        </>
      )}
    </div>
  );
};

export default UserInfoPage;
