import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    // ada 2 methode query dan mutation, query untuk get dan mutation untuk post, put, fetch, dan delete
    // providesTags supaya tidak harus di refresh
    getTodos: builder.query({ query: () => "todos", providesTags: ["Todos"] }),
    addTodo: builder.mutation({
      query: (todos) => ({
        url: "todos",
        method: "POST",
        body: todos,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation({
      query: (todos) => ({
        url: `todos/${todos.id}`,
        method: "PATCH",
        body: todos,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } = apiSlice;

export default apiSlice;
