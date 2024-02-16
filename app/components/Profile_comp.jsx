// components/Profile.js
import Image from 'next/image';

const Profile = () => {
  // Replace these dummy data with actual user data fetched from your database
  const userData = {
    username: 'JohnDoe',
    phoneNumber: '123-456-7890',
    interests: ['Football', 'Basketball'],
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-white rounded shadow-lg">
      <div className="flex justify-center mb-6">
        {/* Replace the src with the URL of the actual profile picture */}
        <Image
          src="/path/to/profile-pic.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <div className="text-center">
        {/* Replace these dummy data with actual user data */}
        <h2 className="text-2xl font-bold">{userData.username}</h2>
        <p className="text-gray-600">{userData.phoneNumber}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Interests</h3>
        <ul className="flex flex-wrap gap-2">
          {userData.interests.map((interest, index) => (
            <li
              key={index}
              className="bg-gray-200 px-2 py-1 rounded text-sm text-gray-700"
            >
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
