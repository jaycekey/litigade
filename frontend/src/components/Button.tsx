import { openSans700 } from "@/styles/fonts";

interface Props {
  type: "primary" | "secondary" | "submit";
  text: string;
  customClassname?: string;
};

export default function Button({ type, text, customClassname }: Props) {
  const primaryClassname = "text-[#FFF] bg-[#784F33] px-9 py-3  rounded-3xl ";
  const secondaryClassname =
    "text-[#784F33] border border-[#784F33] bg-opacity-0 px-9 py-3 rounded-3xl ";
  const submitClassname =
    "text-[#FFF] py-5 my-10 border border-[#784F33] bg-[#295C7A] rounded-md";

  let selectedClassname = "";
  if (type === "primary") {
    selectedClassname = primaryClassname;
  } else if (type === "secondary") {
    selectedClassname = secondaryClassname;
  } else if (type === "submit") {
    selectedClassname = submitClassname;
  }

  return (
    <button
      className={`text-sm ${openSans700.className} ${selectedClassname} ${customClassname}`}
    >
      {text}
    </button>
  );
}
