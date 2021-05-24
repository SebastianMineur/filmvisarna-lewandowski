import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import styles from "../css/Entry.module.css";

const Entry = () => {
  const [message, setMessage] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleMenu = (e) => {
    setMessage(!message);
    setMenu(!menu);
  };

  return (
    <div className={styles.entryContainer}>
      <div className={styles.inputContainer}>
        {menu ? <Register /> : <Login />}
      </div>

      <p onClick={() => toggleMenu()} className={styles.toggleMenuText}>
        {message ? (
          <div>
            Already a member? <span className={styles.highlighted}>Log in</span>
          </div>
        ) : (
          <div>
            {/* Prettier adding the {" "} */}
            Not a member?{" "}
            <span className={styles.highlighted}>Create account</span>
          </div>
        )}
      </p>
    </div>
  );
};

export default Entry;