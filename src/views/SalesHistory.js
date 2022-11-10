import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function SalesHistory(props) {
  return (
    <div>
      <Link to="/test">
        <Button color="primary" variant="contained">
          Nav Test
        </Button>
      </Link>
    </div>
  );
}

export default SalesHistory;
