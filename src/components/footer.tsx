import Image from 'next/image';

import s from '@/styles/footer.module.css';

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <a href="https://rs.school/">
        <Image
          src="/rs_school_js.svg"
          alt="RS-School logo"
          height={60}
          width={180}
          className="logo"
          priority
        />
      </a>
      <p>&copy; {date}</p>
      <a href="https://github.com/Sepulator/">
        <Image
          src="/github.svg"
          alt="Github logo"
          width={60}
          height={60}
          className="logo"
        />
      </a>
    </footer>
  );
}
