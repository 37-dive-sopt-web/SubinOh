import { useState } from "react";
import * as styles from "./InputBox.css";

import icEye from "../../assets/ic-eye.svg";
import icEyeSlash from "../../assets/ic-eye-slash.svg";

interface InputBoxProps {
  label: string;
  type: "text" | "password" | "number" | "email";
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputBox({
  label,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
}: InputBoxProps) {
  const [isShow, setIsShow] = useState(false);
  const isPasswordType = type === "password";

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {isPasswordType ? (
        <div className={styles.passwordWrapper}>
          <input
            className={styles.input}
            type={isShow ? "text" : "password"}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          <button
            type="button"
            className={styles.icon}
            onClick={() => setIsShow((pre) => !pre)}
          >
            {isShow ? (
              <img src={icEyeSlash} alt="비밀번호 숨김" />
            ) : (
              <img src={icEye} alt="비밀번호 보임" />
            )}
          </button>
        </div>
      ) : (
        <input
          className={styles.input}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
