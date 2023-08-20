"use client";

import React, { useMemo, useState } from "react";
import { useProviderModal } from "@/app/hooks/useProviderModal";
import { Modal } from ".";
import { Heading } from "../Heading";
import { categories } from "@/app/utils/categories";
import { CategoryInput } from "../Form/CategoryInput";
import { FieldValues, useForm } from "react-hook-form";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

export const ProviderModal = () => {
  const providerModal = useProviderModal();

  const [step, setStep] = useState(STEPS.CATEGORY);

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
      clientCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const category = watch("category");

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

  const bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of this best describes your service"
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

  return (
    <Modal
      actionLabel={actionLabel}
      isOpen={providerModal.isOpen}
      onClose={providerModal.onClose}
      onSubmit={providerModal.onClose}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      title="Become a service provider"
      body={bodyContent}
    />
  );
};
