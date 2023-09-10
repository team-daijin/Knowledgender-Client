import { useState } from "react";
import { WritingCardType } from "../types/writing/writing.type";
import apiEndpoint from "../api/customAxios";

export const useWritingForm = () => {
  const [postCardData, setPostCardData] = useState<WritingCardType>({
    title: "",
    category: "",
    content: "",
    thumbnail: null,
    image: null,
  });

  const [errorMessages, setErrorMessages] = useState({
    title: "",
    category: "",
    content: "",
  });

  const handleElementChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | any
    >
  ) => {
    const { name, value, files } = event.target;

    setPostCardData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  let isFormValid =
    postCardData.title !== "" &&
    postCardData.category !== "" &&
    postCardData.content !== "";

  const handlePostSubmit = () => {
    const formData = new FormData();
    const newErrorMessages = { ...errorMessages };

    if (isFormValid) {
      if (postCardData.image instanceof File) {
        formData.append("image", postCardData.image);
      }
      if (postCardData.thumbnail instanceof File) {
        formData.append("thumbnail", postCardData.thumbnail);
      }
      formData.append("title", postCardData.title);
      formData.append("category", postCardData.category);
      formData.append("content", postCardData.content);
      console.log(formData);
      apiEndpoint
        .post("/api/card/", formData)
        .then((response) => {
          console.log(response);
          alert("작성 글 게시에 성공하셨습니다.");
          setPostCardData({
            title: "",
            category: "",
            content: "",
            thumbnail: null,
            image: null,
          });
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("작성 글 게시에 실패하셨습니다.\n다시 시도해주세요.");
        });
    } else {
      alert("모든 필드를 작성해주세요.");
      if (postCardData.title === "") {
        newErrorMessages.title = "*제목을 입력해주세요*";
      }
      if (postCardData.category === "") {
        newErrorMessages.category = "*카테고리를 선택해주세요*";
      }
      if (postCardData.content === "") {
        newErrorMessages.content = "*내용을 입력해주세요*";
      }

      setErrorMessages(newErrorMessages);
    }
  };

  return {
    postCardData,
    errorMessages,
    handleElementChange,
    isFormValid,
    handlePostSubmit,
  };
};
