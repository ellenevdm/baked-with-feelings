import { PageHeader } from "../components/layout/PageHeader";

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About Baked with Feelings"
        title="Homemade just hits different."
      />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="space-y-12">
        

          <AboutSection title="The story behind it">
            <p>
              I've struggled with mental health for most of my life. There were
              two serious dips where I could barely function. While everyone
              suggested exercise, meditation, or hobbies, I found something else
              entirely: baking.
            </p>
            <p>
              Baking became my outlet, the one thing that made me feel capable,
              proud, and genuinely better. As a child, I baked with my mom. Our
              chocolate birthday cake never looked pretty, but that was never
              the point. I learned early that what's inside, the care, the real
              ingredients, the intention, matters infinitely more than what's on
              the surface.
            </p>
            <p>
              When life got heavy, I created. I'd spend time tempering butter,
              weighing ingredients, waiting. That deliberate slowness
              transformed my anxiety into something I could taste, something
              real. My favorite moments were watching my husband's face as he
              bit into a cookie, or catching my own reflection in the oven glass
              doing a little happy dance because it actually tasted{" "}
              <em>that</em> good.
            </p>
            <p>
              After leaving a stressful job to prioritize my mental health, I
              realized I had a solution staring at me: the one thing that never
              hurt me was baking. So why not share it? Baked with Feelings
              started because I could no longer keep all this to myself, and
              because I wanted to turn that comfort into something others could
              taste.
            </p>
          </AboutSection>

          <AboutSection title="What We Believe In">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg border border-border-subtle bg-bg-card p-6">
                <h3 className="mb-3 font-heading text-lg font-bold text-text-primary">
                  Quality Over Perfection
                </h3>
                <p className="text-sm leading-6 text-text-secondary">
                  Real butter, not shortcuts. Intentional ingredients, not
                  impulse baking. Homemade is messy, imperfect, and that's
                  exactly the point. You can taste the difference.
                </p>
              </div>

              <div className="rounded-lg border border-border-subtle bg-bg-card p-6">
                <h3 className="mb-3 font-heading text-lg font-bold text-text-primary">
                  Feelings Into Creation
                </h3>
                <p className="text-sm leading-6 text-text-secondary">
                  Every batch carries intention. Frustration, joy, nostalgia,
                  mindfulness, all of it goes in. When life gets heavy, I create
                  a heavy batch with those feelings. That's what makes it real.
                </p>
              </div>

              <div className="rounded-lg border border-border-subtle bg-bg-card p-6">
                <h3 className="mb-3 font-heading text-lg font-bold text-text-primary">
                  Small Batch, Big Care
                </h3>
                <p className="text-sm leading-6 text-text-secondary">
                  We're not trying to be the biggest bakery. We're trying to be
                  the one where you can taste the difference, where each batch
                  was made with care and soul.
                </p>
              </div>
            </div>
          </AboutSection>

        

          <AboutSection title="For Our Four-Legged Family">
            <p>
              Baked with Feelings is also for the pets who run the house. I have
              four fur babies: Luna (7-year-old Pomeranian), Lily (1-year-old
              pitbull), Mr. Grey, and Tabs (3-year-old cats).
            </p>
            <p>
              I started baking treats for Luna as a puppy: healthy, gut-friendly
              chicken liver treats for her sensitive stomach. What began as a
              solution became a joy, especially when we added Lily and needed
              treats for training. Now they're part of the Baked with Feelings
              collection.
            </p>
            <p>
              Because we're animal lovers, we make pet treats with the same care
              and intention as everything else here: quality ingredients, no
              shortcuts, nothing but what's good for their guts and their
              happiness. Mr. Grey and Tabs (our pickiest eaters) even approve.
              We're still developing more options because they deserve the same
              love.
            </p>
            <p>
              <strong>
                Your fur babies deserve baking made with feelings too.
              </strong>
            </p>
            <p className="mt-4 text-sm text-text-secondary italic">
              Pet treats are made with pet-safe ingredients, and with
              the understanding that a healthy pet is a happy pet.
            </p>
          </AboutSection>

          <AboutSection title="What You Can Expect">
            <p>
              Everything is made in small homemade batches, which means
              something beautiful and honest: bakes may not look identical every
              time, and portion sizes can vary slightly. That's not a flaw.
              That's homemade.
            </p>
            <p>
              No factory-perfect clones here. Just proper comfort food made with
              care, real butter (not the substitutes), and the time it actually
              deserves.
            </p>
            <p>You can expect:</p>
            <AboutList
              items={[
                "Clear product details and ingredient information",
                "Honest allergen warnings",
                "No pretending butter is the villain",
                "Bakes made freshly (no stale 2 week old stuff)"
              ]}
            />
            <p className="mt-4 rounded-lg border-l-4 border-border-focus bg-bg-card p-5 text-text-primary shadow-sm">
              <strong>Please note:</strong> Products are made in a home kitchen
              that handles common allergens including gluten, dairy, eggs,
              peanuts, oats, and other ingredients. If you have a severe
              allergy, please read the product information carefully before
              ordering.
            </p>
          </AboutSection>

          <AboutSection title="A Note From Me">
            <p>
              Baked with Feelings is exactly what the name says. At any given
              moment, I'm feeling a lot. Sometimes it's joy. Sometimes it's
              frustration. Sometimes it's nostalgia or comfort or the need to
              process something heavy.
            </p>
            <p>
              But what makes this real is that I don't ignore those feelings
              when I bake. I channel them. I pour them in. I beat the dough with
              intention, contemplate life while watching cookies bake, and
              create something that becomes more than just food—it becomes proof
              that something good can come from hard feelings.
            </p>
            <p>
              My dream isn't to become the next big bakery. My dream is to have
              people taste comfort; whether that's the cinnamon snickerdoodles
              their grandma made, or the ones their grandma never got the chance
              to bake.
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
