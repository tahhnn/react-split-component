import React, { Component, FormEvent, ReactNode } from "react";
import ButtonSubmit from "../buttonSubmit";

type Props = {
  handleSubmit: (e: FormEvent) => void;
  value: string;
  children: ReactNode;
};

const FormArea = ({ handleSubmit, children }: Props) => {
  return (
    <form className="min-w-full mx-auto" onSubmit={handleSubmit}>
      <div className="flex items-center flex-col  mb-2">
        {children}
        <ButtonSubmit text="Submit" />
      </div>
    </form>
  );
};

export default FormArea;
