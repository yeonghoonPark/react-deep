import React, { useReducer } from "react";
import { Person } from "../models/persons";
import { ActionsType } from "../actions-type";
import { personReducer } from "../reducer/personReducer";

const initialPerson: Person = {
  name: "이최소",
  title: "채소상인",
  mentors: [
    { name: "김옥분", title: "육류상인" },
    { name: "최형배", title: "사기꾼" },
  ],
};

export default function AppMentors() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const oldName = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const newName = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    if (!oldName || !newName) return;
    dispatch({ type: ActionsType.PERSON_MENTO_UPDATE, oldName, newName });
  };

  const handleAdd = () => {
    const name = prompt(`추가하실 이름을 입력해주세요`);
    const title = prompt(`추가하실 타이틀을 입력해주세요`);
    if (!name || !title) return;
    dispatch({ type: ActionsType.PERSON_MENTO_ADD, name, title });
  };

  const handleDelete = () => {
    const name = prompt(`삭제하실 멘토의 이름을 입력해주세요`);
    if (!name) return;
    dispatch({ type: ActionsType.PERSON_MENTO_DELETE, name });
  };

  return (
    <div>
      <h1>
        {person.name}은(는) {person.title}
      </h1>
      <p>{person.name}의 멘토는</p>
      <ul>
        {person.mentors.map((mentor, i) => (
          <li key={i}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가</button>
      <button onClick={handleDelete}>멘토 삭제</button>
    </div>
  );
}
