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
    message: 'لطفاً مقداری داده تعامل ارائه دهید.',
  }),
  landingPageContent: z.string().min(50, {
    message: 'محتوای صفحه فرود باید حداقل ۵۰ کاراکتر باشد.',
  }),
});

export function AiOptimizerSection() {
  const { toast } = useToast();
  const [suggestions, setSuggestions] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      engagementData: 'مثال: نرخ پرش: ۷۵٪، زمان ماندن در صفحه: ۳۰ ثانیه، نرخ تبدیل: ۱٪',
      landingPageContent:
        'مثال: به سرویس فوق‌العاده ما خوش آمدید! ما بهترین راه‌حل‌ها را برای کسب و کار شما ارائه می‌دهیم. اکنون برای یک دوره آزمایشی رایگان ثبت نام کنید و تفاوت را ببینید. پلتفرم ما استفاده آسانی دارد و با تمام ابزارهای مورد علاقه شما یکپارچه می‌شود.',
    },
  });

  async function handleOptimizeContent(values: OptimizeContentInput) {
    try {
      const result = await optimizeContent(values);
      setSuggestions(result.suggestions);
      toast({
        title: 'محتوا بهینه شد!',
        description: 'پیشنهادات مبتنی بر هوش مصنوعی تولید شدند.',
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'خطایی رخ داد',
        description: 'امکان تولید پیشنهادات وجود ندارد. لطفاً دوباره تلاش کنید.',
      });
      setSuggestions('');
    }
  }

  return (
    <section id="ai-optimizer" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">بهینه‌سازی محتوا با هوش مصنوعی</h2>
          <p className="text-muted-foreground text-lg mb-12">
            تعامل کاربر و محتوای صفحه فرود را تجزیه و تحلیل کنید تا پیشنهادات مبتنی بر هوش مصنوعی برای بهبود دریافت کنید.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>تحلیل محتوا</CardTitle>
              <CardDescription>داده‌های خود را برای دریافت پیشنهادات هوش مصنوعی وارد کنید.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleOptimizeContent)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="engagementData"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>داده‌های تعامل کاربر</FormLabel>
                        <FormControl>
                          <Textarea placeholder="مثال: نرخ پرش: ۷۵٪، زمان در صفحه: ۳۰ ثانیه..." {...field} rows={4} />
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
                        <FormLabel>محتوای صفحه فرود</FormLabel>
                        <FormControl>
                          <Textarea placeholder="مثال: به سرویس عالی ما خوش آمدید..." {...field} rows={8} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? (
                      'در حال بهینه‌سازی...'
                    ) : (
                      <>
                        <Wand2 className="ml-2 h-4 w-4" /> بهینه‌سازی با هوش مصنوعی
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>پیشنهادات هوش مصنوعی</CardTitle>
              <CardDescription>توصیه‌ها در اینجا ظاهر خواهند شد.</CardDescription>
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
                  <p>پیشنهادات مبتنی بر هوش مصنوعی شما در اینجا نمایش داده خواهند شد.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
