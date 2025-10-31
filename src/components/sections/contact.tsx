'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'نام باید حداقل ۲ کاراکتر باشد.',
  }),
  email: z.string().email({
    message: 'لطفاً یک آدرس ایمیل معتبر وارد کنید.',
  }),
  message: z.string().min(10, {
    message: 'پیام باید حداقل ۱۰ کاراکتر باشد.',
  }),
});

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you'd send this data to your server.
    // For this demo, we'll just log it and show a toast.
    console.log(values);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'پیام ارسال شد!',
      description: "از تماس شما متشکریم. به زودی با شما تماس خواهیم گرفت.",
    });

    form.reset();
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">در تماس باشید</h2>
            <p className="text-muted-foreground text-lg mb-8">
              سوالی دارید یا می‌خواهید درباره طرح‌های سازمانی ما بیشتر بدانید؟ با ما تماس بگیرید، خوشحال می‌شویم کمک کنیم.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>تماس با ما</CardTitle>
              <CardDescription>برای ارسال پیام، فرم زیر را پر کنید.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>نام</FormLabel>
                        <FormControl>
                          <Input placeholder="نام شما" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ایمیل</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>پیام</FormLabel>
                        <FormControl>
                          <Textarea placeholder="چگونه می‌توانیم کمک کنیم؟" {...field} rows={5} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
