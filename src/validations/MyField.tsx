import clsx from "clsx";
import { Field } from "react-final-form";

export const MyField = ({ name, ...rest }: any) => (
    <Field
      name={name}
      subscription={{
        error: true,
        submitError: true,
        dirtySinceLastSubmit: true,
        touched: true,
      }}
    >
      {({ meta: { error, submitError, dirtySinceLastSubmit, touched } }) => {
        const hasError =
          (error || (submitError && !dirtySinceLastSubmit)) && touched;
        const errorText = error || submitError;
        return (
          <div>
            <Field
              name={name}
              {...rest}
              className={clsx(
                "block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input",
                {
                  "border-red-600 focus:border-red-400 focus:shadow-outline-red":
                    hasError,
                }
              )}
            />
            {
              <span className="inline-block text-xs text-red-600 dark:text-red-400">
                {errorText}
              </span>
            }
          </div>
        );
      }}
    </Field>
  );