import instance from "@/services/axios";
import { useQuery } from "@tanstack/react-query";

export default function useGet(url: string) {
  return useQuery({
    queryKey: [url],
    queryFn: async () => {
      const { data } = await instance.get(url);
      return data;
    },
  });
}
