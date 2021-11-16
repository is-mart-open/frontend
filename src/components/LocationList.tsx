import { styled } from "@compiled/react";
import axios from "axios";
import { useEffect, useState } from "react";
import MartDetail from "./MartDetail";

interface SearchResult {
  base_date: string,
  name: string,
  start_time: Date,
  end_time: Date,
  next_holiday: string | undefined,
  distance: number,
}

export default function LocationList() {
  const [searchResult, setSearchResult] = useState([] as SearchResult[]);
  const [gps, setGps] = useState<GeolocationPosition | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        setGps(success);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("위치 권한이 꺼져있어요.\n권한을 허용하거나 위치 서비스를 사용하고 다시 시도해주세요.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("위치 권한이 꺼져있어요.\n위치 서비스를 사용하고 다시 시도해주세요.");
            break;
          case error.TIMEOUT:
            alert("시간이 초과됐어요.\n다시 시도해주세요.");
            break;
        }
    });
  }, []);

  useEffect(() => {
    if (gps == null) return;
    axios.get(`https://is-mart-open-api.btry.dev/mart/from-location?lat=${gps?.coords.latitude}&lon=${gps?.coords.longitude}`)
      .then((response) => {
        setSearchResult(response.data.result as SearchResult[]);
      });
  }, [gps]);

  return (
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