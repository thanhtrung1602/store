import { useEffect, useState } from "react";
import instance from "../services/axios";

export const useFetch = ({ url, data }: { url: string; data: object }) => {
  const [response, setResponse] = useState();

  useEffect(() => {
    instance.post(url, data).then((response) => setResponse(response.data));
  }, [url, data]);

  return response;
};
