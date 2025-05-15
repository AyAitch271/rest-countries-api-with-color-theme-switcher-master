import { Link } from "react-router-dom";

export const CountryDetails = ({ details }) => {
  return (
    <dl>
      {details.map(({ label, value, link }, index) => (
        <dl className="flex gap-3" key={index}>
          <dt className="font-semibold">{label}:</dt>
          <dd>
            {link ? (
              <Link className="underline" to={link}>
                {value}
              </Link>
            ) : (
              value
            )}
          </dd>
        </dl>
      ))}
    </dl>
  )
};