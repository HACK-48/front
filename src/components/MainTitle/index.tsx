type Props = {
    text: string, 
    color: string | null
}

export default function MainTitle({text, color}: Props) {
  const colors = ["#3A86FE", "#FB5507", "#FF006E", "#8338EB", "#FFBE0C"];

  function randNb() {
    return Math.floor(Math.random() * 4);
  }

  return (
    <div
      style={{
        borderBottom: `2px solid ${color ?? colors[randNb()]}`,
        width: "fit-content",
      }}
    >
      <h1
        className="font-link"
        style={{
          color: "black",
          fontSize: "1.5rem",
          paddingRight: "3rem",
          fontWeight: "600",
        }}
      >
        {text}
      </h1>
    </div>
  );
}
