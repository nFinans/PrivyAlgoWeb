import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import PaymentSuccess from "@/pages/PaymentSuccess";

function App() {
  return (
    <div className="App bg-black text-white min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/odeme-basarili" element={<PaymentSuccess />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
