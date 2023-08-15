"use client";

import { useCallback, useState } from "react";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { Modal } from ".";
import { useRegisterModal } from "@/app/hooks/useRegisterModal";
import { Heading } from "../Heading";
import { FormInput } from "../Form/Input";
import { Button } from "../Button";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { signIn } from "next-auth/react";

export const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const EMAIL_REGEX = /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/;

  const handleLoginModal = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Account creation successful");
        registerModal.onClose();
        loginModal.onOpen();
      })
      .catch((error) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Welcome"
        subtitle="Create an account to book a service"
        center
      />
      <FormInput
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <FormInput
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        pattern={EMAIL_REGEX}
      />
      <FormInput
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerCount = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />

      {/* <Button
        outline
        label="Continue with Twitter"
        icon={BsTwitter}
        onClick={() => {}}
      /> */}
      <div
        className="
      text-neutral-500
      text-center
      mt-4
      font-light     
      "
      >
        <div className="flex justify-center flex-row items-center gap-2">
          <div>Already have an account?</div>
          <div
            onClick={handleLoginModal}
            className="text-black font-bold px-2 bg-primary rounded-md cursor-pointer hover:underline hover:underline-offset-2"
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerCount}
    />
  );
};
