import { Container } from "@/components/ui/Container";
import { HomeIcon, type HomeIconName } from "@/lib/home-icons";
import { type HomeValueItem } from "@/lib/home-content";

export function ValueBarSection({ items }: { items: HomeValueItem[] }) {
  if (!items.length) return null;

  return (
    <section className="bg-surface border-y border-border py-10 lg:py-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="group text-center space-y-3 px-3 py-5 rounded-xl border border-transparent bg-transparent transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.03] hover:border-border hover:bg-surface hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 transition-all duration-300 group-hover:bg-gold/20 group-hover:scale-110">
                  <HomeIcon
                    name={item.icon as HomeIconName}
                    size={28}
                    className="text-gold transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="text-sm font-bold text-navy leading-snug transition-colors duration-300 group-hover:text-gold-dark">
                {item.title}
              </h3>
              <p className="text-xs text-text-body leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
