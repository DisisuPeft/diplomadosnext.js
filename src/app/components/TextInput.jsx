import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
  { type = "text", isFocused = false, value = "", ...props },
  ref
) {
  const input = ref ? ref : useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, [isFocused]);

  return (
    <input
      {...props}
      type={type}
      value={value}
      className="bg-white border boder-2 border-gray-500 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 transition ease-in-out duration-150 w-full"
      ref={input}
    />
  );
});
