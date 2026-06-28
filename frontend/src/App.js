import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import PaymentSuccess from "@/pages/PaymentSuccess";
import Kvkk from "@/pages/Kvkk";
import UyelikSozlesmesi from "@/pages/UyelikSozlesmesi";
import GizlilikPolitikasi from "@/pages/GizlilikPolitikasi";

function App() {
  return (
    <div className="App bg-black text-white min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/odeme-basarili" element={<PaymentSuccess />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/kvkk-aydinlatma-metni" element={<Kvkk />} />
          <Route path="/uyelik-sozlesmesi" element={<UyelikSozlesmesi />} />
          <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
