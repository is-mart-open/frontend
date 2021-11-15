import MartButton from './components/MartButton'
import Header from './components/Header'
import TitleHeader from './components/TitleHeader'
import { styled } from '@compiled/react'
import 'dayjs/locale/ko'
import MartSearch from './components/MartSearch'
import { useState } from 'react'
import SlidingPane from "react-sliding-pane";

import "./slide-pane.css";

export default function App() {
  const [openedPane, setOpenedPane] = useState<"search"|"location"|null>(null);

  return (
    <Container>
      <Header/>
      <TitleHeader title="오늘 갈 마트를 눌러주세요" />
      <div style={{overflow: 'auto', display: 'flex', width: '100vh', gap: '0.4rem'}}>
        <MartButton type="emart" title="이마트" />
        <MartButton type="traders" title="트레이더스" subTitle="이마트" />
        <MartButton type="homeplus" title="홈플러스" />
        <MartButton type="costco" title="코스트코" />
        <MartButton type="emart-everyday" title="에브리데이" subTitle="이마트" />
      </div>

      <button onClick={() => setOpenedPane("search")}>검색 버튼</button>
      <button onClick={() => {
        setOpenedPane("location");
        requestGeoLocation();
      }}>위치 버튼</button>

      <SlidingPane
        isOpen={openedPane === "search"}
        closeIcon={<PaneCloseIcon />}
        width="100vw"
        from="bottom"
        onRequestClose={() => setOpenedPane(null)}
      >
        <Container>
          <TitleHeader title="검색할 점포 이름을 입력해주세요" />
          <MartSearch />
        </Container>
      </SlidingPane>

      <SlidingPane
        isOpen={openedPane === "location"}
        closeIcon={<PaneCloseIcon />}
        width="100vw"
        from="bottom"
        onRequestClose={() => setOpenedPane(null)}
      >
        <div>GeoLocation</div>
      </SlidingPane>
    </Container>
  )
}

const requestGeoLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccessGeoLocation, onFailureGeoLocation);
  } else {
    alert("브라우저 위치 검색이 지원되지 않아요.");
  }
}

const onSuccessGeoLocation = (position: GeolocationPosition) => {
  alert(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`);
}

const onFailureGeoLocation = (error: GeolocationPositionError) => {
  if (error.code == error.PERMISSION_DENIED) {
    alert("위치 권한이 꺼져있어요.\n권한을 허용하거나 위치 서비스를 사용하고 다시 시도해주세요.");
  } else if (error.code == error.POSITION_UNAVAILABLE) {
    alert("위치 권한이 꺼져있어요.\n위치 서비스를 사용하고 다시 시도해주세요.");
  } else if (error.code == error.TIMEOUT) {
    alert("시간이 초과됐어요. 다시 시도해주세요.");
  }
}

const Container = styled.div`
  height: 100vh;
  max-width: 768px;
  margin: auto;
`;

const PaneCloseIcon = styled.div`
    border: 2px solid #888888;
    border-radius: 1rem;
    width: 3rem;
`;