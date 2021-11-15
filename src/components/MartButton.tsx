import { styled } from "@compiled/react";
// import "./MartButton.css";

interface Props {
  type: "emart" | "traders" | "homeplus" | "costco" | "emart-everyday";
  title: string;
  subTitle?: string;
}

export default function MartButton({ type, title, subTitle }: Props) {
  return (
    <Button className={`mart-button ${type}`} onClick={onClick}>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
    </Button>
  );
}

const onClick = () => {
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

const Button = styled.div`
  width: 6rem;
  height: 4rem;
  min-width: 95px;
  min-height: 64px;
  position: relative;
  padding-top: 0.625rem;
  padding-left: 0.5rem;
  border-radius: 0.75rem;
  font-weight: 900;

  background-repeat: no-repeat;
  background-size: contain;
  background-blend-mode: soft-light;
  background-position: 100% 100%;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;

  &.emart {
    background-image: url("/logos/emart.svg"),
      linear-gradient(180deg, #FED681 0%, rgba(254, 206, 103, 0.99) 100%);
    background-size: 87px 26px, auto;
  }

  &.traders {
    background-image: url("/logos/traders.svg");
    background-color: #A9D37E;
    background-size: 89px;
  }

  &.homeplus {
    background-image: url("/logos/homeplus.svg");
    background-color: #F7979B;
    background-size: 33px;
  }

  &.costco {
    background-image: url("/logos/costco.svg");
    background-color: #8FCFFF;
  }

  &.emart-everyday {
    background-image: url("/logos/emart_everyday.svg");
    background-color: #ADAFB8;
    background-size: 57px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.125rem;
  line-height: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.36) 100%);
  mix-blend-mode: overlay;
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubTitle = styled.h2`
  margin: 0;
  font-size: 0.8rem;
  line-height: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.36) 100%);
  mix-blend-mode: overlay;
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
