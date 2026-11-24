import Container from "@/components/ui/Container";
import RosterGrid from "@/components/roster/RosterGrid";
import { roster } from "@/data/roster";

export default function Team() {
  return (
    <section id="team-roster" className="py-6 sm:py-8 lg:py-10">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Komandos sudėtis
        </h1>
        <div className="mt-3 h-1 w-10 rounded-full bg-[#D62835]" />
        <div className="mt-8">
          <RosterGrid players={roster} />
        </div>
      </Container>
    </section>
  );
}
