import Link from "next/link";
import { Logo } from "../Logo";
import "./Footer.scss";
import { PageLinks } from "@/app/utils/endpoint";
import { SubscribeInput } from "../SubscribeInput";
import youtubeIcon from "../../../public/youtubeLogo.svg";
import twitterIcon from "../../../public/twitterLogo.svg";
import instagramIcon from "../../../public/instagramLogo.svg";
import { ISocialLink, ISudscribe } from "@/app/types";
import Image from "next/image";

import { gql } from "@apollo/client";
import { getClient } from "@/app/libs/client";

const socialLinks: { [key: string]: any } = {
  youtube: youtubeIcon as any,
  twitter: twitterIcon as any,
  instagram: instagramIcon as any,
};

export async function getSubscribe(): Promise<ISudscribe> {
  const query = gql`
    query {
      subscribe {
        imgUrl
        title
        description
      }
    }
  `;

  const subscribe = await getClient()
    .query<{ subscribe: ISudscribe[] }>({
      query,
    })
    .then((res) => res.data.subscribe[0])
    .catch((e) => {
      console.log("ERROR home-subscribe-route =>", e);
      return {
        imgUrl: "",
        title: "",
        description: "",
      };
    });

  return subscribe;
}

export async function getSocialLinks(): Promise<ISocialLink[]> {
  const query = gql`
    query {
      socialLinks {
        name
        url
      }
    }
  `;

  const socialLinks = await getClient()
    .query<{ socialLinks: ISocialLink[] }>({
      query,
    })
    .then((res) => res.data.socialLinks)
    .catch((e) => {
      console.log("ERROR footer-route =>", e);
      return [];
    });

  return socialLinks;
}

export default async function Footer() {
  const subscribe = await getSubscribe();
  const socialLinksResponse = await getSocialLinks();

  return (
    <footer className="footer">
      <section className="footer__container">
        <div className="footer__container-inner">
          <div className="footer__container-top">
            <div className="footer__container-top-info">
              <div className="footer__container-top-info-logo">
                <Logo />
              </div>
              <p className="footer__container-top-info-description">
                NFT marketplace UI created with Anima for Figma.
              </p>
              <div className="footer__container-top-info-social-links">
                <p className="footer__container-top-info-social-links-title">
                  Join our community
                </p>
                <div className="footer__container-top-info-social-links-icons">
                  {socialLinksResponse.length &&
                    socialLinksResponse.map((link) => {
                      return (
                        <Link
                          className="footer__container-top-info-social-links-icon"
                          key={link.url}
                          href={link.url}
                          target="_blank"
                        >
                          <Image
                            src={socialLinks[link.name]}
                            alt={link.name}
                            width={32}
                            height={32}
                          />
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="footer__container-top-explore">
              <h5 className="footer__container-top-explore-title">Explore</h5>
              <div className="footer__container-top-explore-links-wrapper">
                <Link
                  href={PageLinks.MARKETPLACE}
                  className="footer__container-top-explore-link"
                >
                  Marketplace
                </Link>
                <Link
                  href={PageLinks.RUNKINGS}
                  className="footer__container-top-explore-link"
                >
                  Rankings
                </Link>
                <Link
                  href={PageLinks.WALLET}
                  className="footer__container-top-explore-link"
                >
                  Connect a wallet
                </Link>
              </div>
            </div>

            <div className="footer__container-top-subscribe">
              <h3 className="footer__container-top-subscribe-title">
                {subscribe.title}
              </h3>
              <p className="footer__container-top-subscribe-description">
                {subscribe.description}
              </p>
              <SubscribeInput buttonClass="my-button" />
            </div>
          </div>
        </div>
        <p className="footer__container-bottom">
          &#169; NFT Market. Use this template freely.
        </p>
      </section>
    </footer>
  );
}
