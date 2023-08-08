import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { IPost } from "@/types";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPost: builder.query<IPost[], string>({
      query: (title) => `post?title=${title}`,
      providesTags: (result, error, post) => [{ type: "Post", id: post }],
    }),
  }),
});
