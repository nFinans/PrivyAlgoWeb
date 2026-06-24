import React, { useEffect, useRef, useState } from "react";
import { X, ShieldCheck, Sparkles } from "lucide-react";
import PaymentSuccess from "@/pages/PaymentSuccess";

const WHOP_LOADER_SRC = "https://js.whop.com/static/checkout/loader.js";
const SUCCESS_REDIRECT_PATH = "/odeme-basarili";

function ensureWhopLoader() {
  if (document.querySelector(`script[src="${WHOP_LOADER_SRC}"]`)) return;
  const s = document.createElement("script");
  s.src = WHOP_LOADER_SRC;
  s.async = true;
  s.defer = true;
  document.head.appendChild(s);
}

/**
 * Detects Whop checkout success events.
 * Whop emits postMessage events from its iframe; we listen for any payload
 * indicating a completed/successful purchase and flip into the success state.
 */
function isWhopSuccessEvent(data) {
  if (!data) return false;

  // String payloads
  if (typeof data === "string") {
    const lower = data.toLowerCase();
    return (
      lower.includes("checkout.success") ||
      lower.includes("payment.success") ||
      lower.includes("purchase.completed") ||
      lower.includes("checkout_complete") ||
      lower.includes("payment_completed")
    );
  }

  // Object payloads
  if (typeof data === "object") {
    const type = (data.type || data.event || data.name || "").toString().toLowerCase();
    const status = (data.status || data.state || "").toString().toLowerCase();
    if (
      type.includes("success") ||
      type.includes("complete") ||
      type.includes("purchase") ||
      type.includes("payment_success") ||
      type.includes("checkout.success")
    ) {
      return true;
    }
    if (
      status === "success" ||
      status === "succeeded" ||
      status === "completed" ||
      status === "paid"
    ) {
      return true;
    }
  }
  return false;
}

export default function WhopModal({ plan, onClose }) {
  const mountRef = useRef(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!plan) return undefined;

    setSuccess(false);
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    ensureWhopLoader();

    const tryProcess = () => {
      const loader = window.wco;
      if (loader && typeof loader.process === "function") {
        try {
          loader.process();
        } catch (_) {
          /* loader not yet ready */
        }
      }
    };
    const t1 = setTimeout(tryProcess, 80);
    const t2 = setTimeout(tryProcess, 400);

    // Listen to Whop's postMessage success events
    const onMsg = (event) => {
      try {
        const origin = (event.origin || "").toString();
        if (
          origin &&
          !origin.includes("whop.com") &&
          !origin.includes(window.location.host)
        ) {
          return;
        }
        if (isWhopSuccessEvent(event.data)) {
          setSuccess(true);
        }
      } catch (_) {
        /* ignore */
      }
    };
    window.addEventListener("message", onMsg);

    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("message", onMsg);
      document.body.style.overflow = "";
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [plan, onClose]);

  if (!plan) return null;

  const isBist = plan.market === "BIST";
  const isHybrid = plan.market === "HYBRID";
  const accent = isHybrid ? "#a855f7" : isBist ? "#26a69a" : "#f59e0b";
  const marketLabel = isHybrid
    ? "HYBRID · BIST + WallStreet"
    : isBist
      ? "BIST"
      : "WallStreet";

  const successRedirectUrl = `${window.location.origin}${SUCCESS_REDIRECT_PATH}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-3 md:p-6"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
      data-testid="whop-modal"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl max-h-[94vh] overflow-y-auto rounded-2xl flex flex-col"
        style={{
          background: "rgba(11,14,20,0.97)",
          border: `1px solid ${success ? "rgba(45,212,191,0.55)" : `${accent}55`}`,
          boxShadow: success
            ? "0 30px 100px rgba(0,0,0,0.7), 0 0 80px rgba(45,212,191,0.25)"
            : `0 30px 100px rgba(0,0,0,0.7), 0 0 80px ${accent}22`,
          transition: "border-color 400ms ease, box-shadow 400ms ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {success ? (
          // ====== SUCCESS STATE ======
          <div className="p-3 md:p-5" data-testid="whop-modal-success">
            <PaymentSuccess variant="card" onClose={onClose} />
          </div>
        ) : (
          // ====== CHECKOUT STATE ======
          <>
            {/* Header */}
            <div
              className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 md:px-7 py-4 border-b border-white/5 backdrop-blur-xl"
              style={{
                background: `linear-gradient(90deg, ${accent}10, transparent), rgba(11,14,20,0.95)`,
              }}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="h-9 w-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: `${accent}20`,
                    border: `1px solid ${accent}55`,
                  }}
                >
                  <ShieldCheck className="h-4 w-4" style={{ color: accent }} />
                </div>
                <div className="min-w-0">
                  <div
                    className="font-mono text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: accent }}
                  >
                    // güvenli ödeme · whop · {marketLabel}
                  </div>
                  <h3 className="mt-0.5 font-mono font-bold text-sm md:text-base text-white truncate">
                    {plan.name} ·{" "}
                    <span style={{ color: accent }}>
                      {plan.price} {plan.currency || "TL"}
                    </span>
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-md flex items-center justify-center border border-white/10 hover:border-red-400/60 hover:text-red-400 text-zinc-400 transition"
                  data-testid="whop-close-btn"
                  aria-label="Kapat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bonus banner (WS + HYBRID) */}
            {!isBist && (
              <div className="mx-5 md:mx-7 mt-5 rounded-xl border border-amber-500/25 bg-amber-500/[0.05] p-4 flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 font-bold">
                    BONUS · ÜCRETSİZ DAHİL
                  </div>
                  <div className="font-mono text-sm font-semibold text-white mt-1">
                    Opsiyon 101 Eğitim Paketi
                  </div>
                </div>
              </div>
            )}

            {/* Whop embed */}
            <div className="flex-1 overflow-auto p-5 md:p-7">
              <div
                key={plan.planId}
                ref={mountRef}
                data-whop-checkout-plan-id={plan.planId}
                data-whop-checkout-theme="dark"
                data-whop-checkout-redirect-url={successRedirectUrl}
                data-whop-checkout-success-url={successRedirectUrl}
                data-whop-checkout-on-success-url={successRedirectUrl}
                className="w-full min-h-[640px] rounded-xl overflow-hidden bg-black/40 border border-white/5"
                data-testid={`whop-embed-${plan.id}`}
              />
              <div className="text-center text-[10px] font-mono text-zinc-600 py-3 px-4">
                Ödeme sayfası yüklenemediyse pencereyi kapatıp tekrar deneyin.
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
