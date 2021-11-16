import { styled } from "@compiled/react";

interface Props {
  onClick(): void,
}

export default function MartSearchButton({ onClick }: Props) {
  return (
    <Button onClick={onClick}>
      <h1>점포명으로 찾기</h1>
      <h2>점포 이름을<br />입력하여 검색</h2>
    </Button>
  )
}

const Button = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #7CD7EB;
  background-image: url("/icons/search.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-blend-mode: soft-light;
  background-position: 100% 100%;
  background-size: 4rem;
  border-radius: 0.875rem;
  padding: 0.625rem;

  gap: 0.5rem;

  & h1,h2 {
    margin: 0;
    padding: 0;
    background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.36) 100%);
    mix-blend-mode: overlay;
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  & h1 {
    font-size: 1.25rem;
  }

  & h2 {
    font-size: 0.875rem;
  }
`;