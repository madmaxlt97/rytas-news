import type { Roster } from "@/types/roster";
import RosterCard from "./RosterCard";

type RosterGridProps = {
  players: Roster[];
};

export default function RosterGrid({ players }: RosterGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {players.map((player) => (
        <RosterCard key={player.id} player={player} />
      ))}
    </div>
  );
}
