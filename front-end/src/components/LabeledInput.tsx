import { ErrorMessage } from './ErrorMessage';
import { Input } from './Input';
import { Label } from './Label';

interface LabeledInputProps {
  formik: any;
  label: string;
  inputName: string;
  inputType: string;
  placeholder: string;
}

export function LabeledInput({
  formik,
  label,
  inputName,
  inputType,
  placeholder,
}: Readonly<LabeledInputProps>) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="email">{label}:</Label>
      <Input
        type={inputType}
        name={inputName}
        id={inputName}
        placeholder={placeholder}
        autoComplete="false"
        {...formik.getFieldProps(inputName)}
        className={
          formik.errors[inputName] && formik.touched[inputName]
            ? 'transition-all outline outline-1 outline-red-400'
            : null
        }
      />
      {formik.errors[inputName] && formik.touched[inputName] && (
        <ErrorMessage message={formik.errors[inputName]} />
      )}
    </div>
  );
}
