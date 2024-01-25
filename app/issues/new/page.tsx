"use client";

import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { issueSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import { z } from "zod";
import delay from "delay";

type Issue = z.infer<typeof issueSchema>;

const NewIssuePage = async () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Issue>({
    resolver: zodResolver(issueSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setLoading(false);
      setError("An Unexpected Error occured.");
    }
  });

  await delay(5000);

  return (
    <div className="max-w-xl ">
      {error && (
        <Callout.Root color="red" className=" mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3" onSubmit={onSubmit}>
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isLoading}>
          Submit New Issue {isLoading && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
