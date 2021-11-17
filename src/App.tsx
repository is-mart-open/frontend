import Header from './components/Header'
import TitleHeader from './components/TitleHeader'
import { styled } from '@compiled/react'
import 'dayjs/locale/ko'
import MartSearch from './components/MartSearch'
import { useEffect, useState } from 'react'
import SlidingPane from "react-sliding-pane";

import "./slide-pane.css";
import LocationList from './components/LocationList'
import { useCookies } from 'react-cookie'
import RecentList from './components/RecentList'
import MartSearchButton from './components/buttons/MartSearchButton'
import MartLocationButton from './components/buttons/MartLocatonButton'

export default function App() {
  const [openedPane, setOpenedPane] = useState<"search"|"location"|null>(null);
  const [cookie] = useCookies(["recent"]);
  const recentCookie = ((cookie.recent ?? []) as string[]);

  return (
    <Container>
      <Header/>

      <TitleHeader title="마트의 위치를 찾아주세요" />

      <SearchButtons>
        <MartSearchButton onClick={() => setOpenedPane("search")} />
        <MartLocationButton onClick={() => setOpenedPane("location")} />
      </SearchButtons>

      {recentCookie.length > 0 && <RecentList value={recentCookie}/>}

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
  max-width: 768px;
  margin: auto;
`;

const SearchButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const PaneCloseIcon = styled.div`
    border: 2px solid #888888;
    border-radius: 1rem;
    width: 3rem;
`;