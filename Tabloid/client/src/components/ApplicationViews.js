import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import TagList from "./tag/TagList";
import Hello from "./Hello";
import { TagCreate } from "./tag/TagCreate";
import { PostList } from "./posts/PostList";
import { PostDetail } from "./posts/PostDetail";
import { CategoryList } from "./Category/CategoryList";
import UserProfileList from "./UserProfiles/UserProfileList";
import UserProfileDetailsList from "./UserProfiles/UserProfileDetails";
<<<<<<< HEAD
import { TagEdit } from "./tag/TagEdit";
=======
import { CommentList } from "./posts/CommentList";
>>>>>>> 9275c1f2497e63bd72f39658d820cb11c9c5a655


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
          <Route path='post/:postId' element={<PostDetail />} />
          <Route path='post/:postId/comments' element={<CommentList />} />
          <Route path="tag" element={<TagList />} />
          <Route path="tag/create" element={<TagCreate />} />
          <Route path="tag/edit/:tagId" element={<TagEdit />} />
          <Route path="category" element={<CategoryList />} />
          <Route path="userProfile" element={<UserProfileList />} />
          <Route
            path="userProfile/:firebaseUserId"
            element={<UserProfileDetailsList />}
          />
          {/* <Route path="UserProfile" element={<UserProfileDetailsList />} /> */}

          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
}
