import React from "react";
import Card from "react-bootstrap/Card";

import { CardColumns } from "react-bootstrap";

export default function UserProfileList(props) {
  console.log("WHAT IS PROPS IN USERPROFILELIST", props);
  return (
    <div>
      <CardColumns className="mt-5">
        //
        {props.UserProfiles.map(profile => {
          return (
            <Card border="dark" style={{ width: "18rem" }} key={profile.id}>
              <Card.Img variant="top" src={profile.image} />
              <Card.Body>
                <Card.Title> {profile.title}</Card.Title>
                <Card.Text>
                  <li>{profile.description}</li>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    </div>
  );
}
