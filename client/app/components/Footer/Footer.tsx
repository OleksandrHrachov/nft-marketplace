import Link from "next/link";
import { Logo } from "../Logo";
import "./Footer.scss";
import { PageLinks } from "@/app/utils/endpoint";
import { SubscribeInput } from "./SubscribeInput";
import youtubeIcon from "../../../public/youtubeLogo.svg";
import twitterIcon from "../../../public/twitterLogo.svg";
import instagramIcon from "../../../public/instagramLogo.svg";
import Image from "next/image";
import { getSocialLinks, getSubscribe } from "./helper";

const socialLinks: { [key: string]: any } = {
  youtube: youtubeIcon as any,
  twitter: twitterIcon as any,
  instagram: instagramIcon as any,
};

export default async function Footer() {
  const subscribe = await getSubscribe();
  const socialLinksResponse = await getSocialLinks();

  return (
    <footer className="footer">
      <section className="container footer__container">
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
                  href={PageLinks.RANKINGS}
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
              <SubscribeInput
                formClass="footer__container-top-subscribe-form"
                buttonClass="footer__container-top-subscribe-button"
                inputClass="footer__container-top-subscribe-input"
              />
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
