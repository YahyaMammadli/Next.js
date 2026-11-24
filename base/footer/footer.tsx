import Link from "next/link";

const about = ["Menu", "Features", "News & Blogs", "Help & Supports"];
const company = ["How we work", "Terms of service", "Pricing", "FAQ"];
const socials = ["Facebook", "Instagram", "YouTube", "Twitter"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#4a2a0b] px-10 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[2fr_1fr_1fr_1.5fr]">
        <div>
          <p className="font-logo text-5xl">Bean Scene</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="mt-6 flex gap-4 text-sm">
            {socials.map((s) => (
              <Link key={s} href="#" aria-label={s} className="hover:text-accent">
                {s}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-playfair text-2xl font-bold">About</h4>
          <ul className="mt-8 space-y-4">
            {about.map((l) => (
              <li key={l}>
                <Link href="#" className="hover:text-accent">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-playfair text-2xl font-bold">Company</h4>
          <ul className="mt-8 space-y-4">
            {company.map((l) => (
              <li key={l}>
                <Link href="#" className="hover:text-accent">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-playfair text-2xl font-bold">Contact Us</h4>
          <div className="mt-8 space-y-5">
            <p>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
            <p>+1 202-918-2132</p>
            <p>beanscene@mail.com</p>
            <p>www.beanscene.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
