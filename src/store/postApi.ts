import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { IPost } from "@/types";
import { API_URL } from "@/constants/api-url";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api/`,
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPost: builder.query<IPost[], string>({
      query: (title) => `post?title=${title}`,
      providesTags: (result, error, post) => [{ type: "Post", id: post }],
    }),
  }),
});
