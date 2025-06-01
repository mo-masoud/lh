import { client } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";
import { InferResponseType } from "hono";

type ResponseType = InferResponseType<typeof client.api.auth.signup['$post']>;
type RequestType = InferResponseType<typeof client.api.auth.signup['$post']>;

export const useSignUp = () => {
    return useMutation<ResponseType, Error, RequestType>({
        mutationFn: async (json) => {
            const response = await client.api.auth.signup.$post({json});
            return await response.json();
        },
        onError: (error) => {
            console.error("Sign up failed:", error);
            throw error; // Re-throw the error to be handled by the component
        },
    }); 
};