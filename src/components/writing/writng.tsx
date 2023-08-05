import React, { useState } from "react";
import * as S from "./writing.style";
import Logo from "../../assets/image/signinLogo.svg";
import { WritingCardType } from "../../types/writing/writing.type";

const ACCESS_TOKEN = "your_access_token_here";

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

  const postData = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("content", content);
    formData.append("image", image);

    fetch("/api/card/", {
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
        console.error("Error:", error);
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
      <div>
        <img src={Logo} alt="Error" />
      </div>
      <div>
        <h1>게시물 작성</h1>
        <h5>게시할 글 정보를 작성해 주세요.</h5>
      </div>
      <div>
        <div>
          <h6>글 제목</h6>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <h6>카테고리</h6>
          <select value={category} onChange={handleCategoryChange}>
            {validCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h6>글 내용</h6>
          <textarea value={content} onChange={handleContentChange} />
        </div>
        <div>
          <h6>자료첨부</h6>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit" onClick={postData}>
          게시하기
        </button>
      </div>
    </>
  );
};

export default Writing;
