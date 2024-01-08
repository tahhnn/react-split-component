type Props = {
  value: string;
  setValue: (e: any) => void;
  placeholder: string;
};

const TextArea = ({ value, setValue, placeholder }: Props) => {
  return (
    <>
      <div className="text-sm relative rounded-lg focus:ring-blue-500 focus:border-blue-500 block min-w-full sm:w-[85%] w-full min-h-[30vh] p-2.5 ">
        <textarea
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          className="border resize-none focus:outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block min-w-full sm:w-[85%] w-full min-h-[30vh] p-2.5 "
          placeholder={placeholder}
        ></textarea>

        <div className="flex items-center justify-between">
          <div className="p-1 flex items-center gap-1">
            <button className="bg-gray-200 p-2 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="14"
                viewBox="0 0 448 512"
                fill="black"
                className="fill-black"
              >
                <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" />
              </svg>
            </button>
            <p className="bg-gray-200 p-2 rounded-xl">Sửa lỗi</p>
          </div>
          <div className="">
            <p>0 / 50</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextArea;
