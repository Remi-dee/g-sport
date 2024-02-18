// components/Profile.js
import Image from "next/image";
import Oval from "../../public/assests/avatars/Oval.png";
import Cover from "../../public/assests/images/backgrounds/ProfileCover.jpg";
import Settings from "./Settings_comp";
import { useStateContext } from "../lib/context/stateContext";
import { useEffect } from "react";
import { useInterestContext } from "../lib/context/interestContext";
import {
  UseUserSession,
  useUserSession,
} from "../lib/database/databaseService";
import { data } from "autoprefixer";
const Profile = () => {
  // Replace these dummy data with actual user data fetched from your database
  const { settings, setSettings } = useStateContext();
  const { userData, setUserData } = useStateContext();
  const { interest, setInterest } = useInterestContext();
  const { userDetails, getUserDetails } = UseUserSession();
  async function handleUserDetails() {
    return await getUserDetails();
  }
  useEffect(() => {
    getUserDetails();
  }, [userDetails]);

  return (
    <div>
      <div className="relative -z-10 h-36 bg-gradient-to-r  overflow-hidden">
        <Image
          src={Cover}
          alt="Profile Picture"
          layout="fill" // Use layout="fill" to make the image cover the entire container
          objectFit="cover" // Use objectFit="cover" to maintain aspect ratio and cover the container
        />
      </div>

      <div className="container mx-auto p-8 bg-white  rounded-md shadow-lg -mt-16">
        {!settings && (
          <>
            {" "}
            <div className="flex justify-center mb-6">
              {/* Replace the src with the URL of the actual profile picture */}
              <Image
                src={Oval}
                alt="Profile Picture"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <div className="text-center">
              {/* Replace these dummy data with actual user data */}
              <h2 className="text-2xl font-bold">{userDetails.username}</h2>
              <p className="text-gray-600">{userDetails.phoneNumber}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Interests</h3>
              <ul className="flex flex-wrap gap-2">
                {interest.map((interest, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 px-2 py-1 rounded text-sm text-gray-700"
                  >
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {settings && <Settings userDetails={userDetails} />}
      </div>
    </div>
  );
};

export default Profile;
