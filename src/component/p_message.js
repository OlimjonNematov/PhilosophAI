import React, { useState, useEffect, useRef } from "react";

export default function PhilosopherMessage({
  content,
  philosopher,
  setIsMessageInProgress,
  boxColor = "#f9f9f9", // Default boxColor if not passed
  textColor,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 30;
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayedText(`${content[0] + content[1]}` || "");
    indexRef.current = 1;

    // Ensure we notify the parent that a message is in progress
    setIsMessageInProgress(true);

    const timerRef = setInterval(() => {
      if (indexRef.current < content.length - 1) {
        setDisplayedText((prev) => prev + content[indexRef.current]);
        indexRef.current += 1;
      } else {
        clearInterval(timerRef);
        // Notify the parent that the message has been fully typed
        setIsMessageInProgress(false);
      }
    }, typingSpeed);

    return () => clearInterval(timerRef);
  }, [content, setIsMessageInProgress]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: "15px 0",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {philosopher && (
        <div style={{ marginRight: "15px" }}>
          <img
            src={`${process.env.PUBLIC_URL}/${philosopher}.webp`}
            alt={`${philosopher}'s profile`}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              marginTop: 16,
            }}
          />
        </div>
      )}

      <div
        style={{
          backgroundColor: boxColor, // Use the dynamic boxColor here
          borderRadius: "12px",
          padding: "15px",
          maxWidth: "75%",
          lineHeight: "1.6",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          wordWrap: "break-word",
        }}
      >
        <div
          style={{
            marginBottom: "8px",
            textAlign: "left",
            color: textColor,
            lineHeight: 2.5,
          }}
        >
          {displayedText}
        </div>
        <div
          style={{
            fontSize: "13px",
            color: "#888",
            textAlign: "left",
            fontStyle: "italic",
          }}
        >
          {philosopher}
        </div>
      </div>
    </div>
  );
}
