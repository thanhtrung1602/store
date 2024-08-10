// app/api/post.tsx
"use client";

import instance from "@/services/axios";
import { useMutation } from "@tanstack/react-query";

interface UsePostOptions {
  url: string;
  data: object;
}

export default function usePost() {
  return useMutation({
    mutationFn: ({ url, data }: UsePostOptions) =>
      instance.post(url, data).then((response) => response.data),
  });
}
