import { Award } from "lucide-react";
import teamPhoto from "@/assets/team-photo.png";

const TeamPhoto = () => {
  return (
    <section className="py-8 lg:py-12 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            <Award className="w-4 h-4 inline mr-1.5" />
            Award-Winning Team
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-3">
            Meet the Team Behind Your Success
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experienced advisors combine deep market knowledge with a genuine
            commitment to your financial goals and Koala conservation.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={teamPhoto}
              alt="Koala Invest advisory team"
              className="w-full aspect-[21/9] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPhoto;
