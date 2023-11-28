import { useState } from "react";
import { CounselingType } from "../types/counseling/counseling.type";
import api from "../api/CustomAxios/index";

export const UserCounseling = () => {
  const [postLocation, setPostLocation] = useState<CounselingType>({
    name: "",
    image: null,
    introduce: "",
    contact: "",
    code: "",
    address: "",
    latitude: 0,
    longitude: 0,
  });

  const { CustomAxios } = api();

  const handleElementChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | any
    >
  ) => {
    const { name, value, files } = event.target;

    setPostLocation((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  let isFormValid =
    postLocation.name !== "" &&
    postLocation.introduce !== "" &&
    postLocation.contact !== "";

  const handlePostLocationSubmit = () => {
    const formData = new FormData();

    if (isFormValid) {
      formData.append("name", postLocation.name);
      if (postLocation.image instanceof File) {
        formData.append("image", postLocation.image);
      }
      formData.append("introduce", postLocation.introduce);
      formData.append("contact", postLocation.contact);
      formData.append("code", "0.0.0.2");
      formData.append("address", postLocation.address);
      formData.append("latitude", postLocation.latitude.toString());
      formData.append("longitude", postLocation.longitude.toString());
      /* value 확인하기 */
      for (let value of formData.values()) {
        console.log("value", value);
      }
      CustomAxios.post("/api/clinic/", formData)
        .then((response) => {
          console.log(response);
          alert("위치 게시에 성공하셨습니다.");
          setPostLocation({
            name: "",
            image: null,
            introduce: "",
            contact: "",
            code: "",
            address: "",
            latitude: 0,
            longitude: 0,
          });
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("작성 글 게시에 실패하셨습니다.\n다시 시도해주세요.");
        });
    } else {
      alert("모든 필드를 작성해주세요.");
    }
  };

  const showCoordinates = () => {
    const { kakao }: any = window;
    try {
      const geocoder = new kakao.maps.services.Geocoder();
      geocoder.addressSearch(
        postLocation.address,
        (result: any, status: any) => {
          if (status === kakao.maps.services.Status.OK) {
            const { y: latitude, x: longitude } = result[0];
            setPostLocation((prevData) => ({
              ...prevData,
              latitude: latitude,
              longitude: longitude,
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
              title: postLocation.name,
            });
          } else {
            alert("주소 변환에 실패했습니다.");
          }
        }
      );
    } catch (error) {
      console.error("Error Message:", error);
      alert("주소 변환 중 오류가 발생했습니다.");
    }
  };

  return {
    postLocation,
    handleElementChange,
    isFormValid,
    handlePostLocationSubmit,
    showCoordinates,
  };
};
export default UserCounseling;
