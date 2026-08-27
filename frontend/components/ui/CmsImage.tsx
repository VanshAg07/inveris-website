import Image, { type ImageProps } from "next/image";
import { resolveMediaUrl } from "@/lib/home-content";

type CmsImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

export function CmsImage({ src, alt, ...props }: CmsImageProps) {
  const resolved = resolveMediaUrl(src);
  if (!resolved) return null;

  const isRemote = resolved.startsWith("http://") || resolved.startsWith("https://");

  return (
    <Image
      src={resolved}
      alt={alt}
      {...props}
      unoptimized={isRemote}
    />
  );
}
