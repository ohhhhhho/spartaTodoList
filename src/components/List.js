import React from "react";

export default function List({
  user,
  onClickIsDoneHandler,
  onClickDeleteHandler,
}) {
  return (
    <>
      <div style={{ border: "solid 1px green" }}>
        <h6>{user.title}</h6>
        <p>{user.cont}</p>
        <button onClick={(e) => onClickDeleteHandler(user.id)}>삭제하기</button>
        <button onClick={(e) => onClickIsDoneHandler(user.id)}>완료하기</button>
      </div>
    </>
  );
}
