import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { PostGrid } from "@/components/blog/PostGrid";
import { Newsletter } from "@/components/blog/Newsletter";

export const metadata: Metadata = {
  title: "Blog — VECAI",
  description:
    "Estimating practice, product updates, and stories from teams planning real construction projects on VECAI.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogHero />
        <FeaturedPost />
        <PostGrid />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
