import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { User } from '../types';

const UserInfoPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
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

  return (
    <div>
      <h1>User Info</h1>
      {isLoading ? (
        <p>Loading user data...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
          <p><strong>Photo Consent:</strong> {user.photoConsent ? 'Yes' : 'No'}</p>
          {user.meetingHistory && typeof user.meetingHistory === 'object' && (
            <pre>{JSON.stringify(user.meetingHistory, null, 2)}</pre>
          )}
        </>
      )}
    </div>
  );
};

export default UserInfoPage;