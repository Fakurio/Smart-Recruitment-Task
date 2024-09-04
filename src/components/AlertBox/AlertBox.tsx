import { Card } from "@mui/material";
import React from "react";

interface AlertBoxProps {
  text: string;
}

const AlertBox: React.FC<AlertBoxProps> = ({ text }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        height: 50,
        backgroundColor: "#DE3D31",
        display: "flex",
        alignItems: "center",
        padding: "2rem",
        fontSize: "1.2rem",
      }}
    >
      {text}
    </Card>
  );
};

export default AlertBox;
