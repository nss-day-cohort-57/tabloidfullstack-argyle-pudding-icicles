import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import TagList from "./tag/TagList";
import Hello from "./Hello";
import { TagCreate } from "./tag/TagCreate";
import { PostList } from "./posts/PostList";
import { PostDetail } from "./posts/PostDetail";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route
            index
            element={isLoggedIn ? <Hello /> : <Navigate to="/login" />}
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="post" element={<PostList />} />
          <Route path="post/:postId" element={<PostDetail />} />
          <Route path="tag" element={<TagList />} />
          <Route path="tag/create" element={<TagCreate />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};
