import { useQuery, useMutation, useQueryClient } from "react-query";
import { axios } from "utils.axios";

// Sign in with a email and password
export const userSignIn = async (data) => {
  return await axios.post("/users/signin", { ...data });
};

export const useUserSignIn = () => {
  return useMutation({
    mutationFn: (resData) => userSignIn(resData),
  });
};

// Register a user
export const userSignUp = async (data) => {
  return await axios.post("/users/signup", { ...data });
};

export const useUserSignUp = () => {
  return useMutation({
    mutationFn: (resData) => userSignUp(resData),
  });
};

// create form
export const createForm = async (data) => {
  return await axios.post("/users/create-form", { ...data });
};

export const useCreateForm = () => {
  return useMutation({
    mutationFn: (resData) => createForm(resData),
  });
};

// form list
export const formList = async (params = {}) => {
  return await axios.get(`/users/form-list/`, { params });
};

export const useFormList = (params) => {
  return useQuery(["formData", params], () => formList(params));
};


// save form
export const saveForm = async (data) => {
  return await axios.post("/users/update-form", { ...data });
};

export const useSaveForm = () => {
  return useMutation({
    mutationFn: (resData) => saveForm(resData),
  });
};


export const singleForm = async (data) => {
  return await axios.post("/users/get-single-form", { ...data });
};

export const useSingleForm = () => {
  return useMutation({
    mutationFn: (resData) => singleForm(resData),
  });
};








// export const usePostApi = () => {
//   console.log( 'usePostApi');
//   return useMutation({
//     mutationKey: 'login',
//     mutationFn: userLogin,
//     onSuccess: (res) => {
//       console.log('Response: ' , res.data)
//     }
//   });
// };

export const useGetApi = (
  key,
  queryFunction,
  options = {},
  refetchKey = ""
) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: key,
    queryFn: queryFunction,
    ...options,
    onSuccess: () => {
      queryClient.refetchQueries(refetchKey);
    },
  });
};
