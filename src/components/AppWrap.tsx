import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image={
            "https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/639/6532bc37267362b6809b87085ca5dce5_res.jpeg"
          }
          name={"avatar"}
          size={100}
        />
        <p>Hello</p>
      </Navbar>
    </div>
  );
}

type NavbarProps = {
  children: React.ReactNode;
};

function Navbar({ children }: NavbarProps) {
  return <header style={{ background: "#f7f3f3" }}>{children}</header>;
}

type AvatarProps = {
  image: string;
  name: string;
  size: number;
};

function Avatar({ image, name, size }: AvatarProps) {
  return (
    <>
      <img
        style={{ borderRadius: "50%" }}
        src={image}
        alt={name}
        width={size}
        height={size}
      />
    </>
  );
}
