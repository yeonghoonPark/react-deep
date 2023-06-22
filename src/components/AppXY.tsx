import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: beige;
`;

const Pointer = styled.div<{ top: number; left: number }>`
  position: absolute;
  background-color: crimson;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    // object를 return하는 경우 ()로 묶어줘야 한다.
    // setPosition((prev) => ({ ...prev, x: e.clientX }));
    setPosition((prev) => {
      return { ...prev, x: e.clientX };
    });
  };

  return (
    <Container className='container' onMouseMove={handleMouse}>
      <Pointer className='pointer' top={position.y} left={position.x} />
    </Container>
  );
}
