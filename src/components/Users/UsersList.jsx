import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <div key={user.id}>
            <li>
              {user.name} ({user.age} years old)
              <Button onClick={(event) => props.onDelete(event, user.id)}>
                Delete
              </Button>
            </li>
          </div>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
