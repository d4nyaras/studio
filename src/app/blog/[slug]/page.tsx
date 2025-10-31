import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts, type Post } from '@/lib/blog-posts';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

function getPost(slug: string): Post | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow py-12 md:py-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <header className="mb-8">
            <Link href="/blog" className="text-primary hover:underline text-sm mb-4 block">&larr; بازگشت به وبلاگ</Link>
            <h1 className="font-headline text-4xl md:text-5xl font-bold !leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 space-x-reverse text-muted-foreground">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>ت</AvatarFallback>
                </Avatar>
                <span>{post.author}</span>
              </div>
              <span>&bull;</span>
              <span>{post.date}</span>
            </div>
          </header>

          <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.imageHint}
              priority
            />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none mx-auto whitespace-pre-wrap leading-relaxed">
            {post.content}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
