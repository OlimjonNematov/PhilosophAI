import React, { useState, useEffect, useRef } from "react";
import PhilosopherMessage from "../component/p_message";
import philosopherDetails from "../util/philosophers";
import MenuWithDropdown from "../component/dropdown-menu";

export default function PhilosophyChatbot({
  boxColor = "#242424",
  textColor = "gray",
  menuBackgroundColor,
  hoverButtonColor,
  setTheme,
  buttonColor,
}) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [selectedPhilosopher, setSelectedPhilosopher] = useState("Socrates");
  const [isMessageInProgress, setIsMessageInProgress] = useState(false);

  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === "" || isMessageInProgress) return;

    const newMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setIsMessageInProgress(true); // Lock input until the message is processed

    try {
      const response = await fetch(
        "https://ojo37r7xy4.execute-api.us-east-2.amazonaws.com/default/philosphAI",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            philosopher: selectedPhilosopher,
            message: input,
          }),
        }
      );

      const data = await response.json();
      const botReply = data.choices[0].message.content;

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botReply, sender: "bot", philosopher: selectedPhilosopher },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Sorry, something went wrong.", sender: "bot" },
      ]);
    }

    setIsMessageInProgress(false); // Unlock input
    setInput("");
  };

  if (!philosopherDetails[selectedPhilosopher]) {
    return <div>Loading...</div>; // Or handle the error case appropriately
  }

  return (
    <div
      style={{
        fontFamily: "Arial",
        display: "flex",
        margin: "0 auto",
        padding: "20px",
        height: "100vh",
        boxSizing: "border-box",
        flexDirection: "column",
      }}
    >
      {/* Chat Section */}
      <div
        style={{
          flex: 1,
          marginBottom: "20px",
          paddingRight: "20px",
        }}
      >
        {/* Dropdown Menu for Selecting Philosopher */}
        <MenuWithDropdown
          setTheme={setTheme}
          selectedPhilosopher={selectedPhilosopher}
          setSelectedPhilosopher={setSelectedPhilosopher}
          menuBackgroundColor={menuBackgroundColor}
          hoverButtonColor={hoverButtonColor}
          textColor={textColor}
          boxColor={boxColor} // Passing boxColor to the dropdown menu
          buttonColor={buttonColor} // Passing buttonColor to the dropdown menu
        />

        {/* Message Display */}
        <div
          style={{
            height: "50vh",
            overflowY: "auto",
            borderRadius: "10px",
            padding: "10px",
            marginBottom: "16px",
            marginTop: "16px",
            backgroundColor: "transparent",
            color: textColor,
          }}
        >
          {messages.map((message, index) => (
            <div key={index}>
              {message.sender === "bot" ? (
                <PhilosopherMessage
                  content={message.text}
                  philosopher={message.philosopher}
                  setIsMessageInProgress={setIsMessageInProgress}
                  boxColor={boxColor}
                  textColor={textColor}
                />
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    margin: "10px 0",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: textColor,
                      color: boxColor,
                      borderRadius: "10px",
                      padding: "10px",
                      maxWidth: "80%",
                    }}
                  >
                    {message.text}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={messageEndRef} />
        </div>

        {/* Message Input */}
        <div
          style={{
            display: "flex",
            marginTop: "10px",
            backgroundColor: boxColor,
            padding: 24,
            borderRadius: 8,
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "transparent",
              color: textColor,
              border: `1px solid ${textColor}`,
            }}
            placeholder={`Ask ${selectedPhilosopher} a philosophical question...`}
            disabled={isMessageInProgress}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            style={{
              marginLeft: "10px",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: buttonColor,
              color: textColor,
              border: `1px solid ${textColor}`,
              cursor: isMessageInProgress ? "not-allowed" : "pointer",
              opacity: isMessageInProgress ? 0.6 : 1,
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = hoverButtonColor)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = buttonColor)
            }
            disabled={isMessageInProgress}
          >
            Send
          </button>
        </div>
      </div>

      {/* Philosopher Info Panel */}
      <div
        style={{
          flex: 1,
          padding: "16px",
          textAlign: "center",
          backgroundColor: boxColor,
          borderRadius: 8,
          fontFamily: `"Georgia", "Times New Roman", serif`,
          color: textColor,
        }}
      >
        <img
          src={philosopherDetails[selectedPhilosopher].image || ""}
          alt={selectedPhilosopher}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "10px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
        <h3
          style={{
            fontSize: "24px",
            marginBottom: "10px",
          }}
        >
          {selectedPhilosopher}
        </h3>
        <p
          style={{
            textAlign: "left",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          {philosopherDetails[selectedPhilosopher].description}
        </p>
      </div>
    </div>
  );
}
