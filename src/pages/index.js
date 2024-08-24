import React, { useState, useEffect, useRef } from "react";
import PhilosopherMessage from "../component/p_message";

export default function PhilosophyChatbot({
  boxColor = "#242424",
  textColor = "gray",
}) {
  const [messages, setMessages] = useState([]); // Start with an empty array
  const [input, setInput] = useState("");
  const [selectedPhilosopher, setSelectedPhilosopher] = useState("Socrates");
  const [isMessageInProgress, setIsMessageInProgress] = useState(false); // Track if a message is being typed

  const philosophers = ["Socrates", "Aristotle", "Kant", "Nietzsche", "Sartre"];

  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === "" || isMessageInProgress) return; // Disable input if a message is in progress

    const newMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

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

    setInput("");
  };

  const philosopherDetails = {
    Socrates: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Socrate_du_Louvre.jpg/220px-Socrate_du_Louvre.jpg",
      description:
        "Socrates, born in Athens around 470 BCE, was a classical Greek philosopher renowned for his method of questioning and dialogue, now known as the Socratic method. Despite his humble origins as a stone mason, he became one of the most influential thinkers in Western history. Socrates believed that the pursuit of knowledge and self-awareness were the greatest virtues, often challenging the moral and philosophical beliefs of his time. His relentless questioning ultimately led to his trial and execution for corrupting the youth of Athens and impiety. His legacy shaped the foundation of Western philosophy, influencing figures like Plato and Aristotle, and promoting the idea that wisdom begins with recognizing one's own ignorance.",
    },
    Aristotle: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/220px-Aristotle_Altemps_Inv8575.jpg",
      description:
        "Aristotle, born in 384 BCE in Stagira, Greece, was a student of Plato and later became the tutor of Alexander the Great. His personal life was marked by his travels and studies across Greece and Macedonia. Aristotle’s worldview centered on empiricism, believing that knowledge comes from sensory experience and observation. His contributions to a wide array of fields, including biology, ethics, politics, and metaphysics, made him a towering figure in Western intellectual history. Aristotle's legacy is vast; his works influenced medieval scholars, the Renaissance, and the Enlightenment. His ideas on logic and scientific inquiry are still studied and respected today, forming the basis for much of modern Western thought.",
    },
    Kant: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Immanuel_Kant_-_Gemaelde_1.jpg/220px-Immanuel_Kant_-_Gemaelde_1.jpg",
      description:
        "Immanuel Kant, born in 1724 in Königsberg, Prussia, led a disciplined and reclusive life, never straying far from his hometown. His worldview, developed in his 'Critique of Pure Reason,' revolutionized philosophy by arguing that human perception shapes reality as much as reality shapes perception. Kant believed in the primacy of duty and morality, asserting that ethical actions should be guided by reason and not emotions, famously introducing the 'categorical imperative.' His legacy as one of the greatest philosophers of modern times endures, as his ideas about ethics, epistemology, and metaphysics continue to influence contemporary thought.",
    },
    Nietzsche: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/220px-Nietzsche187a.jpg",
      description:
        "Friedrich Nietzsche, born in 1844 in Röcken, Germany, lived a tumultuous life marked by ill health, isolation, and philosophical rebellion. His worldview centered on the concepts of individualism, the 'will to power,' and the critique of traditional morality, famously declaring that 'God is dead.' Nietzsche’s philosophy questioned the foundations of religion, morality, and society, advocating for the emergence of the 'Übermensch,' a superior individual who transcends societal norms. Despite suffering from mental illness in his later years, Nietzsche’s legacy endures as a profound, often controversial thinker whose ideas have influenced existentialism, postmodernism, and 20th-century thought.",
    },
    Sartre: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sartre_1967_crop.jpg/220px-Sartre_1967_crop.jpg",
      description:
        "Jean-Paul Sartre, born in 1905 in Paris, France, was a novelist, playwright, and leading existentialist philosopher. Sartre’s personal life was closely intertwined with his lifelong partner, the philosopher Simone de Beauvoir, with whom he explored ideas of freedom, responsibility, and human existence. Sartre believed that existence precedes essence, meaning that individuals are free to define their own nature through their actions. His legacy is inseparable from his commitment to political engagement, existentialist philosophy, and his influence on existentialist thought, shaping discussions on freedom, alienation, and the human condition throughout the 20th century.",
    },
  };

  return (
    <div
      style={{
        fontFamily: "Arial",
        display: "flex",
        margin: "0 auto",
        padding: "20px",
        height: "100vh",
        boxSizing: "border-box",
        flexDirection: "column", // Default to column direction for mobile
      }}
    >
      {/* Left Panel: Chat Section */}
      <div
        style={{
          flex: 1,
          marginBottom: "20px", // Add margin for spacing between columns on mobile
          paddingRight: "20px",
        }}
      >
        <h2 style={{ color: textColor }}>PhilosopAI</h2>

        <div
          style={{
            marginBottom: "10px",
            backgroundColor: boxColor,
            borderRadius: 8,
            padding: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap", // Allow buttons to wrap for smaller screens
            }}
          >
            {philosophers.map((philosopher) => (
              <button
                key={philosopher}
                onClick={() => setSelectedPhilosopher(philosopher)}
                style={{
                  padding: "10px 15px",
                  borderRadius: "12px",
                  backgroundColor:
                    selectedPhilosopher === philosopher
                      ? "white"
                      : "rgba(0, 0, 0, 0.05)",
                  border:
                    selectedPhilosopher === philosopher
                      ? `1px solid black`
                      : `2px solid gray`,
                  color: selectedPhilosopher === philosopher ? "black" : "gray",
                  cursor: "pointer",
                  transition:
                    "border-color 0.3s, color 0.3s, background-color 0.3s",
                  boxShadow:
                    selectedPhilosopher === philosopher
                      ? `0px 0px 10px ${textColor}`
                      : "none",
                  marginBottom: "10px", // Add margin for better spacing on mobile
                }}
              >
                {philosopher}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            height: "50vh", // Adjust height for mobile
            overflowY: "auto",
            borderRadius: "10px",
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: boxColor,
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
              backgroundColor: textColor,
              color: boxColor,
              border: `1px solid ${textColor}`,
            }}
            disabled={isMessageInProgress}
          >
            Send
          </button>
        </div>
      </div>

      {/* Right Panel: Philosopher Info */}
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
          src={philosopherDetails[selectedPhilosopher].image}
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
