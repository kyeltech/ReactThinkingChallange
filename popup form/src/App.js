import React from "react";
import "./styles.css";

const styles = {
  dialogBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)"
  },
  dialogContainer: {
    background: "white",
    borderRadius: 5,
    margin: 50,
    padding: 16,
    minHeight: 150,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  app: { width: "100%", height: "100%" }
};

export default function App() {
  const [dialogVisible, setDialogVisible] = React.useState(false);
  const dialog = (
    <div style={styles.dialogBackdrop}>
      <div style={styles.dialogContainer}>
        <div>Dialog content</div>
        <button
          onClick={() => {
            setDialogVisible(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
  return (
    <div style={styles.app}>
      <div>some content on the main ui</div>
      <button
        onClick={() => {
          setDialogVisible(true);
        }}
      >
        Show dialog
      </button>
      {dialogVisible && dialog}
    </div>
  );
}
