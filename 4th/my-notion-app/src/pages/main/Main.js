import { useSelector } from "react-redux";

function Main() {
  const { members } = useSelector((state) => state.member);
  console.log("saved members: ", members);

  return (
    <h1>
      ON SOPT 27th <br /> Web Part 4th seminar
    </h1>
  );
}

export default Main;
