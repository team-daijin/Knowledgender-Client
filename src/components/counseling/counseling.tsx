import React, { useState, useRef } from "react";
import * as S from "./counseling.style";
import { CounselingType } from "../../types/counseling/counseling.type";
import api from "../../api/customAxios";
import { UserCounseling } from "../../hooks/userCounseling";

const Counseling = () => {
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();
  const {
    postLocation,
    handleElementChange,
    isFormValid,
    handlePostLocationSubmit,
    showCoordinates,
  } = UserCounseling();

  const { name, introduce, contact, image, address, latitude, longitude } =
    postLocation;

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
            <S.WritingItemTitle>상담소 소개</S.WritingItemTitle>
            <S.TitleInputPlace
              placeholder="상담소 소개를 입력해주세요"
              type="text"
              name="introduce"
              value={introduce}
              onChange={handleElementChange}
            />
            <S.WritingItemTitle>전화번호</S.WritingItemTitle>
            <S.TitleInputPlace
              placeholder="전화번호를 입력해주세요"
              type="text"
              name="contact"
              value={contact}
              onChange={handleElementChange}
            />
            <S.WritingItemTitle>사진 첨부</S.WritingItemTitle>
            <S.FileUploadButtonBox>
              <S.FileContentBoxLabel
                isImageFileActivate={image !== null}
                isSubmitButtonActivate={isFormValid}
              >
                선택하기
                <S.FileContentBoxInput
                  type="file"
                  name="image"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleElementChange}
                />
              </S.FileContentBoxLabel>
            </S.FileUploadButtonBox>
          </S.InputTitleContentBox>

          <S.InputTitleContentBox>
            <S.WritingItemTitle>주소</S.WritingItemTitle>
            <div>
              <S.TitleInputPlace
                placeholder="상담소의 도로명 주소를 입력해주세요"
                type="text"
                name="address"
                value={address}
                onChange={handleElementChange}
              />
              <S.ShowLocationBnt
                type="button"
                onClick={showCoordinates}
                isShowLocationBntActivate={address !== ""}
              >
                주소찾기
              </S.ShowLocationBnt>
              <S.SubmitBnt
                isSubmitButtonColorActivate={
                  name !== "" && latitude !== 0 && longitude !== 0
                }
                isSubmitButtonMarginActivate={latitude !== 0 && longitude !== 0}
                onClick={handlePostLocationSubmit}
              >
                등록하기
              </S.SubmitBnt>
            </div>
          </S.InputTitleContentBox>
          <S.ShowLoactionMap id="map"></S.ShowLoactionMap>
        </S.MainContentContainer>
      </S.MainItemContainer>
    </S.WholeWritingPageContainer>
  );
};

export default Counseling;
