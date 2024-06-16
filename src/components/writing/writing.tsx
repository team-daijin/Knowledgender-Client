import React, { useEffect } from "react";
import * as S from "./writing.style";
import { useWritingForm } from "../../hooks/useFormValidation";

const Writing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const validCategories = [
    { label: "카테고리를 선택해주세요", value: "" },
    { label: "없음", value: "NONE" },
    { label: "마음", value: "HEART" },
    { label: "신체", value: "BODY" },
    { label: "범죄", value: "VIOLENCE" },
    { label: "관계", value: "RELATION" },
    { label: "평등", value: "EQUALITY" },
  ];
  const {
    postCardData,
    errorMessages,
    handleElementChange,
    isFormValid,
    handlePostSubmit,
  } = useWritingForm();

  const { title, content, thumbnail, subTitle, category } = postCardData;

  useEffect(() => {
    console.log(postCardData);
  }, [postCardData]);

  return (
    <S.WholeWritingPageContainer>
      <S.MainItemContainer>
        <S.TitleBox>
          <S.Title1>게시물 작성</S.Title1>
          <S.Title2>게시할 글 정보를 작성해주세요.</S.Title2>
        </S.TitleBox>
        <S.MainContentContainer>
          <S.InputTitleContentBox>
            <S.WritingItemTitle>글 제목</S.WritingItemTitle>
            <S.TitleInputPlace
              placeholder="게시 글 제목을 입력해주세요"
              type="text"
              name="title"
              value={title}
              onChange={handleElementChange}
            />
            {errorMessages.title && title === "" && (
              <S.ErrorMessage>{errorMessages.title}</S.ErrorMessage>
            )}
          </S.InputTitleContentBox>

          <S.SelectiveElementsContiner>
            <S.SelectCategoriesBox>
              <S.WritingItemTitle>카테고리</S.WritingItemTitle>
              <S.CategoriesSelectPlace
                value={category}
                name="category"
                onChange={handleElementChange}
              >
                {validCategories.map((category, index) => (
                  <option
                    key={index}
                    value={category.value}
                    disabled={index === 0}
                  >
                    {category.label}
                  </option>
                ))}
              </S.CategoriesSelectPlace>

              {errorMessages.category && category === "" && (
                <S.ErrorMessage>{errorMessages.category}</S.ErrorMessage>
              )}
            </S.SelectCategoriesBox>

            <S.FileUploadButtonBox>
              <S.WritingItemTitle>배너첨부</S.WritingItemTitle>
              <S.FileContentBoxLabel
                isImageFileActivate={thumbnail !== null}
                isSubmitButtonActivate={isFormValid}
              >
                선택하기
                <S.FileContentBoxInput
                  type="file"
                  name="thumbnail"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleElementChange}
                />
              </S.FileContentBoxLabel>
            </S.FileUploadButtonBox>
            <S.FileUploadButtonBox>
              <S.WritingItemTitle>자료첨부</S.WritingItemTitle>
              <S.FileContentBoxLabel
                isImageFileActivate={content !== null}
                isSubmitButtonActivate={isFormValid}
              >
                선택하기
                <S.FileContentBoxInput
                  type="file"
                  name="content"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleElementChange}
                />
              </S.FileContentBoxLabel>
            </S.FileUploadButtonBox>
          </S.SelectiveElementsContiner>

          <S.MainContentTextareaContentBox>
            <S.WritingItemTitle>부제목</S.WritingItemTitle>
            <S.MainContenttWritingTextareaPlace
              placeholder="콘텐츠를 설명하는 간단한 글을 작성해주세요"
              value={subTitle}
              name="subTitle"
              onChange={handleElementChange}
            />
            {errorMessages.subTitle && subTitle === "" && (
              <S.ErrorMessage>{errorMessages.subTitle}</S.ErrorMessage>
            )}
          </S.MainContentTextareaContentBox>
          <S.ButtonContentBox>
            <S.SubmitBnt
              type="button"
              onClick={handlePostSubmit}
              isImageFileActivate={subTitle !== null}
              isSubmitButtonActivate={isFormValid}
            >
              게시하기
            </S.SubmitBnt>
          </S.ButtonContentBox>
        </S.MainContentContainer>
      </S.MainItemContainer>
    </S.WholeWritingPageContainer>
  );
};
export default Writing;
