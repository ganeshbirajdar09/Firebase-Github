import React from "react";
import { Card, CardBody } from "reactstrap";
import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <Card className="user-card text-center mt-3 mb-4">
      <img src={user.avatar_url} className="img-thumbnail" alt="User_img" />
      <CardBody className="card-body">
        <div className="">{user.name}</div>
        <div className="">{user.location}</div>
        <div className="">{user.bio}</div>
        <div className="">
          Available for hire:
          {user.hireable ? "YES" : "NOPE"}
        </div>
        <div className="text-info">
          Followers:
          {user.followers}
        </div>
      </CardBody>
    </Card>
  );
};
export default UserCard;
