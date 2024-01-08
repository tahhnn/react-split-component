type Props = {
  text: string;
  isCardVisible: boolean;
  handlePaymentTypeChange: () => void;
};

const Button = ({ text, isCardVisible, handlePaymentTypeChange }: Props) => {
  return (
    <button
      className={`relative flex-1 text-sm font-medium p-2 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 ${
        isCardVisible
          ? "bg-[#10B981] text-white rounded-[5px] hover:bg-[#0D7E59]"
          : "border-2 border-[#D0D0D0] rounded-[5px] text-gray-400"
      }`}
      onClick={handlePaymentTypeChange}
    >
      {text}
    </button>
  );
};

export default Button;
