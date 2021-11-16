import { styled } from "@compiled/react";
import axios from "axios";
import { useEffect, useState } from "react";
import MartDetail from "./MartDetail";
import TitleHeader from "./TitleHeader";

interface Props {
  value: string[],
}

interface SearchResult {
  base_date: string,
  name: string,
  start_time: Date,
  end_time: Date,
  next_holiday: string | undefined,
  distance: number | undefined,
}

export default function RecentList({ value }: Props) {
  const [searchResult, setSearchResult] = useState([] as SearchResult[]);

  useEffect(() => {
    axios.get(`https://is-mart-open-api.btry.dev/mart/${value.join(",")}`)
      .then((response) => {
        setSearchResult(response.data as SearchResult[]);
      });
  }, []);

  return (
    <>
      <TitleHeader title="찾아본 마트 목록이에요" />
      <Container>
        <ul>
        {searchResult.map((value) => {
          let type: "traders" | "emart" | "homeplus" | "costco" | "emart-everyday" = "emart"; 
          if (value.name.includes("이마트 트레이더스")) {
            type = "traders"
          } else {
            type = "emart"
          }
          
          let name = value.name;
          name = name.replace("이마트 트레이더스", "");
          name = name.replace("이마트", "");
          
          return <li key={value.name}><MartDetail type={type} name={name} start_time={value.start_time} end_time={value.end_time} distance={value.distance} /></li>
        })}
        </ul>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  height: 66%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  overflow-y: auto;

  & ul {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-height: 0px;
    list-style: none;
    padding: 0;
    margin: 0.1rem 0 0.5rem 0 ;
    gap: 0.625rem;
    align-content: space-evenly;
  }

  & > div {
    flex-grow: 0;
    position: relative;
  }
`;