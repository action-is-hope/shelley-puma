import React from "react";
import classnames from "classnames";
import Link from "gatsby-link";
import { H2, H3, P } from "@actionishope/shelley";
import { st, classes } from "./card.st.css";

export interface CardProps extends React.HTMLAttributes<HTMLBaseElement> {
  title: string;
  media?: string;
  description?: string;
  url?: string;
  /** HTML tag to render as the root for your grid. */
  tag?: string;
  /** Designed to toggle child formatting/alignment rules. */
  formatted?: boolean;
  /** Variant index. */
  variant?: number;
}

const Card = ({
  className: classNameProp,
  children,
  variant = 1,
  tag: tagName = "div",
  title,
  description,
  media,
  onClick,
  url,
  ...rest
}: CardProps) => {
  const rootClassNames = classnames(classes.root, classNameProp);

  return (
    <li className={st(rootClassNames)}>
      {media && (
        <li className={classes.media}>
          <img src={media} alt="" />
        </li>
      )}

      <div className={classes.text}>
        <H3 className={classes.title} uppercase vol={3}>
          {url && (
            <Link className={classes.link} to={url}>
              {title}
            </Link>
          )}
          {onClick && (
            <a className={classes.link} onClick={e => onClick(e)} href="#">
              {title}
            </a>
          )}
        </H3>
        <P>{description}</P>
        {children}
      </div>
    </li>
  );
};

export default Card;

{
  /* <li class="card">
    <div class="img"><img src="images/b&amp;w1.jpeg" alt=""></div>
    <div class="text">
        <h2><a href="#card-link">A card</a></h2>
        <p>Commodo ut laborum fugiat aliqua eiusmod voluptate pariatur.</p>
        <small>By Heydon Pickering</small>
    </div>
</li> 


.card {
  border: 1px solid;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    position: relative;
}

.card:focus-within, .card:hover {
    box-shadow: 0 0 0 0.25rem;
}

.img {
      height: 6.5rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 1rem));
}

.card .text {
    padding: 1rem;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
}

.card .text > * + * {
    margin-top: 0.75rem;
}
.card p {
    max-width: 60ch;
}

.card .text > :last-child {
    margin-top: auto;
    padding-top: 0.75rem;
}

text-decoration: none;

*/
}
