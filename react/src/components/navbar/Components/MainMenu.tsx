import { BiSearch } from "react-icons/bi";

const MainMenu: React.FC = () => {
  return (
    <div className="relative ml-6">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => alert("나중에")}
          className="
       
            text-sm 
            font-semibold 
            py-1 
            px-2 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          <div className="flex flex-row items-center gap-2">
            <span>
              <BiSearch size={16} />
            </span>
            <span>검색</span>
          </div>
        </div>

        <div
          onClick={() => alert("나중에")}
          className="
        
            text-sm 
            font-semibold 
            py-1 
            px-2 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          앱 정보
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
