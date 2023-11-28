import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseAPi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Tasks"],
  endpoints: () => ({}),
});

export default baseAPi;