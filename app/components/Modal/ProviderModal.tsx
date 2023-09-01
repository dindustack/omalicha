"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

import { useProviderModal } from "@/app/hooks/useProviderModal";
import { categories } from "@/app/utils/categories";

import { Modal } from ".";
import { Heading } from "../Heading";
import { CategoryInput } from "../Form/CategoryInput";
import { CountrySelect } from "../Form/CountrySelect";
import { Counter } from "../Form/Counter";
import { ImageUpload } from "../Form/ImageUpload";
import { FormInput } from "../Form/Input";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

export const ProviderModal = () => {
  const router = useRouter();
  const providerModal = useProviderModal();

  const [step, setStep] = useState(STEPS.CATEGORY);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      capacity: 1,
      restroom: 1,
      parkingCount: 1,
      imageSrc: "",
      title: "",
      description: "",
      price: 1,
    },
  });

  const category = watch("category");
  const location = watch("location");
  const capacity = watch("capacity");
  const restroom = watch("restroom");
  const parkingCount = watch("parkingCount");
  const imageSrc = watch("imageSrc");

  const DynamicMap = useMemo(
    () =>
      dynamic(() => import("../Map").then((mod) => mod.Map), {
        ssr: false,
      }),
    [location]
  );

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRICE) {
      return onNext();
    }

    setIsLoading(true);

    axios
      .post("/api/listings", data)
      .then(() => {
        toast.success("Service Created!");
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY);
        providerModal.onClose();
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of this best describes your venue"
        subtitle="Pick a category"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {React.Children.toArray(
          categories.map((item) => (
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          ))
        )}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your venue located?"
          subtitle="Help clients find you!"
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue("location", value)}
        />
        <DynamicMap center={location?.latlng} />
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Share basic information about your venue"
          subtitle="What services do you offer?"
        />

        <Counter
          title="Capacity"
          subtitle="What is the seating capacity?"
          value={capacity}
          onChange={(value) => setCustomValue("capacity", value)}
        />

        <Counter
          title="Restroom"
          subtitle="How many restrooms?"
          value={restroom}
          onChange={(value) => setCustomValue("restroom", value)}
        />

        <Counter
          title="Parking"
          subtitle="How is the parking size?"
          value={parkingCount}
          onChange={(value) => setCustomValue("parkingCount", value)}
        />
      </div>
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add a photo of your venue"
          subtitle="Show clients your venue"
        />
        <ImageUpload
          value={imageSrc}
          onChange={(value) => setCustomValue("imageSrc", value)}
        />
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="How would you describe your venue"
          subtitle="The shorter the better!"
        />
        <FormInput
          id="title"
          label="Title"
          type="text"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <FormInput
          id="description"
          label="Description"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Set your service fee"
          subtitle="How much do you charge per service?"
        />

        <FormInput
          id="price"
          label="Price"
          formatPrice
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    );
  }

  return (
    <Modal
      actionLabel={actionLabel}
      isOpen={providerModal.isOpen}
      onClose={providerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      title="Become a venue provider"
      body={bodyContent}
    />
  );
};
