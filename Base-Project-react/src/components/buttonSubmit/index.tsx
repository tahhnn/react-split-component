type Props = {
  text: string;
};

const ButtonSubmit = ({ text }: Props) => {
  return (
    <button
      type="submit"
      className="text-white bg-[#10B981] hover:bg-[#0D7E59] focus:ring-4 mt-5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5"
    >
      {text}
    </button>
  );
};

export default ButtonSubmit;
