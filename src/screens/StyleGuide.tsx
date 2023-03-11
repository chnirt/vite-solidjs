import React from "react";
import Button from "../components/button";

const StyleGuide = () => {
  return (
    <div>
      StyleGuide
      <h1 className="text-3xl font-bold underline text-red-500 font-inter">
        Hello world!
      </h1>
      <h1 className="text-3xl font-bold underline text-red-500 font-roboto">
        Hello world!
      </h1>
      <div className="space-y-2">
        <h2 className="text-green-500 text-lg font-bold">Primary</h2>
        <div className="flex items-center gap-4">
          <Button intent="primary" size="small" roundness="square">
            Small
          </Button>
          <Button intent="primary" size="medium" roundness="round">
            Medium
          </Button>
          <Button intent="primary" size="large" roundness="pill">
            Large
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-red-500 text-lg font-bold">Secondary</h2>
        <div className="flex items-center gap-4">
          <Button intent="secondary" size="small" roundness="square">
            Small
          </Button>
          <Button intent="secondary" size="medium" roundness="round">
            Medium
          </Button>
          <Button intent="secondary" size="large" roundness="pill">
            Large
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
