import { SITE_META } from "../lib/constants";

export default function Footer(params) {
  return (
    <>
      <footer>
        <ul>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
        <p
          dangerouslySetInnerHTML={{
            __html: `Copyright &copy; ${new Date().getFullYear()} ${
              SITE_META.NAME
            }`,
          }}
        />
      </footer>
    </>
  );
}
