import { useContext, useEffect, useState } from "react";
import LoaderContext from "../components/context/LoaderProvider";

export default function useFetch() {
  const { setLoading } = useContext(LoaderContext);
  const sendRequest = async (url, options) => {
    setLoading(true);
    try {
      if (options.method === "GET") {
        delete options.body;
      }
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Erreur de requête : ${response.status}`);
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const sendRequestWithDelay = async (url, options, delayTime) => {
    setLoading(true);
    await delay(delayTime);
    return sendRequest(url, options);
  };

  return { sendRequestWithDelay, sendRequest };
}
