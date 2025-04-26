import { useMutation } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";

interface ApiError {
  message: string;
  errors: {
    [key: string]: string[];
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useSendData = <TData> ( endpoint: string , data?: unknown ) => {
    const apiClient = new APIClient<TData>(endpoint); 
    return useMutation<FetchResponse<TData>, ApiError, typeof data>({
      mutationFn: (data? ) => {
        console.log("mutate",data);
        return  apiClient.post(
          data
        );
      },
     });
  };    

export default useSendData;
