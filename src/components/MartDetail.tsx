import { styled } from '@compiled/react';
import MartButton from './MartButton'
import { MdSchedule } from "react-icons/md";
import { RiRoadMapLine } from "react-icons/ri";

interface Props {
  type: "emart" | "traders" | "homeplus" | "costco" | "emart-everyday";
  name: string;
  start_time: Date;
  end_time: Date;
  distance?: number;
}

export default function MartDetail({ type, name, start_time, end_time, distance }: Props) {
  return (
    <Container>
        <MartButton type={type} />
        <Information>
          <h2>
              <span>{name}</span>
              <span>은 </span>
              <span>영업시작전</span>
          </h2>
          <h3>
            {
              distance && <><RiRoadMapLine />&nbsp;{(distance! / 1000).toFixed(1)}km&nbsp;&nbsp;</>
            }
            <MdSchedule />&nbsp;{start_time} ~ {end_time}
          </h3>
        </Information>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: #F5F5F5;
  border-radius: 0.75rem;
  box-shadow: 2px 2px 8px rgb(0 0 0 / 15%);
`;

const Information = styled.div`
  flex-direction: column;
  align-self: center;
  margin-left: 0.625rem;

  & > h2 {
    margin: 0;
    font-size: 1.25rem;
    color: #606060;
    margin-bottom: 0.5rem;

    & span:nth-child(1) {
      font-weight: bold;
    }

    & span:nth-child(2) {
      font-weight: normal;
    }

    & span:nth-child(3) {
      font-weight: 900;
      color: #81CB36;
    }
  }

  & > h3 {
    display: flex;
    align-items: center;
    margin: 0;
    color: #888888;
    font-size: 0.8rem;
    font-weight: normal;
  }
`;