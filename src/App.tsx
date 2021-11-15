import MartButton from './components/MartButton'
import Header from './components/Header'
import TitleHeader from './components/TitleHeader'
import { styled } from '@compiled/react'
import 'dayjs/locale/ko'
import MartSearch from './components/MartSearch'

export default function App() {
  return (
    <Container>
      <Header/>
      <TitleHeader title="오늘 갈 마트를 눌러주세요" />
      <div style={{overflow: 'auto', display: 'flex', width: '100vw', gap: '0.4rem'}}>
        <MartButton type="emart" title="이마트" />
        <MartButton type="traders" title="트레이더스" subTitle="이마트" />
        <MartButton type="homeplus" title="홈플러스" />
        <MartButton type="costco" title="코스트코" />
        <MartButton type="emart-everyday" title="에브리데이" subTitle="이마트" />
      </div>
      <TitleHeader title="마트의 위치를 찾아주세요" />
      <MartSearch />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  max-width: 768px;
  margin: auto;
`;