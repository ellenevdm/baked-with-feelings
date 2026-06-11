import { PageHeader } from "../components/layout/PageHeader";

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About Baked with Feelings"
        title="Homemade just hits different."
      >
        <div className="space-y-5 rounded-lg border border-border-subtle bg-bg-card p-6 text-base leading-7 text-text-secondary shadow-sm md:p-8">
          <p>
            Baked with Feelings is a small home bakery built around comfort
            food, real ingredients, and the kind of bakes that make you pause
            for a second and go, “Okay wait, that’s actually really good.”
          </p>
          <p>
            This is not a low-calorie, sugar-free, protein-powder-in-disguise
            situation.
          </p>
          <div className="grid gap-3 text-text-primary sm:grid-cols-3">
            <p className="rounded-lg bg-bg-elevated p-4 font-heading text-xl">
              Real butter.
            </p>
            <p className="rounded-lg bg-bg-elevated p-4 font-heading text-xl">
              Real sugar.
            </p>
            <p className="rounded-lg bg-bg-elevated p-4 font-heading text-xl">
              Real comfort.
            </p>
          </div>
          <p>
            Real homemade bakes made by a real person in a very real kitchen
            that probably used too many bowls.
          </p>
        </div>
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="space-y-12">
          <AboutSection title="The story behind it">
            <p>
              Baked with Feelings started because baking became one of the few
              things that made sense when life felt heavy.
            </p>
            <p>
              There is something grounding about measuring ingredients, mixing
              dough, waiting for the oven timer, and creating something that can
              make someone else’s day a little softer. It is practical, messy,
              comforting, and occasionally chaotic; which honestly feels very
              on-brand.
            </p>
            <p>
              This business is about turning that comfort into something
              shareable.
            </p>
            <p>
              Not perfect factory bakes. Not polished, soulless desserts. Just
              homemade food with warmth, personality, and a bit of emotional
              support energy.
            </p>
          </AboutSection>

          <AboutSection title="What I make">
            <p>
              Baked with Feelings focuses on comforting homemade bakes like
              cookies, brownies, crunchies, puddings, tarts, and other
              feel-good treats.
            </p>
            <p>
              The first launch menu is intentionally small, because I would
              rather make a few things properly than pretend I am a full bakery
              machine running on caffeine and denial.
            </p>
            <p>You can expect things like:</p>
            <AboutList
              items={[
                "soft cinnamon-sugar cookies",
                "peanut butter oatmeal cookies",
                "chocolate chip cookies",
                "buttery shortbread",
                "oatmeal crunchies",
                "rich comfort bakes",
                "homemade dog treats",
              ]}
            />
            <p>More products will be added as recipes are tested properly.</p>
          </AboutSection>

          <AboutSection title="For humans and pets">
            <p>
              Baked with Feelings is for people who want proper homemade treats,
              but it is also for the pets who run the house and pretend they
              don’t.
            </p>
            <p>
              The pet range is made for dogs and cats using pet-safe recipe
              ideas, with clear ingredient information listed where needed.
              Because pets are family, and honestly, some of them have better
              manners than people.
            </p>
          </AboutSection>

          <AboutSection title="What you can expect">
            <p>Everything is made in small homemade batches.</p>
            <p>
              That means bakes may not look identical every time, and portion
              sizes can vary slightly. That is part of handmade baking. No
              factory-perfect clones here; just proper comfort food made with
              care.
            </p>
            <p>You can expect:</p>
            <AboutList
              items={[
                "clear product details",
                "ingredient and allergen information",
                "honest lead times",
                "no custom “make it healthy” recipe changes",
                "no pretending butter is the villain",
                "small-batch homemade bakes with personality",
              ]}
            />
            <p className="rounded-lg border-l-4 border-border-focus bg-bg-card p-5 text-text-primary shadow-sm">
              Please note that products are made in a home kitchen that handles
              common allergens such as gluten, dairy, eggs, peanuts, oats, and
              other ingredients. If you have a severe allergy, please read the
              product information carefully before ordering.
            </p>
          </AboutSection>

          <AboutSection title="A small note from me">
            <p>Baked with Feelings is exactly what the name says.</p>
            <p>
              Some things are baked for joy. Some things are baked for comfort.
              Some things are baked because the day was terrible and sugar
              understood the assignment.
            </p>
            <p>
              Whatever the reason, I hope these bakes feel like something
              familiar, warm, and worth treating yourself to.
            </p>
            <p className="font-script text-3xl leading-tight text-text-brand">
              Because homemade just hits different.
            </p>
          </AboutSection>
        </div>
      </section>
    </div>
  );
}

function AboutSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-heading text-3xl font-bold text-text-primary">
        {title}
      </h2>
      <div className="space-y-4 text-base leading-7 text-text-secondary">
        {children}
      </div>
    </section>
  );
}

function AboutList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-lg border border-border-subtle bg-bg-card px-4 py-3 text-sm font-medium text-text-primary shadow-sm"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
