import React from "react";
import userIcon from "../assets/user-icon.png";
import { useEditProfileManagementStore } from "../stores/DialogManagementStore";

const UserInfo = (props) => {
  const { name, email, description, rank, photoUrl } = props.config;
  const { setProfileInfo } = useEditProfileManagementStore();
  const handleClick = () => {
    const profileInfo = {
      name: name,
      email: email,
      description: description,
      rank: rank,
      photoUrl: photoUrl
    };
    setProfileInfo(profileInfo);
  }
  return (
    <div className="flex flex-row pb-2 cursor-pointer" onClick={() => handleClick()}>
      <div className="centered rounded-full h-[50px] w-[50px] border-solid border-zinc-700 border bg-slate-800 ">
        <img
          src={photoUrl || userIcon}
          alt="dp"
          className="object-cover rounded-full w-[50px] h-[50px]"
        />
      </div>
      <div className="flex flex-col justify-center ml-3">
        <span className="font-bold">{name}</span>
        {/* {email && <span className="text-xs">{email}</span>}
        {rank && <span className="text-xs">{rank}</span>} */}
        {description && (
          <article className="text-xs break-words">
            <p>{description}</p>
          </article>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
