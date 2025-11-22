import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

// Instagram posts - imagens e vídeos
const instagramPosts = [
  { type: "image", src: "/instagram/instagram_photo_20251122_134305.jpg" },
  { type: "video", src: "/instagram/instagram_video_20251122_134304.mp4" },
  { type: "image", src: "/instagram/instagram_photo_20251122_134320.jpg" },
  { type: "video", src: "/instagram/instagram_video_20251122_134323.mp4" },
  { type: "image", src: "/instagram/instagram_photo_20251122_134324.jpg" },
  { type: "video", src: "/instagram/instagram_video_20251122_134326.mp4" },
  { type: "image", src: "/instagram/instagram_photo_20251122_134327.jpg" },
  { type: "image", src: "/instagram/instagram_photo_20251122_134337.jpg" },
];

const InstagramPost = ({ post, index }: { post: typeof instagramPosts[0]; index: number }) => {
  return (
    <div className="flex-shrink-0 w-56 h-[320px] md:w-72 md:h-[400px] lg:w-80 lg:h-[450px] rounded-lg md:rounded-xl overflow-hidden shadow-xl md:shadow-2xl mx-2 md:mx-4 group">
      {post.type === "image" ? (
        <img
          src={post.src}
          alt={`Instagram post ${index + 1}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <video
          src={post.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          preload="metadata"
        />
      )}
    </div>
  );
};

const InstagramFeed = () => {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-background/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3 md:mb-4">
            <Instagram className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
              Educação Jurídica{" "}
              <span className="text-gradient-primary">Diária</span>
            </h2>
          </div>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Acompanhe conteúdo educativo sobre seus direitos previdenciários no Instagram
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="overflow-hidden -mx-4 md:mx-0">
            <Marquee pauseOnHover className="[--duration:40s]">
              {instagramPosts.map((post, index) => (
                <InstagramPost key={index} post={post} index={index} />
              ))}
            </Marquee>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg button-rose-premium"
            asChild
          >
            <a
              href="https://instagram.com/advdeboramacedo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Siga @advdeboramacedo
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
