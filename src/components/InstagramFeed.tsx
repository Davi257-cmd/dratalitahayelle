import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";

// Instagram posts - imagens e vídeos
const instagramPosts = [
  { type: "image", src: "/instagram/572136897_18545781985027419_3990351588015008429_n.jpg" },
  { type: "video", src: "/instagram/AQMWHI_LuZyqN2EQDWpMFuL0BdgVvlvvuiSSDFTkhV5ZV6aBYHpXvVFGZdRlIrSvte-Ite_mWDKLAUzMTId_qvO29nshkB_wCf_WZNY.mp4" },
  { type: "video", src: "/instagram/AQNjR_I4wKeM7W8QrYQEBPqQ8plGxTL7eQddWEfKpYa-FNr94s_5gu7Q-Lw1E3xeI-mvzF1x_PpDER_IJkHEPKGX81vEiKjM3UrPRG0.mp4" },
  { type: "image", src: "/instagram/582090474_18550162048027419_8645523504777579545_n.jpg" },
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
              Transformações{" "}
              <span className="text-gradient-primary">Reais</span>
            </h2>
          </div>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Acompanhe histórias reais de transformação, dicas de cuidados e resultados incríveis no Instagram. Sua jornada de amor próprio começa aqui.
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
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg button-rose-premium"
            asChild
          >
            <a
              href="https://instagram.com/draantonia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Siga @draantonia
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
