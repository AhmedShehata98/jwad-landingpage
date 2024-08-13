import GoTopButton from "@/components/GoTopButton";
import { getFooter, getFooterSocialLinks } from "@/services/api";
import { imagePrefixPath } from "@/utils/image-path";
import Image from "next/image";

const Footer = async () => {
  const footerLayout = await getFooter();
  const footerSocialLinks = await getFooterSocialLinks();

  return (
    <footer className="flex items-center justify-between bg-[#181818] py-20">
      <div className="app-container flex items-start justify-between max-md:flex-col">
        <div>
          <Image
            src={imagePrefixPath(
              footerLayout.data.attributes.logo.data.attributes.url
            )}
            width={132}
            height={56}
            alt={
              footerLayout.data.attributes.logo.data.attributes
                .alternativeText || "logo-dark.svg"
            }
          />
          <p className="text-[#B6B7C2] text-base font-normal leading-[25px] text-right">
            {footerLayout.data.attributes.description}
          </p>
          <p className="text-[#B6B7C2] text-base font-normal leading-[25px] text-right">
            {footerLayout.data.attributes.description}
          </p>
          <ul className="flex items-center justify-start gap-3 mt-4">
            {footerSocialLinks.data.map((socialLink) => {
              return (
                <a
                  key={socialLink.id}
                  href={socialLink.attributes.social_media?.[0].href}
                  title={socialLink.attributes.social_media?.[0].label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl"
                >
                  <Image
                    src={imagePrefixPath(
                      socialLink.attributes.social_media[0].icon.data[0]
                        .attributes.url
                    )}
                    alt={
                      socialLink.attributes.social_media[0].icon.data[0]
                        .attributes.alternativeText || "social-icon.svg"
                    }
                    width={32}
                    height={32}
                  />
                </a>
              );
            })}
          </ul>
        </div>
        <div className="flex max-md:mt-6 max-md:w-full max-md:items-start">
          <GoTopButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
