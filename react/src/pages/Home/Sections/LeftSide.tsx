import { Suspense, lazy } from "react";
import InfoCard from "src/components/TextBox/InfoCard";

import useCountries from "src/hooks/useCountries";
import { DataSet1, DataSet2, DataSet3 } from "../Constants";

const Map = lazy(() => import("src/components/Map"));

const LeftSide: React.FC = () => {
  const { getCountryByValue } = useCountries();

  const location = getCountryByValue("South Korea");

  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="flex flex-col gap-3">
          <div className="mb-2">
            <h2 className="text-[13pt] font-bold">현재 사용중인 IP 위치</h2>

            <span className="text-[11pt] text-gray-600 font-semibold">
              나중에 현재 아피주소 위치 (예를들어 VPN) 넣을게요 {location?.flag}
              .
            </span>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <Map center={[37.5665, 126.978]} />
          </Suspense>
        </section>
      </div>

      <InfoCard title={"비전투자 & 투자마스터"} infoTexts={DataSet1} />
      <InfoCard title={"예시 1"} infoTexts={DataSet2} />
      <InfoCard title={"예시 2"} infoTexts={DataSet3} />
    </div>
  );
};

export default LeftSide;
