import {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { loginApi } from "@/features/login-form/api";
import { useRouter } from "next/navigation";

type ResponseError = AxiosError<{
  statusCode: number;
  message: string;
  error: string;
}>;

type UseMutationCustomOptions<TData = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<TData, ResponseError, TVariables, unknown>,
  "mutationFn"
>;

type UseQueryCustomOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, ResponseError, TData, QueryKey>,
  "queryKey"
>;

function useLoginMutation(mutationOptions?: UseMutationCustomOptions) {
  const router = useRouter();

  return useMutation({
    mutationFn: loginApi,
    onSuccess: ({ accessToken, username }) => {
      console.log(accessToken, username);
      router.replace("/workspace");
    },
    onSettled: () => {
      /**
       * // 자동 로그인이 됐을 경우 useGetRefreshToken 로직이 실행될 수 있도록
       *       queryClient.refetchQueries({
       *         queryKey: ['auth', 'getAccessToken'],
       *       });
       *       // 프로필 데이터 초기화
       *       queryClient.invalidateQueries({
       *         queryKey: ['auth', 'getProfile'],
       *       });
       */
    },
    ...mutationOptions,
  });
}
export { useLoginMutation };
