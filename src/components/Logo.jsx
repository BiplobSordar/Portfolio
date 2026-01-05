import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";


const Logo = ({ className, title, subtitle }) => {
  return (
    <div className="text-2xl group">
        
      <Link to="/">
        <h2
          className={cn(
            "font-bold text-2xl hover:text-hoverColor hoverEffect",
            className
          )}
        >
          {title}{" "}
          <span className="text-lightSky group-hover:text-white hoverEffect">
            {subtitle}
          </span>
        </h2>
      </Link>
    </div>
  );
};

export default Logo;