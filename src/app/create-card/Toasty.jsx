import styled from "styled-components";

const defautlBackgrounds = { error: "#c92e2e", success: "#2ec948" };

const Toast = styled.div`
  position: relative;
  background-color: #30b446;
  padding: "15px";
  border-radius: "10px";
  left: 15px;
  bottom: 15px;
`;

export default function Toasty({ status, text, isOpen }) {
  return (
    <>
      {isOpen && (
        <Toast style={status === "error" && { backgroundColor: "#c92e2e" }}>
          {" "}
          {text}{" "}
        </Toast>
      )}
    </>
  );
}
