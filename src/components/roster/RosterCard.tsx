import { Roster } from "@/types/roster";
import getAge from "@/lib/getAge";

type RosterCardProps = {
  player: Roster;
};

export default function RosterCard({ player }: RosterCardProps) {
  return (
    <article className="group rounded-xl border border-white/10 bg-[#1C1C1F] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/20">
      <div className="mb-5 flex items-start justify-between">
        <p className="text-5xl font-extrabold tracking-tight text-[#D62835]">
          {player.jerseyNum}
        </p>

        <span className="rounded-md bg-[#D62835]/15 px-3 py-1 text-sm font-bold text-[#E54853]">
          {player.position}
        </span>
      </div>

      <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
        {`${player.name} ${player.surname}`}
      </h3>
      <div className="mt-4 border-t border-red-500">
        <div className="grid grid-cols-3 mt-2">
          <div>
            <h4>ŪGIS</h4>
            <p>{player.height} CM</p>
          </div>
          <div>
            <h4>AMŽIUS</h4>
            <p>{getAge(player.DOB)} metai</p>
          </div>
          <div>
            <h4>GIMIMO DATA</h4>
            <p>{player.DOB}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
