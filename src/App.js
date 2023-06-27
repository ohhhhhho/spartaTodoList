import List from "./components/List";
import { useState } from "react";

function App() {
  const [content, setContent] = useState({
    id: 0,
    title: "",
    cont: "",
    isDone: false,
  });
  const [users, setUsers] = useState([]);

  const onChangeHandler = (e) => {
    //content 기존 객체 복사후 e.target.name 값을 value에 넣는다.
    setContent((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      isDone: false,
    }));
  };

  const onClickArrayHandler = () => {
    //구조분해할당으로 content에 있는 요소들 사용준비
    const { id, title, cont, isDone } = content;

    //users 기존 배열 복사후 새로운 객체 추가
    setUsers([
      ...users,
      {
        id,
        title,
        cont,
        isDone,
      },
    ]);

    //input 초기화
    setContent((pre) => ({
      id: pre.id + 1,
      title: "",
      cont: "",
      isDone,
    }));
  };

  //id값 비교해서 같다면 isDone값 반전시킴
  const onClickIsDoneHandler = (id) => {
    setUsers((pre) =>
      pre.map((user) =>
        user.id === id ? { ...user, isDone: !user.isDone } : user
      )
    );
  };

  //id값 같지 않은것들만 배열반환
  const onClickDeleteHandler = (id) => {
    setUsers((pre) => pre.filter((user) => user.id !== id));
  };

  return (
    <div className="App">
      제목:
      <input
        type="text"
        name="title"
        value={content.title}
        onChange={onChangeHandler}
      />
      내용:
      <input
        type="text"
        name="cont"
        value={content.cont}
        onChange={onChangeHandler}
      />
      <button onClick={onClickArrayHandler}>등록하기</button>
      <h1>진행중</h1>
      <div style={boxStyle}>
        {users.map((ele) => {
          return (
            !ele.isDone && (
              <>
                <List
                  user={ele}
                  key={ele.id}
                  onClickIsDoneHandler={onClickIsDoneHandler}
                  onClickDeleteHandler={onClickDeleteHandler}
                />
              </>
            )
          );
        })}
      </div>
      <h1>완료</h1>
      <div style={boxStyle}>
        {users.map((ele) => {
          return (
            ele.isDone && (
              <>
                <List
                  user={ele}
                  key={ele.id}
                  onClickIsDoneHandler={onClickIsDoneHandler}
                  onClickDeleteHandler={onClickDeleteHandler}
                />
              </>
            )
          );
        })}
      </div>
    </div>
  );
}

const boxStyle = {
  display: "flex",
  gap: "10px",
};

export default App;
