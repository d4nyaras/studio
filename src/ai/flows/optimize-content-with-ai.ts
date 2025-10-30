'use server';

/**
 * @fileOverview An AI tool to analyze user engagement metrics and suggest content improvements.
 *
 * - optimizeContent - A function that takes user engagement data and landing page content,
 *   analyzes it, and suggests improvements.
 * - OptimizeContentInput - The input type for the optimizeContent function.
 * - OptimizeContentOutput - The return type for the optimizeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeContentInputSchema = z.object({
  engagementData: z
    .string()
    .describe(
      'User engagement metrics for the landing page, such as bounce rate, time on page, and conversion rates.'
    ),
  landingPageContent: z
    .string()
    .describe('The current content of the landing page, including text and any other relevant data.'),
});
export type OptimizeContentInput = z.infer<typeof OptimizeContentInputSchema>;

const OptimizeContentOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('AI-powered suggestions for improving the landing page content based on the engagement data.'),
});
export type OptimizeContentOutput = z.infer<typeof OptimizeContentOutputSchema>;

export async function optimizeContent(input: OptimizeContentInput): Promise<OptimizeContentOutput> {
  return optimizeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeContentPrompt',
  input: {schema: OptimizeContentInputSchema},
  output: {schema: OptimizeContentOutputSchema},
  prompt: `You are an AI-powered content optimizer. Analyze the user engagement data and the current landing page content to suggest improvements for better conversion rates.

User Engagement Data:
{{engagementData}}

Current Landing Page Content:
{{landingPageContent}}

Suggestions:
`,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const optimizeContentFlow = ai.defineFlow(
  {
    name: 'optimizeContentFlow',
    inputSchema: OptimizeContentInputSchema,
    outputSchema: OptimizeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
