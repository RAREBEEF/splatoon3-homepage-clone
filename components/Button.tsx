import { ReactNode } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  bgColor: [string, string];
  textColor?: [string, string];
  borderColor?: string;
}
/**
 *@param children - ReactNode
 *@param bgColor - [colorFrom, colorTo]
 *@param textColor - [colorFrom, colorTo]
 *@param borderColor - color
 */
const Button: React.FC<Props> = ({
  children,
  bgColor,
  textColor = ["black", "black"],
  borderColor = "",
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        "relative font-sans text-2xl w-full"
      )}
    >
      <div
        className={`absolute flex items-center justify-center py-1 px-2 w-full rounded-lg border-[3px] border-solid ${
          bgColor[0] === "neonGreen"
            ? "bg-neonGreen border-neonGreen"
            : bgColor[0] === "purple"
            ? "bg-purple border-purple"
            : bgColor[0] === "morePurple"
            ? "bg-morePurple border-morePurple"
            : bgColor[0] === "orange"
            ? "bg-orange border-orange"
            : bgColor[0] === "twitter"
            ? "bg-twitter border-twitter"
            : bgColor[0] === "white"
            ? "bg-white border-white"
            : "bg-black border-black"
        }
        ${
          textColor[0] === "white"
            ? "text-white"
            : textColor[0] === "twitter"
            ? "text-twitter"
            : textColor[0] === "neonGreen"
            ? "text-neonGreen"
            : textColor[0] === "purple"
            ? "text-purple"
            : "text-black"
        }
        `}
      >
        <span className="pb-2 mr-2 w-fit">{children}</span>
        <span className="w-[10px]">
          <svg aria-hidden="true" role="img" viewBox="0 0 7 12">
            <path
              d="M0,11.23.12,11l.32-.47.3-.12-.16-.35.18-.49.4-.21L1.09,9l.23-.35.26-.21.32-.21L2,7.84l.2-.38v-.3l.47-.47-.05-.38L3,6.08l-.19-.77,0-.26-.26-.3-.1-.31-.42-.25,0-.38-.32-.23L1.5,3.25l0-.32-.05-.26L1,2.37.94,2,.66,1.76.51,1.41.23,1.08.3.66.14.41,0,.13l.7,0L1,.08l.14.14L1.68,0,2,.12,2.21,0l.66.21.26,0h.42l.33.14L4.3.69l0,.38.29.27.14.4L5,2l.07.37,0,.14L5.48,3l.07.09.42.3.1.33L6,4.07l.24.33.42.25,0,.35.1.4.16.47-.11.42-.21.33L6.41,7,6.2,7.2,6,7.6,6,7.93l-.28.31-.3.3,0,.19-.16.37L5,9.43l-.18.14-.23.33-.21.38.09.42-.3.33,0,.18-.66.24-.39.1-.52.09,0-.09-.5-.09-.46.07-.26.09-.4,0-.39-.07-.45.17L0,11.23Z"
              stroke="none"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </div>

      <div
        className={`relative flex items-center justify-center py-1 px-2 rounded-lg border-[3px] border-solid transition-all delay-500 hover:delay-300 ${
          bgColor[1] === "neonGreen"
            ? "bg-neonGreen border-neonGreen"
            : bgColor[1] === "purple"
            ? "bg-purple border-purple"
            : bgColor[1] === "morePurple"
            ? "bg-morePurple border-morePurple"
            : bgColor[1] === "orange"
            ? "bg-orange border-orange"
            : bgColor[1] === "twitter"
            ? "bg-twitter border-twitter"
            : bgColor[1] === "white"
            ? "bg-white border-white"
            : "bg-black border-black"
        }
        ${
          textColor[1] === "white"
            ? "text-white"
            : textColor[1] === "twitter"
            ? "text-twitter"
            : textColor[1] === "neonGreen"
            ? "text-neonGreen"
            : textColor[1] === "purple"
            ? "text-purple"
            : "text-black"
        }
        ${
          borderColor === "neonGreen"
            ? "hover:border-neonGreen"
            : borderColor === "purple"
            ? "hover:border-purple"
            : borderColor === "white"
            ? "hover:border-white"
            : borderColor === "black"
            ? "hover:border-black"
            : borderColor === "twitter"
            ? "hover:border-twitter"
            : "hover:black"
        }`}
      >
        <span className="pb-2 mr-2">{children}</span>
        <div className="w-[10px]">
          <svg aria-hidden="true" role="img" viewBox="0 0 7 12">
            <path
              d="M0,11.23.12,11l.32-.47.3-.12-.16-.35.18-.49.4-.21L1.09,9l.23-.35.26-.21.32-.21L2,7.84l.2-.38v-.3l.47-.47-.05-.38L3,6.08l-.19-.77,0-.26-.26-.3-.1-.31-.42-.25,0-.38-.32-.23L1.5,3.25l0-.32-.05-.26L1,2.37.94,2,.66,1.76.51,1.41.23,1.08.3.66.14.41,0,.13l.7,0L1,.08l.14.14L1.68,0,2,.12,2.21,0l.66.21.26,0h.42l.33.14L4.3.69l0,.38.29.27.14.4L5,2l.07.37,0,.14L5.48,3l.07.09.42.3.1.33L6,4.07l.24.33.42.25,0,.35.1.4.16.47-.11.42-.21.33L6.41,7,6.2,7.2,6,7.6,6,7.93l-.28.31-.3.3,0,.19-.16.37L5,9.43l-.18.14-.23.33-.21.38.09.42-.3.33,0,.18-.66.24-.39.1-.52.09,0-.09-.5-.09-.46.07-.26.09-.4,0-.39-.07-.45.17L0,11.23Z"
              stroke="none"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </button>
  );
};

export default Button;
