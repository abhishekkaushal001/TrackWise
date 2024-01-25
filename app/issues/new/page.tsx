"use client";

import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueSchema } from "@/app/validationSchema";

type Issue = z.infer<typeof issueSchema>;

const NewIssuePage = () => {
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

  return (
    <div className="max-w-xl ">
      {error && (
        <Callout.Root color="red" className=" mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            setLoading(true);
            await axios.post("/api/issues", data);
            setLoading(false);
            router.push("/issues");
          } catch (error) {
            setError("An Unexpected Error occured.");
            setLoading(false);
          }
        })}
      >
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        {errors.title && (
          <Text color="red" as="p" size="2">
            {errors.title.message}
          </Text>
        )}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {errors.description && (
          <Text color="red" as="p" size="2">
            {errors.description.message}
          </Text>
        )}
        <Button>{(isLoading && "Processing...") || "Submit New Issue"}</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
