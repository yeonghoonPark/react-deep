import React, { ChangeEvent, FormEvent, useState } from "react";

export default function AppFrom() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <>
      <div
        style={{ width: "200px", height: "200px", background: "green" }}
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          console.log(e.target, "@target");
          console.log(e.currentTarget, "#currentTarget");
        }}
      >
        <div
          style={{ width: "100px", height: "100px", background: "yellow" }}
        ></div>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>이름</label>
        <input
          type='text'
          id='name'
          name='name'
          value={form.name}
          onChange={handleChange}
        />

        <label htmlFor='email'>이메일</label>
        <input
          type='email'
          id='email'
          name='email'
          value={form.email}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </>
  );
}
