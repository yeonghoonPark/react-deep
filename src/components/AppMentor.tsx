import React, { useState } from "react";

type Person = {
  name: string;
  title: string;
  mentor: {
    name: string;
    title: string;
  };
};

export default function AppMentor() {
  const [person, setPerson] = useState<Person>({
    name: "홍길동",
    title: "의적",
    mentor: {
      name: "이몽룡",
      title: "사또",
    },
  });

  // const handleClick1 = (type: "name" | "title") => {
  //   const text = prompt(`what's your mentor's ${type}`);

  //   if (!text) return;

  //   type === "name"
  //     ? setPerson({ ...person, mentor: { ...person.mentor, name: text } })
  //     : setPerson({ ...person, mentor: { ...person.mentor, title: text } });
  // };

  const handleClick2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.name;
    const value = prompt(`what's your mentor's ${type}`);

    setPerson((prev) => ({
      ...prev,
      mentor: { ...prev.mentor, [type]: value },
    }));
  };

  return (
    <div>
      <h1>
        {person.name}는(은) {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button name='name' onClick={handleClick2}>
        Change Mentor's name
      </button>
      <button name='title' onClick={handleClick2}>
        Change Mentor's title
      </button>
    </div>
  );
}
