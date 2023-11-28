// MyPage.jsx

import React, { useEffect, useState } from "react";
import api from "../../api/CustomAxios/index";
import { MyPageType } from "../../types/MyPage/index.type";
import * as S from "./style";

const MyPage = () => {
  const [responseData, setResponseData] = useState<MyPageType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { CustomAxios } = api();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CustomAxios.get("/api/card/user", {
          withCredentials: true,
        });
        setResponseData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [CustomAxios]);

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h1>Your Cards</h1>
          {responseData.map((card) => (
            <div key={card.id}>
              <p>ID: {card.id}</p>
              <p>Title: {card.title}</p>
              <p>Writer: {card.writer}</p>
              <p>Category: {card.category}</p>
              <p>Content: {card.content}</p>
              <p>Thumbnail: {card.thumbnail}</p>
              <p>Image: {card.image}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPage;
