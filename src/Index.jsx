import "../global.css";
import "../global.css";
import "../src/HeroSection/assets/css/style.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Desktop } from "./screens/Desktop";
import { HeroSection } from "./HeroSection/HeroSection";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render
(<><HeroSection /><Desktop /></>
);
