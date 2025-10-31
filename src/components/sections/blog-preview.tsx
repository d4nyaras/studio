import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/blog-posts';
import { ArrowLeft } from 'lucide-react';

export function BlogPreviewSection() {
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <section id="blog-preview" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">آخرین مطالب وبلاگ ما</h2>
          <p className="text-muted-foreground text-lg mb-12">
            از آخرین اخبار، نکات و بینش‌های تیم ما مطلع شوید.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {latestPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col overflow-hidden">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    data-ai-hint={post.imageHint}
                  />
                </div>
              </Link>
              <CardHeader>
                <CardTitle>
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>
                  {post.date} - توسط {post.author}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button variant="link" asChild className="p-0">
                  <Link href={`/blog/${post.slug}`}>
                    بیشتر بخوانید <ArrowLeft className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/blog">مشاهده همه مطالب</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
