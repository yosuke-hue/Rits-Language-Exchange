"use client";

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from 'postcss'
import { useRouter } from "next/navigation"
import React from 'react'
import { useForm } from 'react-hook-form'
import { TypeOf, z } from 'zod';

const formSchema = z.object({
  username: z
  .string()
  .min(2,  {message:"ユーザー名は２文字以上で入力してください。"}), 
  title: z
  .string()
  .min(2,  {message:"タイトルは２文字以上で入力してください。"}), 
  content: z
  .string()
  .min(10,  {message:"本文は10文字以上で入力してください。"})
  .max(140, {message: "本文は140文字以下で入力してください。"}), 
})

const CreateBBSPage = () => {

  const router = useRouter(); 

  const form =useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "", 
      title: "", 
      content: "", 
    }, 
  })

  async function onSubmit (value: z.infer<typeof formSchema>) {
    const {username, title, content } = value;
    try {
      await fetch("http://localhost:3000/api/post", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username, title, content}), 
      })
      router.push("/");
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  }


    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-1/2 px-7">
        <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                <Textarea placeholder='お名前'　className='resize-none' {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                <Textarea placeholder='タイトル'　className='resize-none' {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea placeholder='投稿内容'　className='resize-none' {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
};
export default CreateBBSPage