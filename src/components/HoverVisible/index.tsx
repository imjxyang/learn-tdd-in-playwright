import { useState } from "react";

export function HoverVisible() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <h3>Hover & Visible</h3>

      <div>
        <span
          data-testid="show-menu"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
          style={{ cursor: "pointer" }}
        >
          Show Menu
        </span>
        {showMenu && <div data-testid="menu">Menu</div>}
      </div>
    </>
  );
}
