 import { api } from "./axios";

export const createNote = (data: { title: string; content: string }) => {
  return api.post("/post/create", data);
};

export const getNotes = () => {
  return api.get("/post/all");
};

export const getNoteById = (id: string) => {
  return api.get(`/post/${id}`);
};

export const updateNote = (id: string, data: { title: string; content: string }) => {
  return api.put(`/post/${id}`, data);
};

export const deleteNote = (id: string) => {
  return api.delete(`/post/delete/${id}`);
};
