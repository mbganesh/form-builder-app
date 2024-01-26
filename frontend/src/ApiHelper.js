import { useQuery, useMutation, useQueryClient } from "react-query";

export const usePostApi = (key, mutationFunction, options = {}) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationKey: key,
      mutationFn: mutationFunction,
      onSettled: () => queryClient.invalidateQueries(key),
    });
  };
  
  export const useGetApi = (key, queryFunction, options = {} , refetchKey = '') => {
    const queryClient = useQueryClient();
    return useQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options,
      onSuccess: () => {
        queryClient.refetchQueries(refetchKey);
      }
    });
  };
  