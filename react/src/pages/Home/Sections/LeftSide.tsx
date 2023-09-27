import MiniProfileDeveloper from "../Components/MiniProfileDeveloper";
import MiniProfileEntrepreneur from "../Components/MiniProfileEntrepreneur";
import { popularDevelopers, popularEntrepreneurs } from "../Constants";

const LeftSide: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 col-span-4 mb-3">
      <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="flex flex-col gap-3">
          <div className="mb-2">
            <h2 className="text-[13pt] font-bold">Developers</h2>

            <span className="text-[11pt] text-gray-600 font-semibold">
              Look thru the profiles of our developers
            </span>
          </div>

          <section className="p-1 flex flex-col gap-1">
            {popularDevelopers.map((host, index) => (
              <MiniProfileDeveloper
                key={index}
                name={host.name}
                img={host.img}
                desc={host.desc}
                hostedEvents={host.hostedEvents}
              />
            ))}
          </section>
        </section>
      </div>

      <div className="p-5 bg-gray-50 rounded-xl border-[1px] border-neutral-200">
        <section className="flex flex-col gap-3">
          <div className="mb-2">
            <h2 className="text-[13pt] font-bold">Entrepreneurs</h2>

            <span className="text-[11pt] text-gray-600 font-semibold">
              Look thru the profiles of our entrepreneurs
            </span>
          </div>

          <section className="p-1 flex flex-col gap-1">
            {popularEntrepreneurs.map((host, index) => (
              <MiniProfileEntrepreneur
                key={index}
                name={host.name}
                img={host.img}
                desc={host.desc}
                hostedEvents={host.hostedEvents}
              />
            ))}
          </section>
        </section>
      </div>
    </div>
  );
};

export default LeftSide;
