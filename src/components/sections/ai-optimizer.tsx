'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { optimizeContent, type OptimizeContentInput } from '@/ai/flows/optimize-content-with-ai';
import { Wand2 } from 'lucide-react';

const formSchema = z.object({
  engagementData: z.string().min(10, {
    message: 'Please provide some engagement data.',
  }),
  landingPageContent: z.string().min(50, {
    message: 'Landing page content must be at least 50 characters.',
  }),
});

export function AiOptimizerSection() {
  const { toast } = useToast();
  const [suggestions, setSuggestions] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      engagementData: 'Example: Bounce Rate: 75%, Time on Page: 30s, Conversion Rate: 1%',
      landingPageContent:
        'Example: Welcome to our awesome service! We provide the best solutions for your business. Sign up now for a free trial and see the difference. Our platform is easy to use and integrates with all your favorite tools.',
    },
  });

  async function handleOptimizeContent(values: OptimizeContentInput) {
    try {
      const result = await optimizeContent(values);
      setSuggestions(result.suggestions);
      toast({
        title: 'Content Optimized!',
        description: 'AI-powered suggestions have been generated.',
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Could not generate suggestions. Please try again.',
      });
      setSuggestions('');
    }
  }

  return (
    <section id="ai-optimizer" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">AI-Powered Content Optimization</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Analyze user engagement and landing page content to get AI-driven suggestions for improvement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Content Analysis</CardTitle>
              <CardDescription>Input your data to get AI suggestions.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleOptimizeContent)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="engagementData"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>User Engagement Data</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Bounce Rate: 75%, Time on Page: 30s..." {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="landingPageContent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Landing Page Content</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Welcome to our awesome service..." {...field} rows={8} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? (
                      'Optimizing...'
                    ) : (
                      <>
                        <Wand2 className="mr-2 h-4 w-4" /> Optimize with AI
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>AI Suggestions</CardTitle>
              <CardDescription>Recommendations will appear here.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {form.formState.isSubmitting ? (
                <div className="space-y-4 pt-4">
                  <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-muted rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-muted rounded w-5/6 animate-pulse"></div>
                </div>
              ) : suggestions ? (
                <div className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">
                  {suggestions}
                </div>
              ) : (
                <div className="text-center text-muted-foreground py-12 flex flex-col items-center justify-center h-full">
                  <Wand2 className="mx-auto h-12 w-12 mb-4" />
                  <p>Your AI-powered suggestions will be displayed here.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
