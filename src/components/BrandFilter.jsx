import "./BrandFilter.css";

function BrandFilter({ current, onChange }) {
  return (
    <div className="filter">

      <button
        className={current === "all" ? "active" : ""}
        onClick={() => onChange("all")}
      >
        Tất cả
      </button>

      <button
        className={current === "iphone" ? "active" : ""}
        onClick={() => onChange("iphone")}
      >
        iPhone
      </button>

      <button
        className={current === "samsung" ? "active" : ""}
        onClick={() => onChange("samsung")}
      >
        Samsung
      </button>

      <button
        className={current === "oppo" ? "active" : ""}
        onClick={() => onChange("oppo")}
      >
        OPPO
      </button>

      <button
        className={current === "xiaomi" ? "active" : ""}
        onClick={() => onChange("xiaomi")}
      >
        Xiaomi
      </button>

    </div>
  );
}

export default BrandFilter;
