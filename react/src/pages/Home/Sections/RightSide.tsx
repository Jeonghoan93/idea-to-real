import { formatDate } from "../../../utils/formatDate";
const RightSide: React.FC = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 bg-gray-50 rounded-xl border-[1px] border-neutral-200 overflow-hidden p-6">
        <div className="text-[14pt] flex flex-row items-center gap-1 mb-3">
          <span className="text-[13pt] text-neutral-500 font-bold">
            현재까지 사이트 & 유저 데이터 갯수
          </span>
        </div>

        <section className="flex flex-col gap-4 items-center">
          <div className="w-full flex flex-row items-center justify-between">
            <span className="font-bold">사이트:</span>
            <span>0</span>
          </div>
          <div className="w-full flex flex-row items-center justify-between">
            <span className="font-bold">유저 데이터:</span>
            <span>0</span>
          </div>
        </section>
      </div>

      <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="flex flex-col gap-3">
          <div className="my-2">
            <h2 className="text-[13pt] font-bold mb-2">
              오늘 들어온 데이터 갯수
            </h2>
            <span className="text-[11pt] text-gray-600 font-semibold">
              {formatDate(new Date(), {
                full: true,
              })}
            </span>
          </div>

          <hr />

          <div className="my-2">
            <h2 className="text-[13pt] font-bold mb-4">총합</h2>

            <section className="flex flex-col gap-2">
              <div className="flex flex-row justify-between w-full">
                <span className="text-[11pt] text-gray-900 font-semibold">
                  테이블:
                </span>
                <span className="text-[11pt] text-gray-600 font-normal">0</span>
              </div>

              <div className="flex flex-row justify-between w-full">
                <span className="text-[11pt] text-gray-900 font-semibold">
                  개별:
                </span>
                <span className="text-[11pt] text-gray-600 font-normal">0</span>
              </div>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};

export default RightSide;
