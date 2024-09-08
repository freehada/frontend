export default function TextChecbox() {
  return (
    <div className="checkbox-wrapper-46 flex items-center">
      <input type="checkbox" id="cbx-46" className="hidden inp-cbx" />
      <label htmlFor="cbx-46" className="cbx flex items-center cursor-pointer select-none">
        <span className="relative w-[24px] h-[24px] border border-gray-400 rounded transition-all duration-200 flex justify-center items-center">
          <img
            src="/icons/warning/SquareG24.png"
            alt="unchecked icon"
            className="absolute w-full h-full transition-opacity duration-300 ease-in-out checked:hidden"
          />
          <img
            src="/icons/warning/Square_CheckB24.png"
            alt="checked icon"
            className="absolute w-full h-full opacity-0 transition-opacity duration-300 ease-in-out"
          />
          <svg
            className="absolute w-full h-full top-[4px] left-[2px] stroke-current stroke-2 transition-all duration-300 ease-in-out hidden"
            viewBox="0 0 12 10"
          >
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span className="pl-2">Checkbox</span>
      </label>
    </div>
  );
}
