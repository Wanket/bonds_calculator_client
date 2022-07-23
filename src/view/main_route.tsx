import HomePage from "@/page/home_page";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SearchPage from "@/page/search_page";
import { ReactNode } from "react";

export default function MainRoute(props: { children?: ReactNode }) {
  return (
    <BrowserRouter>
      {props.children}
      <Routes>
        <Route path="/" element={<Navigate to="/page/home" />} />
        <Route path="/page/home" element={<HomePage />} />
        <Route path="/page/search/:query" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
