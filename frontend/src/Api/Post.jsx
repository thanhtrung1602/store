import { useMutation } from "@tanstack/react-query";
import instance from "../services/customAxios";

function Post() {
  return useMutation({
    mutationFn: ({ url, data }) =>
      instance
        .post(url, data, { withCredentials: true })
        .then((response) => response.data),
  });
}

export default Post;
