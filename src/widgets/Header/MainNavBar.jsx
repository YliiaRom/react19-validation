import { frontRoutes } from "@/shared/api/config/routes/frontRoutes.js";
import { NavLink } from "react-router-dom";

function MainNavBar() {
  return (
    <ul className="mainNavBar">
      {Object.values(frontRoutes.pages).map((page, index) => (
        <li key={`${page.meta.title}${index}`}>
          <NavLink to={page.navigationPath}>{page.meta.title}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default MainNavBar;
