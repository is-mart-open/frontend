import Header from './components/Header'
import TitleHeader from './components/TitleHeader'
import { styled } from '@compiled/react'
import 'dayjs/locale/ko'
import MartSearch from './components/MartSearch'
import { useState } from 'react'
import SlidingPane from "react-sliding-pane";

import "./slide-pane.css";
import LocationList from './components/LocationList'

export default function App() {
  const [openedPane, setOpenedPane] = useState<"search"|"location"|null>(null);

  return (
    <Container>
      <Header/>

      <TitleHeader title="마트의 위치를 찾아주세요" />

      <button onClick={() => setOpenedPane("search")}>검색 버튼</button>
      <button onClick={() => {
        setOpenedPane("location");
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
        <Container>
          <TitleHeader title="10km 이내 가까운 마트 목록이에요" />
          <LocationList />
        </Container>
      </SlidingPane>
    </Container>
  )
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