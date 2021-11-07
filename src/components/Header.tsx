import { styled } from "@compiled/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { MdSchedule } from "react-icons/md";
import MartDetail from "./MartDetail";

export default function Header() {
  const calculateTime = () => {
    return dayjs(new Date()).format("DD일(ddd) A hh:mm");
  }

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    let secTimer = setInterval(() => setTime(calculateTime), 1000);
    return () => clearInterval(secTimer);
  });

  return (
    <Title>
        <h1>오늘 마트 여나요?</h1>
        <p><MdSchedule />&nbsp;{time}</p>
        <WrapBreak />
        <MartDetail type="emart" title="이마트" subTitle="" name="경산점" status="영업시작전" time="10:00~22:00" />
    </Title>
  );
}

const Title = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  border-bottom-right-radius: 1.5rem;
  padding: 1.5rem;

  & > h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 800;
  }

  & > p {
    display: flex;
    align-items: center;
    margin: auto 0 auto auto;
    font-size: 0.875rem;
    color: #888888;
  }
`;

const WrapBreak = styled.div`
  flex-basis: 100%;
  height: 0;
  margin: 0.5rem;
`;