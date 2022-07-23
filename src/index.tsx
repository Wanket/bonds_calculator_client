import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "@/app/app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

async function prepare() {
  if (process.env.NODE_ENV === "development") {
    const pkg = await import("@/api/mock/worker");

    await pkg.worker.start();
  }
}

prepare().then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
