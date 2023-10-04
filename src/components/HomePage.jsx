import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Link to="/mylist">
        <Button sx={{ border: "1px solid blue", marginRight: "10px" }}>
          To Do List
        </Button>
      </Link>
      <Link to="/counter">
        <Button sx={{ border: "1px solid blue", marginRight: "10px" }}>
          Counter
        </Button>
      </Link>
      <Link to="/api">
        <Button sx={{ border: "1px solid blue", marginRight: "10px" }}>
          Posts
        </Button>
      </Link>
      <Link to="/themes">
        <Button sx={{ border: "1px solid blue", marginRight: "10px" }}>
          Themes
        </Button>
      </Link>
      <Link to="/random">
        <Button sx={{ border: "1px solid blue", marginRight: "10px" }}>
          Random
        </Button>
      </Link>
    </div>
  );
}
