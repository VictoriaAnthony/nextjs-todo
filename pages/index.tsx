import { useState, useEffect } from "react";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Next.js Todo</h1>
      <TodoList />
    </div>
  );
}
