"use client";

import { useEffect, useState } from "react";
import instance from "../services/axios";

function post({ url, data }: { url: string; data: Object }) {
  const [response, setResponse] = useState();
  useEffect(() => {
    instance.post(url, data).then((response) => setResponse(response.data));
  }, [url, data]);
  return response;
}

export default post;
