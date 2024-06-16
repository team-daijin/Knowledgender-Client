import { useState } from "react";
import { WritingCardType } from "../types/Writing/index.type";
import api from "../api/CustomAxios/index";

export const useWritingForm = () => {
  const [postCardData, setPostCardData] = useState<WritingCardType>({
    title: "",
    category: "",
    subTitle: "",
    thumbnail: null,
    content: null,
  });

  const [errorMessages, setErrorMessages] = useState({
    title: "",
    category: "",
    subTitle: "",
  });

  const { CustomAxios } = api();

  const handleElementChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | any
    >
  ) => {
    const { name, value, files } = event.target;

    setPostCardData((prevData: any) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  let isFormValid =
    postCardData.title !== "" &&
    postCardData.category !== "" &&
    postCardData.subTitle !== "";

  const handlePostSubmit = () => {
    const formData = new FormData();
    const newErrorMessages = { ...errorMessages };

    if (isFormValid) {
      formData.append("title", postCardData.title);
      formData.append("category", postCardData.category);
      formData.append("subTitle", postCardData.subTitle);
      if (postCardData.thumbnail instanceof File) {
        formData.append("thumbnail", postCardData.thumbnail);
      }
      if (postCardData.content instanceof File) {
        formData.append("content", postCardData.content);
      }
      for (let key of formData.keys()) {
        console.log("key", key);
      }

      /* value 확인하기 */
      for (let value of formData.values()) {
        console.log("value", value);
      }
      CustomAxios.post("/card/", formData)
        .then((response) => {
          console.log(response);
          alert("작성 글 게시에 성공하셨습니다.");
          setPostCardData({
            title: "",
            category: "",
            subTitle: "",
            thumbnail: null,
            content: null,
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
      if (postCardData.subTitle === "") {
        newErrorMessages.subTitle = "*부제목을 입력해주세요*";
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
