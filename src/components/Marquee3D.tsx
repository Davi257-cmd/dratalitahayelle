import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  case: string;
  text: string;
  rating: number;
};

const ReviewCard = ({
  testimonial,
}: {
  testimonial: Testimonial;
}) => {
  return (
    <Card
      className={cn(
        "relative h-auto min-h-[240px] md:min-h-[300px] w-64 md:w-80 cursor-pointer border-2 hover:border-primary/50 smooth-transition flex-shrink-0",
        "border-border bg-card"
      )}
    >
      <CardContent className="p-4 md:p-6 flex flex-col h-full min-h-[240px] md:min-h-[300px]">
        {/* Stars */}
        <div className="flex gap-1 mb-3 md:mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent"
            />
          ))}
        </div>

        {/* Quote icon */}
        <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary/20 mb-3 md:mb-4" />

        {/* Testimonial text */}
        <p className="text-muted-foreground leading-relaxed mb-3 md:mb-4 flex-grow italic text-xs md:text-sm break-words hyphens-auto line-clamp-4 md:line-clamp-none">
          "{testimonial.text}"
        </p>

        {/* Author info */}
        <div className="flex items-center gap-3 md:gap-4 pt-3 md:pt-4 border-t border-border">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <span className="text-base md:text-lg font-semibold"><span className="text-primary-rose-premium">{testimonial.name.charAt(0)}</span></span>
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-foreground truncate text-sm md:text-base">
              {testimonial.name}
            </p>
            <p className="text-xs md:text-sm text-muted-foreground truncate">
              {testimonial.case}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export function Marquee3D({ testimonials }: { testimonials: Testimonial[] }) {
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((testimonial, index) => (
          <ReviewCard key={`${testimonial.name}-first-${index}`} testimonial={testimonial} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((testimonial, index) => (
          <ReviewCard key={`${testimonial.name}-second-${index}`} testimonial={testimonial} />
        ))}
      </Marquee>

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
