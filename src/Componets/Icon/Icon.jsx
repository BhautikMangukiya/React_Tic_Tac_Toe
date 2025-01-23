import { FaPen, FaRegCircle, FaTimes } from "react-icons/fa";

// Icon component: Dynamically renders an icon based on the "name" prop
function Icon({ name }) {
  if (name == "Circle") {
    return <FaRegCircle />;
  } else if (name == "Cross") {
    return <FaTimes />;
  } else {
    <FaPen />;
  }
}

export default Icon;
