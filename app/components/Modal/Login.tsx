"use client";

import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import { Modal } from ".";
import { Heading } from "../Heading";
import { FormInput } from "../Form/Input";
import { Button } from "../Button";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { useRegisterModal } from "@/app/hooks/useRegisterModal";
import { useRouter } from "next/navigation";

export const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const EMAIL_REGEX = /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/;

  const handleSignupModal = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [registerModal, loginModal]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Successfully logged in");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading title="Welcome back" subtitle="Login to book a service" center />
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
        label="Password"
        type="password"
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
        label="Login with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />

      <Button
        outline
        label="Login with Twitter"
        icon={BsTwitter}
        onClick={() => {}}
      />
      <div
        className="
      text-neutral-500
      text-center
      mt-4
      font-light     
      "
      >
        <div className="flex justify-center flex-row items-center gap-2">
          <div>Don&apos;t have an account?</div>
          <div
            onClick={handleSignupModal}
            className="text-black font-bold py-1 px-2 bg-primary rounded-md cursor-pointer hover:underline hover:underline-offset-2"
          >
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Login"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerCount}
    />
  );
};
