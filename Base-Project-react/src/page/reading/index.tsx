import Button from "@/components/button";
import ButtonSubmit from "@/components/buttonSubmit";
import FormArea from "@/components/form";
import TextArea from "@/components/textarea";
import React, { FormEvent } from "react";

const Reading = () => {
  const [isCardVisible, setCardVisibility] = React.useState(true);
  const handlePaymentTypeChange = (isCardSelected: boolean): void => {
    setCardVisibility(isCardSelected);
  };
  const [toppic, setToppic] = React.useState("");
  const [paragraph, setParagraph] = React.useState("");
  const handleSubmitToppic = (e: React.FormEvent) => {
    e.preventDefault();
    alert(toppic);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(paragraph);
  };

  return (
    <div>
      <section className="antialiased  min-h-full h-full bg-red ">
        <div className="relative max-w-screen mx-auto ">
          <div className="card w-full p-6 bg-base-100 shadow-xl mt-2">
            <div className="flex justify-center mt-2 pt-2">
              <div className="relative flex w-full sm:gap-3 md:gap-4 gap-5 rounded">
                <span
                  className="absolute inset-0 m-1 pointer-events-none"
                  aria-hidden="true"
                >
                  <span
                    className={`absolute inset-0 w-fit bg-white rounded border border-gray-200 shadow-sm transform transition duration-150 ease-in-out ${
                      isCardVisible ? "translate-x-0" : "translate-x-full"
                    }`}
                  ></span>
                </span>
                <Button
                  text={"Topic"}
                  isCardVisible={isCardVisible}
                  handlePaymentTypeChange={() => handlePaymentTypeChange(true)}
                />
                <Button
                  text={"Quizz"}
                  isCardVisible={!isCardVisible}
                  handlePaymentTypeChange={() => handlePaymentTypeChange(false)}
                />
              </div>
            </div>

            {isCardVisible ? (
              <div className="space-y-4">
                <p className="font-semibold py-4 sm:text-[24px] text-sm">
                  From your essay
                </p>

                <FormArea handleSubmit={handleSubmitToppic} value={toppic}>
                  <TextArea
                    value={toppic}
                    setValue={(value: string) => setToppic(value)}
                    placeholder="Type or paste the topic here..."
                  />
                </FormArea>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="font-semibold py-4 sm:text-[24px] text-sm">
                  From your essay
                </p>
                <FormArea handleSubmit={handleSubmit} value={paragraph}>
                  <TextArea
                    value={paragraph}
                    setValue={(value: any) => setParagraph(value)}
                    placeholder="Type or patse the paragraph here..."
                  />
                </FormArea>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reading;
