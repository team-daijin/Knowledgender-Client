import React, { useState } from "react"; // Removed unused useEffect import
import * as S from "./writing.style";
import Logo from "../../assets/image/signinLogo.svg";
import { WritingCardType } from "../../types/writing/writing.type";

const Writing = () => {
  const [postCardData, setPostCardData] = useState<WritingCardType>({
    title: "",
    category: "GENDERISSUES",
    content: "",
    image: null,
  });

  const { title, category, content, image } = postCardData;

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostCardData({ ...postCardData, title: event.target.value });
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPostCardData({ ...postCardData, category: event.target.value });
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPostCardData({ ...postCardData, content: event.target.value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedImage = event.target.files[0];
      setPostCardData({ ...postCardData, image: selectedImage });
    }
  };

  const handlePostSubmit = () => {
    if (!title || !category || !content || !image) {
      alert("모든 필드를 작성해주세요.");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("content", content);
    formData.append("image", image);

    const ACCESS_TOKEN = localStorage.getItem("login-token");

    fetch("http://52.78.246.108:8080/api/card/", {
      // Fixed the URL structure
      method: "POST",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("글 게시에 성공하셨습니다!");
      })
      .catch((error) => {
        console.error("Error:\n", error);
        alert("문제가 발생하였습니다. 다시 시도해주세요");
      });
  };

  const validCategories = [
    "GENDERISSUES",
    "SEXUALASSAULTCOPE",
    "BODY",
    "RELATIONSHIP",
    "MY",
  ];

  return (
    <>
      <S.topIntroBox>
        <S.logoImg>
          <img src={Logo} alt="Error" />
        </S.logoImg>
        <S.titleBox>
          <S.title1>게시물 작성</S.title1>
          <S.title2>게시할 글 정보를 작성해 주세요.</S.title2>
        </S.titleBox>
      </S.topIntroBox>
      <S.mainContainerItem>
        <S.mainContainerBox>
          <div>
            <S.inputContentTitle>글 제목</S.inputContentTitle>
            <S.inputContentBox
              placeholder="글 제목을 입력해주세요"
              type="text"
              value={title}
              onChange={handleTitleChange}
            ></S.inputContentBox>
          </div>
          <div>
            <S.inputContentTitle>
              <pre> 카테고리</pre>
            </S.inputContentTitle>
            <S.selectContentBox
              value={category}
              onChange={handleCategoryChange}
            >
              {validCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </S.selectContentBox>
          </div>
          <div>
            <S.inputContentTitle>글 내용</S.inputContentTitle>
            <S.textareaContentBox
              placeholder="글 내용을 입력해주세요"
              value={content}
              onChange={handleContentChange}
            />
          </div>
          <div>
            <S.inputContentTitle>
              <pre> 자료첨부</pre>
            </S.inputContentTitle>
            <S.fileContentBoxLabel>
              선택하기
              <S.fileContentBoxInput
                type="file"
                onChange={handleImageChange}
                accept=".jpg, .jpeg, .png"
              />
            </S.fileContentBoxLabel>
          </div>
        </S.mainContainerBox>
      </S.mainContainerItem>
      <S.buttonContentBox>
        <S.submitBnt type="submit" onClick={handlePostSubmit}>
          게시하기
        </S.submitBnt>
      </S.buttonContentBox>
    </>
  );
};

export default Writing;
