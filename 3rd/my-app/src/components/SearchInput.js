import React from "react";

function SearchInput({ onSubmit }) {
  const [input, setInput] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(input);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  console.log("input", input);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Github 프로필을 검색해보세요."
        value={input}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchInput;
