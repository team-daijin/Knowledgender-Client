import React, { useState } from "react";
import * as S from "./counseling.style";
import { CounselingType } from "../../types/counseling/counseling.type";

const Counseling = () => {
  const [postLocation, setPostLocation] = useState<CounselingType>({
    name: "",
    introduce: "",
    contact: "",
    code: "",
    location: {
      address: "",
      latitude: 0,
      longitude: 0,
    },
  });
  const { name, location } = postLocation;
  const { address, latitude, longitude } = location;

  const handleElementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setPostLocation((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setPostLocation((prevData) => ({
      ...prevData,
      location: {
        ...prevData.location,
        [name]: value,
      },
    }));
  };

  const showCoordinates = () => {
    const { kakao }: any = window;
    try {
      const geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(address, (result: any, status: any) => {
        if (status === kakao.maps.services.Status.OK) {
          const { y: latitude, x: longitude } = result[0];
          setPostLocation((prevData) => ({
            ...prevData,
            location: {
              ...prevData.location,
              address: address,
              latitude: latitude,
              longitude: longitude,
            },
          }));
          alert(
            "주소 변환이 정상적으로 이루어졌습니다.\n" +
              `위도 : ${latitude}, 경도 : ${longitude}`
          );

          const container = document.getElementById("map");
          const options = {
            center: new kakao.maps.LatLng(latitude, longitude),
            level: 2,
          };
          const map = new kakao.maps.Map(container, options);

          const marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(latitude, longitude),
            map: map,
            title: name,
          });
        } else {
          alert("주소 변환에 실패했습니다.");
        }
      });
    } catch (error) {
      console.error("Error Message:", error);
      alert("주소 변환 중 오류가 발생했습니다.");
    }
  };

  return (
    <S.WholeWritingPageContainer>
      <S.MainItemContainer>
        <S.TitleBox>
          <S.Title1>상담소 등록</S.Title1>
          <S.Title2>등록할 상담소 위치 정보를 작성해 주세요.</S.Title2>
        </S.TitleBox>
        <S.MainContentContainer>
          <S.InputTitleContentBox>
            <S.WritingItemTitle>상담소명</S.WritingItemTitle>
            <S.TitleInputPlace
              placeholder="상담소명을 입력해주세요"
              type="text"
              name="name"
              value={name}
              onChange={handleElementChange}
            />
          </S.InputTitleContentBox>
          <S.InputTitleContentBox>
            <S.WritingItemTitle>주소</S.WritingItemTitle>
            <S.TitleInputPlace
              placeholder="상담소의 도로명 주소를 입력해주세요"
              type="text"
              name="address"
              value={address}
              onChange={handleLocationChange}
            />
            <S.ShowLocationBnt
              type="button"
              onClick={showCoordinates}
              isShowLocationBntActivate={address !== ""}
            >
              주소찾기
            </S.ShowLocationBnt>
          </S.InputTitleContentBox>
          <S.ShowLoactionMap id="map"></S.ShowLoactionMap>
          <S.SubmitBnt
            isSubmitButtonColorActivate={
              name !== "" && latitude !== 0 && longitude !== 0
            }
            isSubmitButtonMarginActivate={latitude !== 0 && longitude !== 0}
          >
            등록하기
          </S.SubmitBnt>
        </S.MainContentContainer>
      </S.MainItemContainer>
    </S.WholeWritingPageContainer>
  );
};

export default Counseling;
